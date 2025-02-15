---
title : "[Geometry] Sweep Line Intersection Algorithm"
categories: geometry
tags: [Obsidian, Vercel, Digital Garden, Productivity, Blog, Naver, 네이버, TiStory, 티스토리, Git, 깃, 생산성, 블로그]
---

# 📄옵시디언으로 블로그를 만드는 이유
지금까지 나는 지식을 정리하고 정리한 내용을 공유하기 위해 여러 종류의 블로그 사이트를 사용해 봤다.
맨처음에는 **네이버** 블로그였는데 한국인의 입장에선 확실히 네이버가 접근성이 좋긴하지만 한국인을 제외한 외국인들은 구글 검색에 뜨기가 쉽지않고 디자인이 마음에 들지않아 금방 포기했다.

그 다음은 **티스토리** 블로그였다. 개발관련 자료를 검색하면 많은 자료가 티스토리 혹은 Velog에 올라와 있었다. 나는 직접 커스텀하는 것을 좋아해서 Velog보다는 티스토리가 더 좋다 생각해서 티스토리에서 글을 작성했었다.
물론 편하고 기본적으로 깔끔해서 좋긴 하지만 글을 검색하거나 사이트를 설정하는데 마음에 들지 않아 자연스럽게 손대지 않게 되었다.

좀 더 자유도 높은 블로그가 있을까 찾아봤는데 **GitBlog**가 눈에 들어왔다.
GItBlog는 처음부터 끝까지 기능을 다 커스텀가능하고 테마도 풍부해서 마음에 드는게 많았다. 그 중 Jekyll 테마가 인지도 있어보여서 사용해봤다. 처음에는 css도 직접짜고 여러가지 기능을 넣을 수 있어서 재밌었지만 생산성 부분에서 문제가 커져갔다.

기본적으로 GitBlog는 자유도가 높은 만큼 학습량이 많아 초반에 시간이 오래걸리고 무엇보다 띄어쓰기가 너무 큰 문제였다. Jekyll테마에서만 그런지는 몰라도 줄바꿈이 제대로 적용되지 않아 br 태그를 중간중간 써줘야하고 생각한대로 글이 이쁘게 나오지도 않아서 css를 수정하고 글자도 다시 수정하는 등 글 하나 작성하는데 시간이 오래걸린다. 그리고 나는 옵시디언을 통해 먼저 글을 작성하고 그 글을 정리해서 포스팅하는데 이게 옵시디언과 달리 HTML을 중간중간 써줘야 하다보니 이것도 시간이 많이 걸린다.

그리고 가장 중요한게 조회수인데 사이트맵이 제대로 적용이 안되는지 사람이 몇달간 제대로 들어오지 않곤했다. 그래서 금방 흥미를 잃게 되었다.

결국 포스팅 하는게 귀찮아져서 손을 안대게 됐는데 어떻게 해야 내가 블로그를 열심히 쓰게 될까 생각해 보았다.
지금까지 블로그를 사용했던 경험을 토대로 내가 블로그에서 가장 중요하게 생각하는 걸 3가지를 정해봤다.
1. 포스트 업로드가 쉬워야한다.
2. 옵시디언에서 작성한 글에서 수정을 거의 안해야한다.
3. 자유도가 있어야한다.

위 조건들을 토대로 찾아본 결과 **Digital Garden** 플러그인을 이용해 옵시디언 노트를 통쨰로 포스팅하는 방식이 가장 적절해 보였다. 아직 시작 단계이지만 얼추 봤을때는 아래의 장점이 잇었다.
1. 버튼 몇번으로 업로드, 수정, 삭제가능하다.
2. 옵시디언 노트 내용이랑 똑같다.
3. 꾸미기 쉽다.

내가 생각한 블로그의 조건이랑 딱 맞아 떨어져보여 한번 시작해보려고 한다.

# 📄Digital Garden으로 블로그 만들기
### 🔍플러그인 설치
- Community Plugin에 가서 `Digital Garden`을 검색해서 설치한다.

![image](https://github.com/user-attachments/assets/3949101f-9e1d-4715-aab9-d6f718819783)

---

### 🔍Vercel 계정 생성
-  [Vercel](https://github.com/signup)로 가서 GitHub 계정과 연동해준다.

<div class='callout-info-expanded'>
<div class='callout-header'>Vercel</div>
<p>
클라우드 플랫폼으로, 웹사이트 및 애플리케이션을 배포, 관리, 그리고 성능을 최적화하는 데 도움을 준다.<br>
주로 Next.js와 같은 프레임워크와 밀접하게 연동된다.
</p>
</div>

---

### 🔍리포지토리 생성
- 리포지토리 생성 후 [링크](https://github.com/oleeskild/digitalgarden)로가서 Deploy 버튼 클릭한다
- 이렇게 하면 Vercel이 열리고 GitHub 계정에 저장소의 사본이 생성된다. 사본 저장소의 이름을 작성하고 생성하면 Vercel의 단계에 따라 사이트를 인터넷에 게시된다.

![image](https://github.com/user-attachments/assets/8b371813-b355-4c2c-abe4-247c78591a32)

![image](https://github.com/user-attachments/assets/fa8421f8-0d56-40f9-b1e0-410121ab0f18)

---

### 🔍GitHub 액세스토큰 생성
- 다음으로 GitHub 계정에 대한 액세스 토큰을 만들어야 한다.
- 토큰은 저장소를 접근하기 위한 비밀번호 역할을 하여 토큰을 만들어야 작성한 글을 업로드할 수 있다.
- 토큰 생성방법은  [링크](https://dg-docs.ole.dev/advanced/fine-grained-access-token/)에서 확인할 수 있다. 설정값을 똑같이 넣어준다.
- 토큰은 [여기](https://github.com/settings/tokens/new?scopes=repo)서 생성할 수 있다. 
- **토큰 값은 한번 생성됐을때 한번만 알려주니까** 꼭 어딘가에 저장해놓자

---

### 🔍Digital Garden 플러그인 설정
- Digital Garden 플러그인에 깃허브 저장소 관련 정보를 넣어줘야한다.
1. Github repo name: 생성한 레포지토리 이름
2. Github username: 깃허브 아이디
3. Github token: 방금 생성한 토큰
![image](https://github.com/user-attachments/assets/47e4cadc-92f5-4432-813a-73bc23b0c3f7)

## 🔍노트 연결하기
- 프로퍼티를 통해 공개할 노트를 설정할 수 있다.
- **dg-publish** : 노트를 다른 사람들에게 공개한다.
- **dg-home** : 해당 노트를 메인 페이지로 설정한다.
![image](https://github.com/user-attachments/assets/ceb39f0c-4d75-41d1-bdf8-6a314375053d)

## 🔍노트 푸시하기
- `Digital Garden: Publish Single Note`를 눌러서 노트를 공개할 수 있다.
- 그리고 사이트 주소를[Vercel](https://vercel.com/dashboard)에서 찾고 몇분 뒤면 푸시한 노트가 올라와 있을 것이다.

## 🚀마무리
- 옵시디언에서 글을 쓰고 그것을 그대로 웹사이트에 올리는 것은 분명 편하긴하다.
- 하지만 사이드 카테고리가 너무 옵시디언이랑 똑같아 이 부분은 맘에 들지 않는다.
- 그래서 대안으로 webpage export 플러그인을 알아봤는데 이건 분명 편해보이지만 깃허브와 연동하는 기능이 없어서 Digital Garden을 계속 쓸것같다.

<br>
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://blog.naver.com/sharonichoya/220501242693">https://blog.naver.com/sharonichoya/220501242693</a>
</p>
</div>