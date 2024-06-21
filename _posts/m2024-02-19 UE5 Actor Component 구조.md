---
title : "[UE5] Actor, Component, GameMode 개념 정리"
categories: ue5
tags: [UnrealEngine5, Actor, Component, C++]
---

## 언리얼 엔진의 기본 개념
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/dc1725b2-1c5c-42de-858a-6815405e0069)

### 컴포넌트
- 직접 코드를 작성해 시스템을 수행하는 모듈
- 액터의 추가 기능 확장 모듈이라 생각하면 된다.
- 트랜스폼 여부에 따라 불리는 이름이 다르다
	- *액터 컴포넌트* - 트랜스폼 없이 기능만 제공
	- *씬컴포넌트* - 트랜스폼이 있을 경우

---
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/cd11bf2a-8c14-4878-aa1e-7ae71738be73)

### Actor
- 월드내에 존재하는 유형, 무형의 **게임 오브젝트**
- 반드시 보이는 것 뿐만이 아닌 시스템 적으로 하는 무언가도 포함
- 사실상 혼자 무언가를 하기 힘듦
	- 그래서 주로 *배경 오브젝트*에 쓰임
- 주요 기능은 **컴포넌트**라고 하는 직접 코드를 작성해 시스템을 수행하는 모듈이 다한다.

### Pawn
- Actor를 상속받고  이 단계부터 입출력 처리 가능
- 움직이는 무언가를 만들때 Pawn을 사용
- 다양한 기능을 가진다.
	- 기믹과 상호작용 - 충돌 컴포넌트(루트 컴포넌트로 설정됨)
	- 시각적 비주얼 - Mesh 컴포넌트를 바탕으로 표현된다.
	- 움직임 담당 컴포넌트 - Movement 컴포넌트로 움직임 구현을 한다.

### Character
- Pawn을 상속받고 **사람과 같은** 이족 보행 캐릭터의 애니메이팅 도와주는 기능 포함
- 사람과 다른 괴물 형태의 메쉬를 사용시 부자연스럽다.

---
### PlayerController
![[PlayerController And Pawn.excalidraw]]
- 액터에 **빙의(Possess)** 하는 PlayerController
- 화면에 보이는 무언가가 아닌 플레이어 그 자체
- 캐릭터, 카메라를 제어하거나 상호작용 할 때 사용하는 클래스


### GameMode
- 플레이어의 입장관리
- 게임의 규칙과 승패 판정
- 멀티 게임으로 넘어갈 시 데이터 검증

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/db438e44-bfc7-4f69-82ec-5e3d7440e41f)*최종 시스템 구조*