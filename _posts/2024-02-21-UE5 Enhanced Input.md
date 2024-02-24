---
title : "[UE5] Enhanced Input"
categories: ue5
tags: [UnrealEngine5, Actor, Component, C++]
---

## EnhancedInput?
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/a97835eb-26a9-4120-8bd5-e04c51590fd8)
EnhancedInput 시스템은 Unreal Engine5에 등장한 새로운 Input 시스템으로 기존 InputSystem 보다 더 나은 기능 및 확장성을 가졌다. 이 포스팅에서는 코드로 EngancedInput를 사용하는 법을 작성할 것이다.

## EnhancedInput 모듈준비
EnhancedInput은 코드로 작성할 수 있다. EnhancedInput 시스템을 사용하기 전에 먼저 모듈을 추가시켜줘야 한다.

### 1.모듈이란
UEnhancedInputLocalPlayerSubSystem는 EnhancedInputSubsystems.h 헤더 안에 있다 이 헤더를 쓰기 위해선 모듈을 추가해줘야 한다.

---
### 2.모듈추가
모듈은 플러그인을 빌드에 포함시키게 해주는 것으로 언리얼이 모든 플러그인이 아닌 필요한 플러그인만 빌드 시키게 함으로써 성능 향상 시켜준다.
![스크린샷 2024-02-21 125554](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/4f373422-5831-4b69-8cd3-cef821f8f859)

플러그인은 `Engine/UE5/Plugins` 안에 있는 파일들에 볼 수 있으며 `프로젝트이름.Build.cs`파일에서 모듈을 관리할 수 있다.

---
### 3.빌드 및 임시파일 초기화
![스크린샷 2024-02-21 130600](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/009474f9-35d1-42c5-b3df-e0fdcc9f2e49)

추가 후 CTRL+SHIFT+B로 빌드 해주면 헤더를 사용할 수 있다.
안되는 경우 컴파일시 생성되는 임시파일을 삭제해줘야 한다. 프로젝트 폴더에 가서 Binaries, Intermediate, Saved 폴더를 삭제한다.


![스크린샷 2024-02-21 130747](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/b3854688-4d87-46c1-8ef0-8fb827ebf289)

그리고 프로젝트파일 우클릭 후 Generate Visual Studio project files를 눌러 삭제한 폴더들을 다시 만든다.

## 코드로 EnhancedInput 작성
### 1-1. MappingContext
코드로 사용하기 위해선 로컬플레이어 Input Subsystem인 [UEnhancedInputLocalPlayerSubSystem](https://docs.unrealengine.com/4.27/en-US/API/Plugins/EnhancedInput/UEnhancedInputLocalPlayerSubsyst-/)이 필요하다.

```cpp
void UMyPlayer::BeginPlay()
{
	Super::BeginPlay();
	if (APlayerController* PlayerController = Cast<APlayerController>(GetController())) {
		if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem< UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer())) {
			Subsystem->AddMappingContext("MAPPING CONTEXT VARIABLE", 0);
		}
	}
}
```
---
### 1-2. Component에서 사용할 시
`GetControll`메타함수는 `Pawn` 이하 클래스에서만 사용 할 수 있다. Component는 컨트롤러를 가지고 있지 않기 때문에 Pawn의 컨트롤러를 가져와야한다.

```cpp
AController* UGrabber::GetOwnerController() const {
	AActor* Owner = GetOwner();
	if (Owner) {
		APawn* PawnOwner = Cast<APawn>(Owner);
		if (PawnOwner) {
			return PawnOwner->GetController();
		}
	}
	return nullptr;
}
```

다만 게임설계상 컴포넌트에서 직접 하는 것 보단 컴포넌트를 관리하는 Actor에서 Input을 관리하는 것이 더 좋다.

![스크린샷 2024-02-21 170725](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/80ee01ac-c280-40ee-9989-3b32e152886b)

위 과정을 BP로 할 경우 이렇게 된다.

---

### 2. InputAction 사용
이제 `MappingContext`를 시스템에 적용했으니 키를 누르면 InputAction 입력 값이 나올 것이다.
InputAction의 값을 쓰고 싶으면 [FInputActionValue](https://docs.unrealengine.com/4.26/en-US/API/Plugins/EnhancedInput/FInputActionValue/)타입 변수를 써야한다.

```cpp
#include "InputActionValue.h"
void Grab(const FInputActionValue& Value);
```

---

### 3. 바인딩 추가
키가 입력 됬을 때 특정 함수를 실행 시키고 싶다면 [EnhancedInputComponent](https://docs.unrealengine.com/4.27/en-US/API/Plugins/EnhancedInput/UEnhancedInputComponent/)를 사용하면 된다.

```cpp
#include "EnhancedInputComponent.h"
#include "Components/InputComponent.h"

void UMyPlayer::SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) {
	if (UEnhancedInputComponent* EnhancedInputComponent = CastChecked<UEnhancedInputComponent>(PlayerInputComponent)) {
		EnhancedInputComponent->BindAction(GrabAction,ETriggerEvent::Started, this, &UGrabber::Grab);
	}
}
```
PlayerController에 의해 호출되는  [APawn::SetupPlayerInputComponent](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/GameFramework/APawn/SetupPlayerInputComponent/)함수에서 InputComponent를 EnhancedInputComponent로 캐스팅 후 키 입력시 발생할 함수를 바인딩 해준다.

만약 CastChecked가 실패할 경우 게임이 크래시되어 종료한다.


## :page_with_curl: Reference
> [UE5 C++ Enhanced Input-2 Bind C++ Functions to Input Actions](https://www.youtube.com/watch?v=fW1pXOAIviw)
> [UE5 - EnhancedInput 공식문서](https://docs.unrealengine.com/5.0/ko/enhanced-input-in-unreal-engine/)