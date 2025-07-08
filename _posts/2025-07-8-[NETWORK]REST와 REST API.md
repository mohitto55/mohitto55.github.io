---
title : "[Network] REST와 REST API"
categories: network
tags: [Network, TCPIP, REST, REST API, API]
---

# REST

- Representational State Transfer의 약자로 소프트웨어 프로그램 아키텍처 중 하나입니다.
- 자원을 이름으로 구분하여 자원의 상태를 주고 받는 방식을 말합니다.

## REST의 구성 3가지

- **자원(Resource)**: 웹에서 다루는 대상 데이터 (예: 사용자, 게시글, 상품 등)을 HTTP URI를 통해 를 명시합니다.
    - ex) [https://api.example.com/users/123](https://api.example.com/users/123)
- **HTTP Method:** POST, GET, PUT, DELETE, PATCH등 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미합니다.
- **메세지**: 클라이언트가 서버에 요청하거나, 서버가 클라이언트에 응답할 때 주고받는 **데이터(payload)** 를 의미합니다.
    - 보통 JSON이나 XML 형태로 보내는 내용입니다.

---

### CRUD Operation이란

CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말로 REST에서의 CRUD Operation 동작 예시는 다음과 같다.

>Create : 데이터 생성(POST)
>Read : 데이터 조회(GET)
>Update : 데이터 수정(PUT, PATCH)
>Delete : 데이터 삭제(DELETE)

## REST 특징

- **Stateless**
    - 각 요청은 독립적이고, 서버는 이전 요청 상태를 기억하지 않습니다. (이전 상태를 저장하지 않습니다.)
- **일관된 인터페이스**
    - URL을 활용해 자원을 명시합니다.
    - CRUD로 행위를 표현합니다.
- **계층화된 시스템 (Layered System)**
    - 클라이언트는 중간 서버(예: 프록시, 로드 밸런서)를 인식하지 못합니다.
    - 구조를 여러 계층으로 나눠 확장성과 보안 향상합니다.
- **온디멘드 코드**
    - 서버가 클라이언트에게 실행 가능한 코드를 전달 가능합니다.


# REST API

REST 아키텍처를 따르는 API입니다. 즉, 웹 주소(URL)로 특정 데이터를 가리키고, HTTP 메서드(GET, POST 등)를 써서 그 데이터에 대해 필요한 작업을 요청하는 방식입니다.

---

### REST API 장점
- 직관적이라 누구나 쉽게 이해하고 사용할 수 있습니다. URL만 보면 어디에 무슨 데이터가 있는지 알 수 있고, HTTP 메서드도 조회는 GET, 생성은 POST로 명확히 정해져 있습니다.
- 클라이언트와 서버 역할이 분리되어 따로 개발하거나 수정해도 문제가 생기지 않습니다.
- 큰 서비스에도 확장성이 좋고 유지보수가 편합니다.
- 표준화되어 있어서 모바일, 웹, 다른 서버와도 쉽게 연결할 수 있습니다.

<br>
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://kks2140501.tistory.com/48">https://kks2140501.tistory.com/48</a>
<a href="https://aws.amazon.com/ko/what-is/restful-api/">https://aws.amazon.com/ko/what-is/restful-api/</a>
<a href="https://creamilk88.tistory.com/184">https://creamilk88.tistory.com/184</a>
</p>
</div>