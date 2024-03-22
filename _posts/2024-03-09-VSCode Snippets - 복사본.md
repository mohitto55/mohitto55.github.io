---
title : '[Ubuntu] Window11에서 Ubuntu(WSL2) 설치하기'
category: vscode
tags: [Ubuntu, Window11, Window, 우분투, WSL2]
---

## 들어가며
Docker를 시작하려던 중에 Hyper-V 기능이 있어야 사용할 수 있단 것을 알았다. Hyper-V를 킬려고 했으나 어째서인지 보이지 않았고 알고보니 `Windows Pro` 버전 이상만 지원이 되는 것이였다. 나는 Home 버전이였고 Docker Desktop을 사용하지 못하였다.

방법을 찾던도중 윈도우에 Linux 환경을 설치해 Linux 환경에서 Docker를 실행 할 수 있다는 것을 알았고 그렇게 찾은 해답은 WSL2 였다.

## WSL2
WLS(Window Service for Linux)는 윈도우에서 리눅스 Virtual machine을 실행할 수 있도록 마이크로소프트에서 지원하는 기능이다.

---

### WSL설치하기
제어판 > 프로그램 > Windows 기능 켜기/끄기 에 들어간 후 Linix용 Windows 하위 시스템 항복을 체크한다.

![스크린샷 2024-03-22 223031](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/c7cfecd1-3618-42a2-b85e-a611e472df2a)

PowerShell을 관리자 권한으로 열어준다. 그 후 아래 명령어를 입력한다.

```
wsl --install
```

설치가 완료되면 재부팅을 한다.

그 후 Unbuntu CLI가 자동 실행 될 것이다.
만약 Unbuntu가 자동 설치가 되지 않는다면 아래 명령어를 PowerShell에 입력해라
```
wsl --install -d Ubuntu
```

![스크린샷 2024-03-22 223448](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/6be99b3f-7460-4fb1-ac05-c316519b24e6)

---

## 마무리
이제 Ubuntu 환경이 조성 되었고 본격적인 서버 환경을 조성할 수 있게 되었다. 이를 이용해 다양한 프로젝트를 진행할 것이다.



<div class='Reference'>
<div class='callout-header'> </div>
<p>
<a href='https://forgiveall.tistory.com/608'>https://forgiveall.tistory.com/608</a>
<a href='https://velog.io/@darktrace1/%EC%9C%88%EB%8F%84%EC%9A%B011%EC%97%90-UbuntuWSL2-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0'>https://velog.io/@darktrace1/%EC%9C%88%EB%8F%84%EC%9A%B011%EC%97%90-UbuntuWSL2-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0</a>
</p>
</div>