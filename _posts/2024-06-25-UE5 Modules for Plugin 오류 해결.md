---
title : "[UE5] Loading PreDefault Modules for Plugin 오류 해결하기"
categories: ue5
tags: [UE5, Unreal Engine5, Unreal Engine, Plugin, Error, Motion Matching]
---

## 에러 현상
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/cdba9f11-665f-4a29-a248-84da8582661d)
사용하던 5.3프로젝트를 5.4로 변경하고 Motion Matching을 연습 중이였는데 빌드하고 재시작하니 위와 같이 75%에서 계속 멈추고 진행이 되지 않았다.

<br>
## 해결 과정
```cpp
Warning      LogAnimation              SkeletalMesh SkeletalMesh /Game/Characters/Mannequin_UE4/Meshes/SK_Mannequin.SK_Mannequin has no skeleton. This needs to fixed before an animation can be set
Warning      LogLinker                 [AssetLog] C:\Users\admin\git\UE5\Multi\Content\MCO_Mocap_Basics\Character\Mesh\UE4_Mannequin_Skeleton.uasset: Failed to load '/Engine/EngineMeshes/Humanoid': Can't find file.
Warning      LogLinker                 [AssetLog] C:\Users\admin\git\UE5\Multi\Content\MCO_Mocap_Basics\Character\Mesh\UE4_Mannequin_Skeleton.uasset: VerifyImport: Failed to load package for import object 'Package /Engine/EngineMeshes/Humanoid'
Warning      LogAnimation              SkeletalMesh SkeletalMesh /Game/Characters/Mannequin_UE4/Meshes/SK_Mannequin.SK_Mannequin has no skeleton. This needs to fixed before an animation can be set
```
라이더에서 warning로그를 보니 캐릭터 메쉬쪽 오류로 보였다.
모션매칭을 하느라 애니메이션, Animation Blueprint등을 이것저것 만졌는데 그게 오류가 발생한 것으로 생각되어 수정한 에셋들을 하나씩 꺼내보며 확인했다.

<br>
## 발생 원인 및 해결
- ABP가 깨져서 생긴 미싱 문제때문에 빌드가 멈춘 것이였다.
- 삭제하고 새로운 ABP를 만드니 제대로 작동된다.
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/ed7901e8-c95e-408e-a1d6-49db1e766d87)

---

<div class="Reference">
<div class="callout-header"> </div>
<p>
</p>
</div>