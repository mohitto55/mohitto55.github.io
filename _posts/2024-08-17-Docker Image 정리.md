---
title : "[Docker] Docker Image 개념과 구조"
categories: network
tags: [Docker, Ubuntu, Linux, 컨테이너, Image, Layer]
---

## Docker 이미지
컨테이너를 만드는데 사용되는 Template이라 생각하면 된다.
컨테이너는 이미지를 기반으로 생성된다.

<br>
이미지는 `Docker hub`에서 다운받아서 사용하는 방식으로 도커 계정을 가진 사람들끼리 이미지를 공유할 수 있다.

---

### 이미지 구조와 레이어
![image](https://github.com/user-attachments/assets/4f99fce3-c1c1-4b4d-8077-65c5f3f53d2b)

<br>
이미지는 용량이 매우 큰데 기본 몇백MB다. 이미지를 업데이트하면 그 큰 용량을 매번 전부 다운 받는것은 비효율적이다. 그래서 Layer 구조를 통해 관리를 한다.

<br>
이미지는 기본적으로 **읽기전용(Read-Only)**의 레이어 여러개로 구성되어있다. 이 레이어들은 파일이 추가되거나 수정되면 새로운 레이어를 만든다. 즉 기존 Base레이어는 변경되지않고 새로운 Layer가 추가하면된다.

<br>
위 그림처럼 기본 Base Image를 이용해 만드는 새로운 Image는 Layer를 수정하지 않고 새 Layer를 생성한다. 이렇게하면 web app 이미지를 업데이트 할 때 web app layer만 수정하면된다.

<br>
맨 우측 그림을 보면 Docker Container에서 web app을 베이스로 이미지 생성을 하는데 해당 이미지 레이어들은 모두 **읽기전용(Read-Only)**으로 생성된다.

<br>
컨테이너가 생성될 때마다 Container Layer가 생성되는데 해당 레이어는 **읽기쓰기** 모두 가능하지만 Container가 삭제되면 Container Layer도 삭제된다.

![image](https://github.com/user-attachments/assets/4440ce1c-1063-4b1a-956a-d9d5b2f7b859)


<br>
---
<br>
<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://velog.io/@kdaeyeop/%EB%8F%84%EC%BB%A4-Docker-%EC%99%80-VM%EC%9D%98-%EC%B0%A8%EC%9D%B4">https://velog.io/@kdaeyeop/%EB%8F%84%EC%BB%A4-Docker-%EC%99%80-VM%EC%9D%98-%EC%B0%A8%EC%9D%B4</a>
<a href="https://creboring.net/blog/how-docker-divide-image-layer/">https://creboring.net/blog/how-docker-divide-image-layer/</a>
</p>
</div>
