---
title : "[UE5] Modifires로 여러 값 반환하기"
categories: ue5
tags: [Unrealengine5, UE5, EnhancedInput, 언리얼엔진5]
---

## EnhancedInput
언리얼엔진5은 기존 InputSystem을 대체하는 Enhanced Input을 이용해 더 확장성 높고 사용하기 편한 입력 시스템을 만들었다. 이 시스템 중 `Input Mapping Context`는 하나 이상의 `Input Action`을 트리거 할 수 있게 해준다.

### Mapping Context 설정
`Mapping Context`가 하는 일을 나열해 보자면
- 키 등록 - 어떤 키를 입력해야 `InputAction`이 실행되는지 설정
- `Trigger` - 특정 키를 홀딩 등 키입력 조건을 설정
- `Modifiers` - 반환 되는 값을 수정

## 하나의 액션으로 여러값 반환
하나의 동작을 하는데 여러 종류의 반환 값이 필요한 경우가 있다. 예를 들면 **이동**이 있을 것이다. 이동은 상하좌우 총 **4가지** 종류의 행동을 할 수 있기에 4종류의 반환 값이 필요하다. 만약 InputAction을 4개를 만들어 각각 하나의 키를 맵핑 하는 방식으로 이동을 구현 한다면 상당히 번거로울 것이다.

하지만 `Modifiers`를 이용하면 하나의 `InputAction`으로 여러 값을 반환할 수 있다.

|키|원하는 값|Modifire|
|:---:|:---:|:---:|
|w|(0, 1)|Swizzle Input Axis Values|
|A|(-1,0)|Negate|
|S|(0, -1)|Negate, Swizzle Input Axis Values|
|D|(1, 0)|None|

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/e65b77fc-c37f-487d-bb1f-74cd250c576d)



<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://docs.unrealengine.com/5.0/ko/enhanced-input-in-unreal-engine/">https://docs.unrealengine.com/5.0/ko/enhanced-input-in-unreal-engine/</a>
</p>
</div>