---
title : "[Unity] Unity Package Manager 사용하기"
categories: unity
tags: [Unity, PackageManager, UPM, 유니티, CI, CD]
---

참고자료 : https://powerdeng.tistory.com/54
https://luckygg.tistory.com/344

유니티를 만들다 보니 생산성을 위해 여러가지 모듈을 개발하곤 한다. 나는 만들어진 모듈을 깃허브에 올리고 그것을 필요한 필요젝트에서 다시 다운 하는 방식으로 사용하고 있었다.

하지만 이런 방식은 너무 번거롭고 버전관리도 제대로 되지 않아 자동으로 관리할 수 있는 기능을 원했고 그렇게 찾은 것이 UPM 기능이다.

# Doxywizard(Doxygen GUI) 다운로드
사이트로 가서 파일 다운
![image](https://github.com/user-attachments/assets/343b7abd-6555-4708-a107-53c9b5d822b3)

Doxywizaed 실행하기
![image](https://github.com/user-attachments/assets/8d3b642b-99ed-4bc5-84df-3b97c41aab4a)

설치가 완료된 모습
![image](https://github.com/user-attachments/assets/6a99e16b-d22e-401f-83c7-0cc347d92614)

# 문서화 옵션 설정하기
Doxygen은 기본 설정 항목이 매우 많다.
이중 가장 기본적으로 설정할 항목들을 설명한다.
