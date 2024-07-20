---
title : "[UE5] 언리얼 리플렉션(Reflection) 알아보기"
categories: ue5
tags: [UnrealEngine, UE, Reflection, Property, UPROPERTY, C++]
---

## 개요
언리얼 엔진을 사용하면 UPROPERTY를 자주 사용하게된다. 
정확한 이유는 모르지만 에디터에 변수를 표시하고 싶으면 쓰라고 공부해서 아무생각 없이 작성했었는데, 멀티플레이 게임을 제작할 때 Replicate를 하려면 UPROPERTY를 필수로 붙인다던가 지속적으로 사용하는 변수에 UPROPERTY를 붙이지 않으면 잠깐 사용안하는 1초사이에 GC가 처리해서 오류가 발생한다고 지인한테 듣는 등 내가 생각한 것보다 상당히 복잡한 기능이 있는 것같아 UPROPERTY의 원리인 언리얼 리플렉션에 대해서 정리해볼려고 한다.

## 리플렉션(Replection)
> 프로그램이 실행시간에 자신을 조사하는 기능

C#과 비슷하게 언리얼에서도 리플렉션 기능이있다.
에디터, 시리얼라이제이션, GC, 네트워크 리플리케이션, BP/C++ 커뮤니케이션 등 언리얼에서 사용하는 많은 기능이 이 리플렉션을 베이스로 제작되었다.
</br>
C++에서는 리플렉션을 지원하지 않아 언리얼에서 자체적으로 만든 기능이다.

### 리플렉션의 장점
리플렉션 사용 시 컴파일에서는

### 적용과정
리플렉션 기능에 탐색될 프로퍼티에 주석을 달면 `Unreal Header Tool`에 의해서 컴파일할 때 해당 정보를 수집한다.

리플렉션 기능이 적용될 코드 파일로 만들기 위해선 특수한 헤더를 추가시켜줘야 한다. 그것이 자동으로 생성되는 `generated.h` 파일이다.
```c++
#include "FileName.generated.h"
```

헤더를 추가하고 아래 U매크로들을 생성하면 컴파일 시간에 리플렉션 관련 코드가 자동으로 생성된다.
```c++
UENUM(), UCLASS(), USTRUCT(), UFUNCTION(), UPROPERTY()
```

---
### 예시코드
```c++
#include "StrategyTypes.h"
#include "StrategyChar.generated.h"

UCLASS(Abstract)
class AStrategyChar : public ACharacter, public IStrategyTeamInterface
{
    // GENERATED_BODY()로 변경
    // 리플렉션클래스 본문에 추가적인 함수나 typedef 를 주입.
    GENERATED_UCLASS_BODY()

    
    /** How many resources this pawn is worth when it dies. */
    UPROPERTY(EditAnywhere, Category=Pawn)
    int32 ResourcesToGather;
    

    /** set attachment for weapon slot */
    UFUNCTION(BlueprintCallable, Category=Attachment)
    void SetWeaponAttachment(class UStrategyAttachment* Weapon);

    UFUNCTION(BlueprintCallable, Category=Attachment)
    bool IsWeaponAttached();


    protected:
    /** melee anim */
    UPROPERTY(EditDefaultsOnly, Category=Pawn)
    UAnimMontage* MeleeAnim;


    /** Armor attachment slot */
    UPROPERTY()
    UStrategyAttachment* ArmorSlot;

    

    /** team number */
    uint8 MyTeamNum;
    [이하 코드 생략]
};
```

---
## 리플렉션 주의사항
UHT는 C++ 파서가 아니다.
그렇기에 모든 C++ 코드를 완벽히 이해할 수 없다.
대신 리플렉션된 타입, 함수, 프로퍼티와 관련된 코드만 분석한다.
아래는 리플렉션 사용시 주의사항이다.

### 1.리플렉션 타입 추가할 때
기존 헤더 파일에 리플렉션된 유형 UHT가 처리해야 하는 유형 추가시 #if CPP / #endif로 둘러싸야한다.
이를 통해 UHT가 리플렉션할 부분을 알 수 있다.

### 2.주석과 전처리기 지시문 피하기
주석을 단 프로퍼티나 함수에는(WITH_EDITOR 와 WITH_EDITORONLY_DATA 를 제외하고) `#if/#ifdef` 사용을 피해야한다.
generated 코드가 그에 대해 레퍼런싱하여 그 정의가 참이지 않은 경우 환경설정에서 컴파일 에러가 나기 때문이다.

### 3.지원타입 제한
TArray, TSubclassOf같은 **언리얼에서 제작한 템플릿을 사용**하는 것이 좋다.
UHT는 모든 C++ 타입을 지원하지 않기 때문이다.
만약 지원하지 않는 타입 사용시 런타임에 오류가 뜬다.

---

## 언리얼 프로퍼티 계층구조

1. UField
2. UStruct (리플렉션 탐지 시작)
3. UClass (C++ class)
4. UScriptStruct (C++ struct)
5. UFunction (C++ function)
6. UEnum (C++ enumeration)
7. UProperty (C++ member variable or function parameter)
(Many subclasses for different types)

UStruct 부터 리플렉션에 탐지된다.
 
UStruct와 UScriptStruct의 차이:
- UStruct는 기본적인 구조체로, 여러 멤버(클래스, 구조체, 함수)를 포함할 수 있다.
- UScriptStruct는 C++ 구조체로, 프로퍼티만 포함할 수 있다.

UClass와 UScriptStruct 접근 방법:
- **UTypeName::StaticClass()**나 **FTypeName::StaticStruct()**를 사용해 리플렉션된 C++ 유형에 대한 UClass 또는 UScriptStruct를 구할 수 있다.
- **Instance->GetClass()**를 사용해 UObject 인스턴스의 유형을 구할 수 있다.

구조체 인스턴스의 유형:
- 구조체 인스턴스의 유형을 직접 구하는 것은 불가능하다. 
- 구조체에 대한 공통의 베이스 클래스나 필수 저장공간이 없기 때문이다.

구조체의 필드 멤버들 가져오는 법
TFieldIterator를 사용하여 UStruct의 모든 멤버를 반복 처리할 수 있다
```cpp
for (TFieldIterator<UProperty> PropIt(GetClass()); PropIt; ++PropIt)
{
    UProperty* Property = *PropIt;
    // Do something with the property
}
```
TFieldIterator의 템플릿 인수는 필터 역할을 하며, 반복 처리할 필드의 유형을 지정합니다. 생성자의 두 번째 인수는 부모 클래스/구조체의 필드를 포함할지 여부를 결정한다.

---
# 프로퍼티 시스템 내부 구조 알아보기
## 빌드툴과 헤더툴의 시스템 구조 설계
UBH(Unreal Build Tool)과 UHT(Unreal Header Tool)은 함께해서 실행시간 리플렉션을 강화시키는 데 필요한 데이터를 생성한다. 과정은 다음과 같다.
- UBH가 헤더를 스캔해 리플렉션 유형이 있는 헤더 모듈 기억
- 지난 컴파일과 비교해 변경사항이 있다면, UHT 실행해 리플렉션 데이터 수집 및 업데이트
- UHT는 헤더 파싱 및 리플렉션 데이터 세트를 빌드
- 모듈별.generated.inl에 기여하는 리플렉션 데이터 C++ 코드 생성 및, 헬퍼 및 thunk 함수 생성

# 언리얼 오브젝트의 구성
## 기본 개념
언리얼 오브젝트: UPROPERTY(멤버 변수), UFUNCTION(멤버 함수) 등을 지정할 수 있습니다.
클래스 정보 포함: UCLASS를 사용해 자신이 가진 프로퍼티와 함수 정보를 컴파일 타임과 런타임에서 조회할 수 있습니다.
객체 생성: NewObject()를 사용해 객체를 생성합니다.

## 클래스 기본 오브젝트 (CDO)
CDO (Class Default Object): 언리얼 객체가 가진 기본 값을 보관하는 템플릿 객체입니다.
기본 값 관리: 여러 인스턴스를 생성할 때 일관된 기본 값을 제공해줍니다.
생성 시점: 엔진 초기화 과정에서 생성됩니다. CDO는 GetDefaultObject 함수를 통해 접근할 수 있습니다.
언리얼 오브젝트 처리
리플렉션: 클래스, 프로퍼티, 함수에 적합한 매크로로 마킹하면 UClass, UProperty, UFunction으로 변환됩니다.
자동 초기화: UPROPERTY로 선언된 멤버 변수는 자동으로 초기화됩니다.
레퍼런스 자동 업데이트: 언리얼의 메모리 관리 시스템을 통해 자동 업데이트됩니다.
직렬화 작업: UPROPERTY로 선언된 경우에 한해 객체를 저장하고 불러올 수 있습니다.
프로퍼티 값 업데이트: CDO를 이용해 여러 객체의 기본 값을 효과적으로 관리할 수 있습니다.
에디터 통합: UPROPERTY와 매크로 안에 메타 데이터를 추가하면 에디터와 통합되어 유용한 기능을 제공합니다.
런타임 유형 정보 및 형변환: 런타임에서 정보를 얻고 안전한 캐스팅을 보장합니다.
가비지 컬렉션: 더 이상 사용하지 않는 객체를 자동으로 메모리에서 회수합니다.
네트워크 리플리케이션: UPROPERTY를 통해 네트워크로 데이터를 전송하고 받을 수 있습니다.

## 실습 예제
클래스의 기본 값 설정
```cpp
// Fill out your copyright notice in the Description page of Project Settings.
#include "MyGameInstance.h"
void UMyGameInstance::Init() {
    Super::Init();
    UE_LOG(LogTemp, Log, TEXT("================================="));
    UClass* ClassRuntime = GetClass();
    UClass* ClassCompile = UMyGameInstance::StaticClass();
    check(ClassRuntime == ClassCompile);

    UE_LOG(LogTemp, Log, TEXT("학교를 담당하는 클래스 이름 : %s"), *ClassRuntime->GetName());
    UE_LOG(LogTemp, Log, TEXT("================================="));
}

UMyGameInstance::UMyGameInstance() {
    SchoolName = TEXT("기본학교");
}
```
### 에러 체크
check(expr): 조건이 false일 경우 에러를 발생시킵니다.
ensure(expr): 조건이 false일 경우 에러를 출력하지만 실행을 멈추지 않습니다.
ensureMsgf(expr, TEXT("문자....")): 조건이 false일 경우 에러를 출력하고, 지정된 메시지를 함께 출력합니다.

---

## CDO (Class Default Object) 사용 예제
기본 값을 설정하는 방법:
```cpp
UMyGameInstance::UMyGameInstance() {
    SchoolName = TEXT("기본학교");
}
```
기본 값을 출력하는 방법:
```cpp
UE_LOG(LogTemp, Log, TEXT("학교 이름 기본값 : %s"), 
*GetClass()->GetDefaultObject<UMyGameInstance>()->SchoolName);
```

---

## 언리얼 오브젝트 처리 규칙
UCLASS 매크로: 언리얼 오브젝트로 관리하려는 클래스 상단에 선언합니다.
generated.h 포함: 헤더 파일의 가장 하단에 파일이름.generated.h를 포함시킵니다.
UFUNCTION과 UPROPERTY: 멤버 함수와 변수에 각각 UFUNCTION, UPROPERTY 매크로를 사용합니다.
GENERATED_BODY: 클래스 선언 내부에 GENERATED_BODY를 추가합니다.

---

## UClass, CDO의 관계
UClass: 객체의 클래스 정보를 담고 있으며, 런타임 중 객체의 클래스 정보를 조회할 수 있습니다.
CDO (Class Default Object): 클래스의 기본 값을 보관하는 템플릿 객체로, 컴파일 타임에 생성됩니다.

---

## 컴파일 타임과 런타임
컴파일 타임: 코드를 기계어로 변환하는 과정. 어휘 분석, 구문 분석, 의미 분석, 코드 생성의 과정을 거칩니다.
런타임: 프로그램이 실행되는 시간. 컴파일된 코드가 실행되며, 런타임 에러가 발생할 수 있습니다.

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://www.unrealengine.com/ko/blog/unreal-property-system-reflection">https://www.unrealengine.com/ko/blog/unreal-property-system-reflection</a>
<a href="https://ideugu.notion.site/1-_05-1-1277c29029e648fab98dfdc01b87a33b">https://ideugu.notion.site/1-_05-1-1277c29029e648fab98dfdc01b87a33b</a>
</p>
</div>