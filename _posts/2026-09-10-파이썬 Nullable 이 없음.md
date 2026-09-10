---
date: 2026-09-10
published: true
title: "파이썬 Nullable 이 없음"
categories: 
tags: []
---

![image]()

이 글에서 다루는 개념을 한두 문장으로 요약하고, 왜 정리하게 됐는지 적는다.

---

## 개념
파이썬에는 타 언어(C#, Java 등)의 nullable처럼 별도의 데이터 타입으로 존재하는 Nullable 개념이 없습니다.대신 파이썬은 None 객체와 타입 힌트(Type Hinting)를 사용하여 값이 비어있을 수 있음을 표현합니다.1. None과 조건문 사용 (기본 방식)파이썬에서 '값이 없음'을 나타내는 기본 객체는 None입니다.python# 변수에 값이 없을 수 있음을 None으로 표현
user_name = None 

if user_name is None:
    print("이름이 입력되지 않았습니다.")
코드를 사용할 때는 주의가 필요합니다.2. 최신 파이썬의 Nullable 표현 (타입 힌트)코드를 작성할 때 이 변수가 None이 될 수 있음을 명시하려면 타입 힌트를 사용합니다. 파이썬 버전에 따라 표기법이 다릅니다.Python 3.10 이상 (권장): | (OR) 연산자를 사용해 데이터 타입과 None을 결합합니다.python# age는 int(정수)일 수도 있고, None일 수도 있음
age: int | None = None
코드를 사용할 때는 주의가 필요합니다.Python 3.9 이하: typing 모듈의 Optional 또는 Union을 사용합니다.pythonfrom typing import Optional, Union

age: Optional[int] = None
age: Union[int, None] = None
코드를 사용할 때는 주의가 필요합니다.

### 비유로 이해하기
쉽게 떠올릴 수 있는 비유를 하나 든다.

---

## 등장 배경
어떤 문제를 풀기 위해 나왔는지 적는다.
- 문제 1
- 문제 2

---

## 동작 원리
1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계

<div class='callout-info-expanded'>
<div class='callout-header'>참고</div>
<p>
알아두면 좋은 내용<br>
여러 줄은 br 태그로 나눈다
</p>
</div>

---

## 장단점

| 구분 | 내용 |
| --- | --- |
| 장점 |  |
| 단점 |  |

---

## 정리
언제 쓰고 언제 쓰지 말아야 하는지, 내 결론을 적는다.

<br>
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href=""></a>
</p>
</div>
