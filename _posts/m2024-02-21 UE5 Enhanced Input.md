---
title : "[UE5] Enhanced Input"
categories: ue5
tags: [UnrealEngine5, Actor, Component, C++]
---

## EnhancedInput Trigger 작성하기
EnhancedInput 트리거를 코드로 작성할 수 있다.  EnhancedInput 시스템을 사용하기 전에 먼저 모듈을 추가시켜줘야 한다.

### 1.모듈이란
UEnhancedInputLocalPlayerSubSystem는 EnhancedInputSubsystems.h 헤더 안에 있다 이 헤더를 쓰기 위해선 모듈을 추가해줘야 한다.

### 2.모듈추가
모듈은 플러그인을 빌드에 포함시키게 해주는 것으로 언리얼이 모든 플러그인이 아닌 필요한 플러그인만 빌드 시키게 함으로써 성능 향상 시켜준다.
![스크린샷 2024-02-21 125554](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/4f373422-5831-4b69-8cd3-cef821f8f859)

플러그인은 `Engine/UE5/Plugins` 안에 있는 파일들에 볼 수 있으며 `프로젝트이름.Build.cs`파일에서 모듈을 관리할 수 있다.

### 3.빌드 및 임시파일 초기화
![스크린샷 2024-02-21 130600](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/009474f9-35d1-42c5-b3df-e0fdcc9f2e49)

추가 후 CTRL+SHIFT+B로 빌드 해주면 헤더를 사용할 수 있다.
안되는 경우 컴파일시 생성되는 임시파일을 삭제해줘야 한다. 프로젝트 폴더에 가서 Binaries, Intermediate, Saved 폴더를 삭제한다.


![스크린샷 2024-02-21 130747](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/b3854688-4d87-46c1-8ef0-8fb827ebf289)

그리고 프로젝트파일 우클릭 후 Generate Visual Studio project files를 눌러 삭제한 폴더들을 다시 만든다.

---

## 트리거작성
트리거를 작성하기 위해선 로컬플레이어 Input Subsystem인 [UEnhancedInputLocalPlayerSubSystem](https://docs.unrealengine.com/4.27/en-US/API/Plugins/EnhancedInput/UEnhancedInputLocalPlayerSubsyst-/)이 필요하다.

```C++
void UGrabber::BeginPlay()
{
	Super::BeginPlay();
	if (APlayerController* PlayerController = Cast<APlayerController>(GetController())) {
		if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem< UEnhancedInputLocalPlayerSubsystem>(PlayerController->GetLocalPlayer())) {
			Subsystem->AddMappingContext(PlayerMappingContext, 0);
		}
	}
}
```

### Component에서 사용할 시
`GetControll`메타함수는 `Pawn` 이하 클래스에서만 사용 할 수 있다. Component는 컨트롤러를 가지고 있지 않기 때문에 Pawn의 컨트롤러를 가져와야한다.

``` C++
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
![스크린샷 2024-02-21 170725](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/80ee01ac-c280-40ee-9989-3b32e152886b)
위 과정을 BP로 할 경우 이렇다
