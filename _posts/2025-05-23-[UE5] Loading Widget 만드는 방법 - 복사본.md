---
title : "[UE5] Async Loading Widget 만드는 과정"
categories: ue5
tags: [UE5, UnrealEngine, Loading, UserWidget, Widget]
---

게임에서 로딩화면이란 정말 중요하다. 화면전환시 플레이어가 어색함없이
언리얼엔진에서 레벨을 이동할땐 OpenLevel 함수를 사용한다. 사용하면 다른 레벨로 이동하지만 이동하는 과정에서 끊김 현상이 발생한다. 이런 끊김 현상이 느껴지지 않도록 만들어야한다.

```cpp
	static ENGINE_API void OpenLevelBySoftObjectPtr(const UObject* WorldContextObject, const TSoftObjectPtr<UWorld> Level, bool bAbsolute = true, FString Options = FString(TEXT("")));
```

## 목표
1.페이드 인, 아웃으로 부드러운 로딩 화면 재생
2.비동기적으로 레벨의 완전한 로딩 타이밍 확인
3.완전히 다른 레벨 이동시 로딩화면 유지

---

검색을 통해 알아보니 로딩화면을 만드는데는 크게 두가지 방식이 있었다.
1. 로딩 위젯 생성 후 OpenLevel 시작
2. LoadStreamLevel로 서브 레벨로딩과 완료되면 로딩 위젯 제거

1번의 경우 페이드 인아웃 애니메이션이 없이 이미지가 바로 생겻다 사라진다. 그리고 이전 레벨에서 생성한 위젯이 이동한 레벨에서 보이지 않는다.
2번은 비동기적으로 레벨이 완전히 로드되는 타이밍은 알 수 있지만 서브레벨을 불러오는 방식에서만 유효하고 타이틀레벨, 게임레벨 같이 완전히 다른 레벨에선 적용되지 않는다.

결국 OpenLevel함수를 사용해야 하므로 레벨 로드시 위젯이 사라지지 않게하고 레벨이 완전히 로드되었을때 로딩 위젯의 종료 애니메이션을 실행시킨다.

### 위젯이 사라지는 조건
위젯은 GetWorld()를 통해 나오는 Level이 사라지면 자신도 사라진다.
Widget의 GetWrold는 보통의 경우 CreateWidget으로 생성할 때 지정한 out의 GetWorld와 같다.


```cpp
UWorld* UUserWidget::GetWorld() const
{
	if ( UWorld* LastWorld = CachedWorld.Get() )
	{
		return LastWorld;
	}

	if ( HasAllFlags(RF_ClassDefaultObject) )
	{
		// If we are a CDO, we must return nullptr instead of calling Outer->GetWorld() to fool UObject::ImplementsGetWorld.
		return nullptr;
	}

	// Use the Player Context's world, if a specific player context is given, otherwise fall back to
	// following the outer chain.
	if ( PlayerContext.IsValid() )
	{
		if ( UWorld* World = PlayerContext.GetWorld() )
		{
			CachedWorld = World;
			return World;
		}
	}

	// Could be a GameInstance, could be World, could also be a WidgetTree, so we're just going to follow
	// the outer chain to find the world we're in.
	UObject* Outer = GetOuter();

	while ( Outer )
	{
		UWorld* World = Outer->GetWorld();
		if ( World )
		{
			CachedWorld = World;
			return World;
		}

		Outer = Outer->GetOuter();
	}

	return nullptr;
}

```

그렇다면 적절한 OwingObject의 클래스는 어떻게 정할까? CreateWidget 함수를 보면 알 수 있다. `static_assert(TIsDerivedFrom<TPointedToType<OwnerType>
 .. 하는 부분을 보면 UWidget, UWidgetTree, APlayerController, UGameInstance, UWorld 가 Outer로 지정가능하다. 레벨이 이동해도 사라지지 않는 UGameInstance가 적절하다.
 
```cpp
template <typename WidgetT = UUserWidget, typename OwnerType = UObject>
WidgetT* CreateWidget(OwnerType OwningObject, TSubclassOf<UUserWidget> UserWidgetClass = WidgetT::StaticClass(), FName WidgetName = NAME_None)
{
	static_assert(TIsDerivedFrom<WidgetT, UUserWidget>::IsDerived, "CreateWidget can only be used to create UserWidget instances. If creating a UWidget, use WidgetTree::ConstructWidget.");
	
	static_assert(TIsDerivedFrom<TPointedToType<OwnerType>, UWidget>::IsDerived
		|| TIsDerivedFrom<TPointedToType<OwnerType>, UWidgetTree>::IsDerived
		|| TIsDerivedFrom<TPointedToType<OwnerType>, APlayerController>::IsDerived
		|| TIsDerivedFrom<TPointedToType<OwnerType>, UGameInstance>::IsDerived
		|| TIsDerivedFrom<TPointedToType<OwnerType>, UWorld>::IsDerived, "The given OwningObject is not of a supported type for use with CreateWidget.");

	SCOPE_CYCLE_COUNTER(STAT_CreateWidget);
	FScopeCycleCounterUObject WidgetObjectCycleCounter(UserWidgetClass, GET_STATID(STAT_CreateWidget));

	if (OwningObject)
	{
		return Cast<WidgetT>(UUserWidget::CreateWidgetInstance(*OwningObject, UserWidgetClass, WidgetName));
	}
	return nullptr;
}
```

```cpp
    LoadWidget = CreateWidget<ULoadingWidget>(GetGameInstance(), ScenarioSetting.LoadingWidgetRef);
```

## 오프레벨 타이밍 잡기
레벨 이동시 로딩 위젯의 종료 애니메이션을 실행시킬 타이밍은 레벨이 완전히 로드됐을때 하면 된다. 이 타이밍에 실행되는 전역 델리게이트들이 존재한다.

그것들 중에서 이 조건에 맞는 델리게이트를 선택할 것이다.
1. Subsystem의 Initlization보다 빨라야한다.
2. Widget의 Contrturc보다 느려야한다.
	2-1. Widget Blueprint에서 수정해야 하기 때문이다. 

```cpp
FCoreUObjectDelegates::PostLoadMapWithWorld.AddUObject(this, &UScenarioSubsystem::OnPostLoadMap);
FWorldDelegates::OnPostWorldInitialization.AddUObject(this, &UScenarioSubsystem::OnPostWorldInitialization);
FWorldDelegates::OnWorldInitializedActors.AddUObject(this, &UScenarioSubsystem::OnWorldInitializedActors);
```

### Subsytem의 Init 시작
PostLoadMapWithWorld 만 탐지 되지 않았다.
![Image](https://github.com/user-attachments/assets/1c7f69c0-c447-4c3d-8e13-6b3cb691650c)

### Open Level 후
PostLoadMapWithWorld , OnWorldInitializedActors가  Construct 뒤에 실행된다.
![Image](https://github.com/user-attachments/assets/ce5e5a6b-4b81-4f0a-9f17-3a82ece790db)

```cpp
void UScenarioSubsystem::Initialize(FSubsystemCollectionBase& Collection)
        LoadWidget = CreateWidget<ULoadingWidget>(GetGameInstance(), ScenarioSetting.LoadingWidgetRef);
        FCoreUObjectDelegates::PostLoadMapWithWorld.AddUObject(this, &UScenarioSubsystem::OnPostLoadMap);
}
```

```cpp
void UScenarioSubsystem::OnPostLoadMap(UWorld* World)
{
    LoadWidget->AddToViewport(5);
    LoadWidget->DeactivateSequence();
}
```


<br>
<p>
모션매칭을 이용한 애니메이션 제작은 기존 방식과 큰 차이가 있다. 모션 매칭의 주요 특징으로는 다음과 같다.<br>
<font color='dodgerred'>1. 데이터 기반 접근</font>: 모션 매칭은 대규모의 캡처된 애니메이션 데이터베이스를 활용합니다.<br>
<font color='dodgerred'>2. 실시간 검색</font>: 게임 내 캐릭터의 현재 모션 정보를 키로 사용하여 데이터베이스에서 가장 적합한 애니메이션을 실시간으로 검색합니다.<br>
<font color='dodgerred'>3. 자연스러운 전환</font>: 복잡한 로직 없이도 다양한 애니메이션 클립 간의 자연스러운 전환이 가능합니다.<br>
<font color='dodgerred'>4. 확장성</font>: 애니메이션 기능을 위한 확장 가능한 프레임워크를 제공합니다.<br>
</p>

<br>
기존에는 특정 조건에 맞는 애니메이션을 하나하나 직접 설정해줘야 했지만 모션 매칭은 데이터 기반으로 현재 상태에서 가장 적합한 애니메이션을 자연스럽게 자동으로 설정해준다.

<br>
# 모션매칭 사전준비
## 플러그인 설치
- 아래 두 플러그인 설치하고 다시 시작한다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/dbc4cc87-7a25-4b1d-ba26-266c97506563)
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/7e725cda-a1ba-4064-a128-da6e780383ce)

## 애니메이션 시퀀스들 준비하기
### 모션 매칭 스키마 생성
- 접두사는 PSS_
- 각도 회전 값등 변수 설정하는 애셋이다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/331aea83-d937-4559-845f-ecc26b726c6c)

---

### Database 생성
- 모션 매칭에 사용될 애니메이션들을 담는 데이터를 생성한다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/6c101550-6a54-4a12-a0b9-da28e1352eeb)

- 적용할 스키마를 선택한다.
- 접두사는 PSD_
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/04961922-19f6-47d4-88e8-5692eacf7047)

---

#### PSD(Database) 화면
- 이제 여기에 사용할 애니메이션을 드래그 하면된다.
- 그전에 **루트모션**을 사용 중인지 확인 해야한다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/896d1c75-1c1b-4a07-b845-d8cf73b2a123)

---

#### 애니메이션 한번에 수정하기
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/5e49972c-c46e-436e-90dd-29f8af77b1ee)

- 컨트롤 a를 눌러 모두 선택후 EnableRootMotion을 활성화 한다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/e10b9b6c-489e-4f8f-af60-5610d371c867)

---

#### Locomotion PSD 생성하기
- DB에서 애니메이션을 넣는다.
- 각각 상하좌우 방향으로 시작, 진행 중, 멈출 때 해당하는 Walk 모션을 넣어준다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/36724702-59f2-4684-a817-0ae49418333f)

<br>

# 모션매칭 활용하기
## ABP 설정하기
- Motion Matching 노드를 불러와 모션매칭 DataBase를 가져온다.
- 그리고 현재 애니메이션에서 추적하기 위해 Trajectory(궤적)을 불러와야 한다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/6c49c019-d49b-4f55-af2a-4ab987c59842)

---

### Trajectory 컴포넌트 설치하기
- ABP를 사용할 BP에서 `Character Trajectory` 컴포넌트를 부착한다.

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/31db32d6-577e-49b2-9075-bc079c638a43)

---

### Trajectory 정보 가져오기
- ABP와 BP의 Trajectory를 연결해야한다.
- 그렇기 위해선 ABP의 EventGraph에서 자신을 사용하는 BP를 가져와야 한다.
- 자신을 사용중인 Actor를 가져와 그 액터 BP를 변수로 설정한다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/128cb3a3-5f92-4268-a926-57aeb39bb0dd)

- 변수화한 Owner Actor를 불러와 Trajectory를 매 프레임마다 변수화 시킨다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/c697f497-df56-46d3-bed8-1bb8e34fdb2f)

- 그리고 다시 AnimGraph로 돌아가서 Trajectory를 설정해준다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/a5b14922-a3a4-4367-b352-58a285a1615d)

## 디버깅 궤적 확인
- 콘솔창에 `a.CharacterTrajectory.Debug 1` 을 하면 궤적이 보인다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/592c0d2d-152c-4334-864a-909b3613afec)



<br>
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://www.youtube.com/watch?v=4ag7fSlEeKA">https://www.youtube.com/watch?v=4ag7fSlEeKA</a>
<a href="https://www.youtube.com/watch?v=S4aBd64t-hY&ab_channel=GorkaGames">https://www.youtube.com/watch?v=S4aBd64t-hY&ab_channel=GorkaGames</a>
</p>
</div>