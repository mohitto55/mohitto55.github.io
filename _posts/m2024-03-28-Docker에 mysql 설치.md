---
title : "[Docker] Ubuntu에서 Docker 설치하기"
categories: network
tags: [Docket, Ubuntu, Linux, 컨테이너]
---

## Docker
Docker란 컨테이너를 이용한 오픈소스 가상화 플랫폼이다. 
컨테이너는 OS레벨의 가상화로 프로세스를 격리시켜 동작하는 것을 말한다. OS자체를 가상화 하던 방식과는 다른데 무슨 차이가 있는 것일 까

## VM 가상화 vs Docker 가상화
- 기존에는 하나의 서버에 하나의 어플리케이션만 구동시켰다.
    - 이는 남는 자원이 많아진다.
    - 이를 극복하기 위해 나온것이 가상화다
- 하이퍼바이저 기반의 가상화가 많이 이용됐다.
    - 논리적으로 분리된 공간에서 VM이라는 독립된 가상환경 만든다.
    - 그리고 호스트 시스템에서 VM에 게스트 OS를 구동 및 모니터링 한다.

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/def35409-b1d9-4484-9a43-c6abd80140ab)*VM 구조*

- Docker는 게스트 OS가 존재하지 않는다.
- 가상화를 할 때마다 OS를 할당해주면 자원 낭비가 된다.
- 그래서 Container라는 개념으로

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

sudo wget -qO- http://get.docker.com/ | sh

```
docker -v
```
> Docker 버전 확인


```
sudo docker pull mysql
```
> Docker 이미지 다운

![image](https://github.com/mohitto55/Blog_Images/assets/154340583/5c72a46d-5327-48a0-bfbe-c5e80a298495)

```
docker images
```
다운받아진 이미지 확인

![image](https://github.com/mohitto55/mohitto55.github.io/assets/64449571/2bd321ec-4107-480c-ab6f-6987f1401fd8)

```
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:latest
```
● --name <container_name> : <container_name> 이름의 컨테이너를 실행한다.
● -e : 컨테이너 내에서 사용할 환경변수를 설정
● -e MYSQL_ROOT_PASSWORD=<password> : MySQL의 root 권한의 비밀번호를 <password>로 설정한다.
● -d : detach 모드로 컨테이너가 실행된다. 컨테이너가 백그라운드로 실행된다고 보면 된다.
● -p <호스트 포트> <컨테이너 포트> : 호스트와 컨테이너의 포트를 연결한다
● mysql:latest : 컨테이너에 사용할 이미지

```
docker ps -a
```
도커 목록 조회

![image](https://github.com/mohitto55/mohitto55.github.io/assets/64449571/c333d5b9-6317-44e8-ae13-b4698f63f1be)

## 도커 이미지 런 오류
Unable to find image 'mysql-container:latest' locally
> 이미지 이름이 다르다.
> 콘테이너랑 이미지는 다른 개념이다

docker: Error response from daemon: pull access denied for mysql-container, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
> 로그인을 잘못했거나 이미지에 태그 된 이름이랑 다르거나 둘 중 하나 

## 도커 컨테이너 접속시 오류
Error response from daemon: container 1a0ab9fe9da2301b1d7959614ad2e8335ae745cf9b72a2b0394474236526557c is not running

콘테이너 시작시켜주 면 됨
sudo docker container start mysql-container

```
sudo docker exec -it mysql-container bash
```
도커 컨테이너 접속하기

```
mysql -u root -p
```
루트권한에 접근하기

![image](https://github.com/mohitto55/mohitto55.github.io/assets/64449571/7d89434e-6c5a-44e6-b812-7794738c5831)


<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://hipopatamus.tistory.com/109">https://hipopatamus.tistory.com/109</a>
<a href="https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90">https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90</a>
<a href="https://www.google.com/search?q=%EC%9A%B0%EB%B6%84%ED%88%AC+%EB%8F%84%EC%BB%A4+%EB%8B%A4%EC%9A%B4&oq=%EC%9A%B0%EB%B6%84%ED%88%AC+%EB%8F%84%EC%BB%A4+%EB%8B%A4%EC%9A%B4&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYFBiHAhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIMCAgQABhDGIAEGIoF0gEIOTAzMGowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1">https://www.google.com/search?q=%EC%9A%B0%EB%B6%84%ED%88%AC+%EB%8F%84%EC%BB%A4+%EB%8B%A4%EC%9A%B4&oq=%EC%9A%B0%EB%B6%84%ED%88%AC+%EB%8F%84%EC%BB%A4+%EB%8B%A4%EC%9A%B4&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEAAYFBiHAhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIMCAgQABhDGIAEGIoF0gEIOTAzMGowajGoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1</a>
</p>
</div>