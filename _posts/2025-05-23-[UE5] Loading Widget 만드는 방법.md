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
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
</p>
</div>