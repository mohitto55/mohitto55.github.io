---
date: 2025-12-21
published: true
title: "[AWS] DynamoDB 원자성을 보장하는법 - Transaction"
categories: network
tags: [DynamoDB, 다이나모디비, AWS, 멱등성, TransactWriteItems, TransactGetItems]
---


# Explanation
DynamoDB는 뛰어난 성능과 확장성을 자랑하지만, 기본적으로 `PutItem`이나 `UpdateItem` 같은 작업은 **단일 항목(Item)에 대해서만 원자성(Atomicity)을 보장**합니다. 즉, 여러 아이템을 동시에 수정할 때, 하나는 성공하고 다른 하나는 실패하는 **데이터 불일치**가 발생할 수 있다는 뜻입니다.

이 글에서는 이러한 문제를 해결하기 위해 등장한 **DynamoDB Transactions** 기능을 소개합니다. 여러 작업을 **"전부 성공하거나, 전부 실패하는(All-or-Nothing)"** 하나의 단위로 묶어 처리하는 방법과 그 내부 동작 원리를 자세히 알아봅니다.


## TransactWriteItems API
`TransactWriteItems`는 최대 100개의 쓰기 작업을 한 번에 모두 수행하거나 아무것도 수행하지 않는 작업으로 그룹화하는 동기식 idempotent 쓰기 작업입니다. 트랜잭션 내 항목의 총 크기는 **4MB를 초과할 수 없습니다.** 작업은 원자 단위로 완료되므로 작업이 모두 성공하거나 모두 실패하게 됩니다.

### 트랜잭션 완료 후
트랜잭션이 완료되고 변경ㅎ사항이 GSI, 스트림, 백업 등에 전파되기 **시작**합니다.
이는 시간차를 두고 진행되며 스트림 이벤트를 확인했을때 시간이 다르게 나타날 수 있습니다.
그래서 스트림을 이용하면 트랜잭션 **원자성**, 순서가 보장된다고 봐선 안됩니다.

### 멱등성
DynamoDB에서 `TransactWriteItems`를 쓸 때 **클라이언트 토큰(Client Token)** 이라는 이름표를 붙여서 보내면 이 기능을 쓸 수 있습니다.
- 어떻게 작동하나요?
    1. **첫 번째 클릭:** "주문 번호 #123으로 결제해 줘." → **성공** (실제로 데이터를 수정함)
    2. **두 번째 클릭 (실수):** "주문 번호 #123으로 결제해 줘." → **"이미 처리된 주문입니다."** (데이터 수정 없이 성공했다고 응답만 줌)

### 쓰기 오류 상황들
- **조건 불만족:** 잔액이 100만 원 이상일 때만 이체해 줘라고 했는데, 잔액이 500원인 경우.
- **자기끼리 충돌:** 한 장의 주문서 안에서 UPDATE랑 DELETE를 동시에 요청한 경우 (논리 오류).
- **다른 작업과 충돌:** 내가 이 물건을 사려고 결제 중인데, **동시에** 다른 사람이 그 물건을 사려고 하는 경우 (`TransactionCanceledException`).
- **용량 부족:** DB가 너무 바빠서 지금 요청을 받을 수 없는 경우.
- **사이즈 초과:** 항목 크기가 너무 커서(400KB 이상) 못 싣는 경우.
- **사용자 실수:** 데이터 형식을 엉망으로 써서 보낸 경우.

## TransactGetItems API
`TransactGetItems`는 최대 100개의 Get 작업을 그룹화하는 동기식 읽기 작업입니다.
트랜잭션 내 항목의 총 크기는 4MB를 초과할 수 없습니다.

`Get` 작업은 원자 단위로 수행되므로 작업이 모두 성공하거나 모두 실패하게 됩니다.

### 읽기 오류 상황들
- **충돌 발생:** 내가 서류를 읽으려는 찰나에, 누군가 그 서류를 `TransactWriteItems`로 수정하고 있어서 접근이 거부된 경우 (`TransactionCanceledException`).
- **용량 부족:** 100명을 한 번에 입장시키려는데, 도서관(DB)의 허용 인원(프로비저닝 용량)이 꽉 차서 들어갈 수 없는 경우.
- **사용자 실수:** 요청 양식을 잘못 썼거나 데이터 형식이 엉망인 경우.
- **사이즈 초과:** 읽어오려는 데이터들을 보따리에 담았더니 너무 무거워서(총 4MB 초과) 못 들고 나오는 경우.
- **개수 초과:** 한 번에 욕심내서 100개가 넘는 아이템을 읽으려고 시도한 경우.

## DynamoDB Transactions의 격리 수준
**격리 수준:** 트랜잭션이 진행되는 동안 외부에서는 어떤 상태로 보이는지에 대한 규칙입니다.

### 직렬화 (Serializable)
![image](https://github.com/user-attachments/assets/85dc9cd4-c53f-4f15-8b03-58f8641acc2a)
- **가장 높은 수준의 격리성**입니다.
	- 수정 중인 찰나의 순간은 절대 안 보여줍니다. 완벽한 과거 혹은 완벽한 미래만 존재합니다.       
- 여러 트랜잭션이 동시에 실행되더라도, 그 결과는 **"마치 하나씩 순서대로 실행한 것과 100% 똑같아야 한다"** 는 원칙입니다.
- 동시에 실행되는 작업끼리 서로 절대 간섭하지 못하게 **완벽하게 차단**합니다.
#### DynamoDB에서의 실제 작동
- **대상:** `TransactWriteItems` (쓰기 트랜잭션) ↔ `GetItem` (단건 조회)
- **동작:** 트랜잭션이 아이템 A를 수정하고 있다면, 그 작업이 **완전히 끝나기 전까지는** 다른 누군가가 `GetItem`으로 A를 절대 읽을 수 없습니다. (혹은 수정 전의 값만 읽힘)
- **결과:** 사용자는 항상 **수정 전의 완벽한 과거**나, **수정 후의 완벽한 미래** 중 하나만 보게 됩니다. **"수정 중인 찰나의 순간"은 절대 노출되지 않습니다.**
### 읽기 커밋됨 (Read Committed)
![image](https://github.com/user-attachments/assets/42ac672f-96a3-4813-b788-117449923069)
- **"커밋(확정)된 데이터만 읽을 수 있다"** 는 원칙입니다.
- 즉, 트랜잭션이 실패하거나 아직 진행 중이라서 **임시로 변경된 데이터(Dirty Read)** 는 읽지 못하게 막습니다.
- **핵심 한계점:** "확정된 데이터"를 읽는 건 보장하지만, **"여러 데이터를 읽을 때 그 데이터들이 모두 '동일한 시점'의 데이터임"은 보장하지 않습니다.** (이걸 'Non-Repeatable Read' 허용이라고 합니다.)

#### DynamoDB에서의 실제 작동
- **대상:** `TransactWriteItems` (쓰기 트랜잭션) ↔ `BatchGetItem`, `Query` (다건 조회)
- **동작:** `BatchGetItem`으로 10개를 요청하면, DynamoDB는 내부적으로 10개의 읽기 작업을 수행합니다. 이때 **각각의 개별 읽기는 '확정된 데이터'를 가져오는 게 맞습니다.**
- **문제 상황:** 하지만 1번 아이템을 읽고 2번 아이템을 읽으려는 **그 찰나의 틈**에, 트랜잭션이 2번 아이템을 수정해버릴 수 있습니다.
- **결과:** 1번은 **수정 전** 데이터(커밋됨), 2번은 **수정 후** 데이터(커밋됨)를 가져오게 됩니다. 둘 다 "유효한" 데이터는 맞지만, **서로 시점이 어긋난 데이터(짝이 안 맞는 데이터)**를 손에 쥐게 됩니다.

### 작업 요약
트랜잭션 작업(`TransactWriteItems` 또는 `TransactGetItems`)과 다른 작업 사이의 격리 수준을 보여줍니다.

| Operation        | 격리 수준    |
| ---------------- | -------- |
| `DeleteItem`     | 직렬화    |
| `PutItem`        | 직렬화    |
| `UpdateItem`     | 직렬화    |
| `GetItem`        | 직렬화    |
| `BatchGetItem`   | 읽기 커밋됨 |
| `BatchWriteItem` | 직렬화 불가 |
| `Query`          | 읽기 커밋됨 |
| `Scan`           | 읽기 커밋됨 |
| 기타 트랜잭션 작업       | 직렬화    |

## DynamoDB의 트랜잭션 충돌 처리
트랜잭션 안의 항목에 대해 항목 수준에서 동시에 여러 요청이 있을 경우 트랜잭션 충돌이 발생할 수 있습니다. 다음과 같은 시나리오에서 트랜잭션 충돌이 발생할 수 있습니다.

| 나의 작업                             | 상대방의 작업                               | 발생하는 예외 (Exception)                          |
| --------------------------------- | ------------------------------------------- | -------------------------------------------- |
| 일반 쓰기  <br>(Put/Update/Delete)    | 진행 중인 **트랜잭션 쓰기**  <br>(TransactWriteItems) | TransactionConflictException  <br>(요청 거부됨)   |
| 트랜잭션 쓰기  <br>(TransactWriteItems) | 진행 중인 **또 다른 트랜잭션**                         | TransactionCanceledException  <br>(트랜잭션 취소됨) |
| 트랜잭션 읽기  <br>(TransactGetItems)   | 진행 중인 **쓰기 작업들**  <br>(Write/Put/Delete 등)  | TransactionCanceledException  <br>(트랜잭션 취소됨) |

**중요: SDK 재시도 정책**  
트랜잭션 충돌로 인해 TransactionCanceledException이 발생하면, **AWS SDK는 자동으로 재시도(Retry)하지 않습니다.**  
(이유: 데이터 상태가 변했으므로, 애플리케이션 로직에서 새 데이터를 읽고 다시 판단해야 하기 때문입니다.)

### 📋기타 일반적인 오류
- **조건 불만족:** "잔액 부족" 등 조건식(ConditionCheck) 실패.
- **용량 부족:** 프로비저닝된 처리량(Throughput) 초과.
- **크기 제한:** 트랜잭션 내 항목 크기 합계 4MB 초과 또는 개별 항목 400KB 초과.


---

<br>
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-conflict-handling">https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-conflict-handling</a></p>
</div>