---
title : "[UE5] Actor Pawn Character 비교"
categories: ue5
tags: [Unreal Engine5, Actor, Pawn, Character, Component, UE5]
---

언리얼 엔진에선 화면상에 움직이는 객체들을 Actor라고 한다.
Actor는 3가지 종류가 있으며 각각 적합한 상황에 쓰인다.


## Actor
- 언리얼 엔진의 레벨에 배치할 수 있는 오브젝트를 의미한다.
- 직접 무언가를 실행하는 기능은 주로 컴포넌트가 하고 Actor는 컴포넌트를 담는 포장지 같은 역할만 한다.

## Pawn
- Actor를 상속받는 클래스
- 플레이어나 AI가 제어할 수 있는 모든 액터의 베이스
- Input 처리와 길찾기 시스템을 쓸 수 있다.
    - Input처리를 PlayerController와 비교하면 Pawn에서 처리하는 것이 좋다.

## Character
- Pawn을 상속받는 클래스
- 복잡한 여러 애니메이션을 수행할 때 사용하는 클래스다.
- 인간형 캐릭터에 적합하며 그 이외의 모습이면 작동이 잘 되지 않는다.
