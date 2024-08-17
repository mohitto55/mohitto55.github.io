---
title : "[Docker] Ubuntu에서 Docker로 Mysql설치하기"
categories: network
tags: [Docket, Ubuntu, Linux, 컨테이너]
---

## Docker 설치
> Docker 다운받기
```
sudo wget -qO- http://get.docker.com/ | sh
```

<br>

> Docker 버전 확인
```
docker -v
```
![image](https://github.com/mohitto55/Blog_Images/assets/154340583/5c72a46d-5327-48a0-bfbe-c5e80a298495)

## Mysql 설치
<br>
> Docker 이미지 다운
```
sudo docker pull mysql
```


> 다운받아진 이미지 확인
```
docker images
```
![image](https://github.com/mohitto55/mohitto55.github.io/assets/64449571/2bd321ec-4107-480c-ab6f-6987f1401fd8)

<br>

> 컨테이너를 실행하기
```
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql:latest
```

`--name <container_name>` : `<container_name>` 이름의 컨테이너를 실행한다.<br>
`-e` : 컨테이너 내에서 사용할 환경변수를 설정<br>
`-e MYSQL_ROOT_PASSWORD=<password>` : MySQL의 root 권한의 비밀번호를 `<password>`로 설정한다.<br>
`-d` : detach 모드로 컨테이너가 실행된다. 컨테이너가 백그라운드로 실행된다고 보면 된다.<br>
`-p <호스트 포트> <컨테이너 포트>` : 호스트와 컨테이너의 포트를 연결한다.<br>
mysql:latest : 컨테이너에 사용할 이미지<br>

---

>도커 목록 조회
```
docker ps -a
```
![image](https://github.com/mohitto55/mohitto55.github.io/assets/64449571/c333d5b9-6317-44e8-ae13-b4698f63f1be)

<br><br>

## 도커 이미지 런 오류
```
Unable to find image 'mysql-container:latest' locally
```
> 이미지 이름이 다르다.
> 콘테이너랑 이미지는 다른 개념이다.

```
docker: Error response from daemon: pull access denied for mysql-container, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
```
> 로그인을 잘못했거나 이미지에 태그 된 이름이랑 다르거나 둘 중 하나다.

<br>

## 도커 컨테이너 접속시 오류
```
Error response from daemon: container 1a0ab9fe9da2301b1d7959614ad2e8335ae745cf9b72a2b0394474236526557c is not running
```
콘테이너가 실행되지 않아 발생하는 오류다.<br>
아래 명령어를 통해 원하는 컨테이너를 실행하면 된다.
```
sudo docker container start mysql-container
```

>도커 컨테이너 접속하기
```
sudo docker exec -it mysql-container bash
```

>루트권한에 접근하기

```
mysql -u root -p
```
<br>
![image](https://github.com/mohitto55/mohitto55.github.io/assets/64449571/7d89434e-6c5a-44e6-b812-7794738c5831)

<br>
---
<br>
<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://hipopatamus.tistory.com/109">https://hipopatamus.tistory.com/109</a>
<a href="https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90">https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90</a>
</p>
</div>
