---
title : "[Docker] Ubuntu에서 Docker 설치하기"
categories: network
tags: [Docket, Ubuntu, Linux, 컨테이너]
---

## Docker
Docker란 컨테이너를 이용한 오픈소스 가상화 플랫폼이다. 
컨테이너는 OS레벨의 가상화로 프로세스를 격리시켜 동작하는 것을 말한다. OS자체를 가상화 하던 방식과는 다른데 무슨 차이가 있는 것일 까

## VM 가상화 vs Docker 가상화



## 사용하는 이유
개발하고 서버에 올리면 끝
그런데 서버에 올리면 작동 안함
whyt 컴터는 윈도우, 서버는 리눅스여서
도커를 사용하면 다른 머신에서도 같은 환경 구성 가능

윈도우, 서버에 둘다 Docker 설치
구성하고 싶은 환경 설정하면 됨

도커는 파일읽고 필요한걸 다운 받고
같은 환경을 컨테이너에 구성함

그래서 컴에서 서버로 코드 업로드하면(Docker와 같이) 잘 작동 함


또 각 컨테이너는 각기 분리되어 있음
컨테이너들은 독립적임
이덕에 한개의 서버에서 수많은 컨테이너 가질 수 있음

만약 자바 애플리케이션이 인기 많으면 자바 컨테이너 늘리고 인기 줄면 줄이고 가능
매번 서버를 사고 팔 이유가 없음


1. 원하는 개발 환경을 파일에 저장하면 어떤 머신에든 해당 환경 구성해줌
2. 각 환경을 독립적이기 때문에 무슨 환경이든 모듈식 관리 가능

## Docker 이미지
컨테이너를 만드는데 사용되는 Template


## MySQL



```
docker -v
```
> Docker 버전 확인


```
docker pull mysql
```
> Docker 이미지 다운

![image](https://github.com/mohitto55/Blog_Images/assets/154340583/5c72a46d-5327-48a0-bfbe-c5e80a298495)




<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://hipopatamus.tistory.com/109">https://hipopatamus.tistory.com/109</a>
<a href="https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90">https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90</a>
<a href="https://www.youtube.com/watch?v=chnCcGCTyBg">https://www.youtube.com/watch?v=chnCcGCTyBg</a>
</p>
</div>