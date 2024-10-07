---
title : "[Unity] Unity Package Manager 사용하기"
categories: unity
tags: [Unity, PackageManager, UPM, 유니티, CI, CD]
---

유니티를 만들다 보니 생산성을 위해 여러가지 모듈을 개발하곤 한다. 나는 만들어진 모듈을 깃허브에 올리고 그것을 필요한 필요젝트에서 다시 다운 하는 방식으로 사용하고 있었다.

하지만 이런 방식은 너무 번거롭고 버전관리도 제대로 되지 않아 자동으로 관리할 수 있는 기능을 원했고 그렇게 찾은 것이 UPM 기능이다.

## CI/CD
>소프트웨어 공학에서 CI/CD는 지속적 통합(영어: continuous integration)과 지속적 배포(영어: continuous delivery, CD)가 결합한 사례를 의미한다. CI/CD는 소프트웨어의 개발, 테스트와 배포를 모두 통합함으로써 소프트웨어 버그를 쉽게 찾아낼 수 있으며, 더 빠른 배포 주기를 가질 수 있게 만들어 준다.
> -[위키백과](https://ko.wikipedia.org/wiki/CI/CD)


## Unity Package Manager
UPM은 프로젝트에 필요한 기능들을 모듈단위로 본리하고 GUI 형태로 간단하게 다운받고 이용할 수 있는 기능이다. 


이를 이용하면 번거롭게 깃허브에서 수동으로 다운 받고 사용할 일안하고 자동화를 할 수 있을 것으로 보인다. 작성한 코드를 Registry에 업로드하면 Github Action으로 연동을 해 버전을 업데이트 할 수 있다. 이런 모듈은 AssetStore처럼 다운받고 사용 할 수 있다.

### 패키지 폴더 구조 및 방법
https://drehzr.tistory.com/1544

## UPM 자동화
- Unity 자체 명시한 폴더 구조, 정해진 파일 포맷 필요
- 도큐먼트 파일 필요
- 깃허브 템플릿을 이용하기 가능

중간 서버가 필요함

## 깃허브 액션
CI/CD 플랫폼


## OpenUPM 설치??
오픈소스를 UPM에 설치가능
https://ukprog.tistory.com/61
Nojs 12이상

Packages/manifest.json 파일에 올바른 양식을 등록해야 하는데 이 수고를 덜어줌
커맨드 창에서 `npm install -g openupm-cil` 입력
그럼 아래 경로를 자동 설치해줌
`C:\Users\[UserName]\AppData\Roaming\npm

## 깃허브 액션 적용


Github 리포지토리에서 어떤 이벤트가 발생할 때 동작하는 워크플로 정의 방식
YAML 문법을 이용해 구성할 수 있음

```
name: learn-github-actions

on:
  push:
    branches: [ main ]

jobs:
  hello-world:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Run a one-line script
        run: echo "Hello, world!"
        
      - name: Run a multi-line script
        run: |
          echo "Add other actions to build,"
          echo "test, and deploy your project."
```
- on : 워크플로우 트리거할 이벤트 정의. main 브랜치에 커밋이 푸시되면 작동
- jobs : 워크플로에 들어갈 작업
- runs-on 워크플로를 실행할 러너, ubuntu-latest 머신 사용
- steps - 하나의 작업에 들어가는 스텝들
- uses - 사용할 액션의 패키지 이름. 여기서는 러너에서 리포지토리에 접근할 수 있도록 세팅 및 체크 아웃을 하는 actions/checkout 액션을 사용하고 있습니다. 이처럼 GitHub Actions는 복잡하거나 자주 사용하는 작업을 재사용이 가능하도록 Actions 라는 모듈로 묶을 수 있으며, 이러한 액션은 GitHub에서 공식적으로 제공하는 것을 사용하거나 다른 사람이 작성한 것을 가져올 수 있습니다.
- run 명령어 실행

루트폴더/.github/workflows 디렉토리 안에 *.yml 파일로 저장함

### 워크플로우 구조 구상
- CI/CD 워크플로 구성하려면 **수동**프로세스 파악 필요

UPM 배포 과정 나열
1. package.json 파일 열어 version 값 수정
2. 커밋 후 태그 매김
3. npm login 명렁어 이용해 사내 패키지 레지스트리에 로그인
4. npm publish 명령어로 패키지 배포를

# 서버를 사용하는 이유
- 서버가 패키지를 인증된 사용자에게 자동으로 배달 해줘서 사용자가 직접 다운 받을 필요 없게 하는 것

# 뭐가 좋나
- Github Packages
    - UPM, json 사용 문법 다름, 유니티가 지원 안함

- Verdaccio
    - 프라이빗 한 환경에서 하기 좋다.

# Verdaccio 구성하기
node.js = 서버서 자바스크립트 실행하기 위한 런타임 환경

verdaccio
node.js 기반의 private 레지스트리를 구축할 수 있게 해주는 오픈소스.
즉 내가 서버가 되서 배포하는 거임
https://velog.io/@rudy/Unity-Package-Manager

## 설치
Node.js 먼저 설치해야함

기본설치
--location=global: 이 옵션은 패키지를 전역으로 설치하도록 지정하는 것입니다. 즉, 프로젝트의 경로와 관계없이 시스템 전체에서 사용할 수 있습니다.

`npm install --location=global verdaccio`

`npm install --location=global verdaccio@7-next`
 byt can try it out already, either for testing purposes or helping to catch any possible bug, if you find something report it under the label 6.x bugs


`npm install --location=global yo`
yo: Yeoman은 웹 애플리케이션 및 프로젝트의 생성기입니다. Yeoman을 사용하면 프로젝트 템플릿을 사용하여 프로젝트를 빠르게 설정할 수 있습니다. 예를 들어, Angular, React, Vue.js 등의 프로젝트를 시작하는 데 사용될 수 있습니다.

`npm install --location=global generator-verdaccio-plugin`
플러그인 설치

## 패키지 기본 파일 설정
npm init 하기

## 접근허가하기
외부 접근 허가 위해 config.yaml 수정 필요함
아니면 유저등록, 분배등을 못한다

config.yaml 파일 생성하려면 먼저 verdaccio를 실행해야한다
`verdaccio`를 누르면 서버가 실행되고 파일 위치가 보인다.
C:\Users\admin\AppData\Roaming\verdaccio\config.yaml

153 줄에 listen: 0.0.0.0:4873  만 하기!!

## 서버 열기
https://j1y00h4.tistory.com/32
`verdaccio`를 입력해 서버를 열고 나서 유저를 등록해야 한다.

## 현재 등록 된 유저 확인
http://localhost:4873/ 로 이동하면 보임

## 유저 등록하기
npm adduser --registry=http://localhost:4873/
이름, 패스워드, 이메일 적기

### 패키지 저장소 지정
패키지 저장 폴더 위치까지 이동
npm set registry 도메인(ip주소)
- 도메인 주소로 바뀌면 기존 npm 주소로 다운 받을 수 있는 모든 패키지 다운 못함
- 패키지를 다운받는 저장소 주소를 바꿈
- 돌아가고 싶으면 npm set registry https://registry.npmjs.org/
- 넣어야하는 주소는 verdaccio의 아이피 주소를 뜻함
- 즉 verdaccio의 서버주소 사용
npm set registry http://localhost:4873/

npm adduser --registry 도메인(ip주소) 
- 유저 등록 (아이디, 비밀번호 설정)
- 한 cmd 로 서버열고 다른 cmd로 적어야함
npm adduser --registry http://localhost:4873/

## 깃허브 리포지토리와 연동하기

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/3566b1ba-46a6-4bc6-a0c1-ff06f39ade8c)

서버 구축하기
https://velog.io/@minidoo/private-npm-registry



publishConfig in your package.json

{
  "publishConfig": {
    "registry": "http://localhost:4873"
  }
}

### 패키지 배포 방법 
npm publish --registry 도메인(ip주소)
패키지 배포 취소 방법 : > npm unpublish --force 패키지 이름(com.xxx.xxx)




# 워크플로 실행법
1. 특정 라벨의 PR이 병합
2. 특정 패턴의 태그 푸시
3. 특정 파일 수정하는 커밋이 푸시

하지만 버전은 시맨틱 버전을 따르도록 해야함
사람의 판단이 제일 중요함 그래서 직접 하기

직접 배포 워크플로 실행 workflow_dispatch
```
on:
  workflow_dispatch:
    inputs:
      tag:
        description: "Version you want to publish (ex: 1.0.0)"
        required: true
```

## 액션 실행 범위 지정
어느 폴더에 액션을 실행할지 정할 수 있다.
```
defaults:
  run:
    working-directory: ./Assets/Package
```
애초에 패키지에서 작업하는게 아닌 에셋/패키지 전용폴더에서 작업해라


## 버전 정보 수정법
- package.json 파일의 버전 값 가져옴
- 특정값 수정 sed 명령어로 바꾸기 가능
- -e "s/regexp/replacement/ 옵션을 이용하여 version 뒷값은 워크플로 트리거 시 입력 받은 값으로 바꿈
```
- name: Update package.json to version ${{ inputs.tag }}
  run: sed -i -e "s/\(\"version\":\) \"\(.*\)\",/\1 \"${{ inputs.tag }}\",/" package.json
```

- package.json 변경되 커밋 푸시 해야함
- 태그도 생성하고 푸시해야함

### 깃 태그
- 특정 커밋을 태그 하는 것으로 버전을 태그로 붙여 버전이 잘보이게 만들어 준다
https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-%ED%83%9C%EA%B7%B8-%EA%B8%B0%EB%8A%A5-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B2%95-tag

```
- name: Commit and push
  run: |
    git config --local user.name ${GITHUB_ACTOR}
    git config --local user.email ${GITHUB_ACTOR}@users.noreply.github.com
    git commit -a -m "Prepare for version ${{ inputs.tag }}"
    git push ${REPO_URL}
- name: Create tag ${{ inputs.tag }} and push
  run: |
    git tag ${{ inputs.tag }}
    git push ${REPO_URL} ${{ inputs.tag }}
```

### 보안 문제 어떻게?
- 깃 리포지토리에 푸시 할 때 인증이 진행 된다.
- Github 아이디, 토큰 입력하면 되지만 CI/CD서는 이러면 실패 원이이 됨
- 다음과 같이 주소에 이름,토큰 넘길 순 있음
`REPO_URL: https://<your_github_id>:<your_personal_access_token>@github.com/${{ github.repository }}.git`

- 하지만 이렇게 주소에 담아 넘기는건 매우 보안 사고 위험

### GitHub Action이 막아줌
- 저런 값들 저장하는 공간 줌
- GITHUB_TOKEN키 제공
- secrets 컨텍스트서 가져옴
- 워크플로 내에서 암호화, 로그상 마스킹

`REPO_URL: https://${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}.git`

### 방화벽 풀기!!
방화벽을 풀지 않으면 로컬 서버로는 접속이 안된다.

https://dev.to/verdaccio/how-to-use-verdaccio-with-github-registry-2ejj?source=post_page-----268ef36fb225--------------------------------
#### Uplink
config.yaml 열고 아래를 추가한다
```
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
  github:
    url: https://npm.pkg.github.com
    auth:
      type: bearer
      token: xxxx
```
깃허브 토큰을 구해야 하는데 \
자세한건 여기서 https://verdaccio.org/docs/uplinks/#auth-property

#### 패키지 엑세싱
깃허브는 내 퍼블릭 패키지를 스코프 접속을 필요로 한다.
Proxy


### 로컬 verdaccio 서버와 github action 연결하기
로컬IP는 외부와 접촉할 수 없다
그래서 훅킹을 해줘야 한다.



#### secret 컨텍스트에 변수 추가하기
##### 토큰 추가하기
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/ecbcb5dc-8582-40ee-8cc7-d300f271ff3e)
1. 토큰 생성
github 계정의 settings -> Developer settings -> Tokens 에서 Generate new token 을 클릭한 후 classic token 을 선택

기한, 스코프 설정
일단 repo,workflow랑 지정하기
토큰 번호 반드시 복사하기
토큰: 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

2. 액션 토큰 지정
리포지토리->setting->secrets and variable->Actions
New repository token 로 생성준비

- Name에는 token 이름 Snake style로 작성
 - 네이밍 문법으로 단어가 합쳐진 부분마다 언더라인 붙이는 것
 - action에 사용할 GITHUB_TOKEN와 똑같이 작성할 필요는 없고 아무렇게나 하기
 - ex)Test_Token
- Secret는 token 입력

##### 유저 정보 추가하기
리포지토리->setting->secrets and variable->Actions->Secrets에서
NPM_USER
NPM_PASS
NPM_EMAIL
NPM_REGISTRY
  - http://172.30.1.79:4873/ 자기주소:4873
  - Action은 공개된 주소만 되고 로컬 주소는 안됨

추가하기

### 레지스트리 배포
- GitHub에선 node 환경 용 actions/setup-node 액션 제공
- registry 로그인 시 필요한 정보는 secrets에서 읽기
- node관련 액션을 수행할 때 node 16은 수명이 다하여 지원을 안해준다.
- 그래서 노드 20으로 해줘야한다.
- https://github.blog/changelog/2023-09-22-github-actions-transitioning-from-node-16-to-node-20/
```
- name: Setup node
  uses: actions/setup-node@v3
  with:
    node-version: 16
- name: Login to registry and publish
  env:
    NPM_USER: ${{ secrets.NPM_USER }}
    NPM_PASS: ${{ secrets.NPM_PASS }}
    NPM_EMAIL: ${{ secrets.NPM_EMAIL }}
    NPM_REGISTRY: ${{ secrets.NPM_REGISTRY }}
  run: |
    npm install -g npm-cli-login
    npm-cli-login
    npm publish --registry $NPM_REGISTRY
```
## 종합
```
name: Publish

on:
  workflow_dispatch:
    inputs:
      tag:
        description: "Version you want to publish (ex: 1.0.0)"
        required: true

defaults:
  run:
    working-directory: ./Assets/Package

jobs:
  update-package-json:
    runs-on: ubuntu-latest
    env:
      REPO_URL: https://${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}.git
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          ref: ${{ github.ref }}
          fetch-depth: 0
      - name: Update package.json to version ${{ inputs.tag }}
        run: sed -i -e "s/\(\"version\":\) \"\(.*\)\",/\1 \"${{ inputs.tag }}\",/" package.json
      - name: Commit and push
        run: |
          git config --local user.name ${GITHUB_ACTOR}
          git config --local user.email ${GITHUB_ACTOR}@users.noreply.github.com
          git commit -a -m "Prepare for version ${{ inputs.tag }}"
          git push $REPO_URL
      - name: Create tag ${{ inputs.tag }} and push
        run: |
          git tag ${{ inputs.tag }}
          git push $REPO_URL ${{ inputs.tag }}
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Login to registry and publish
        env:
          NPM_USER: ${{ secrets.NPM_USER }}
          NPM_PASS: ${{ secrets.NPM_PASS }}
          NPM_EMAIL: ${{ secrets.NPM_EMAIL }}
          NPM_REGISTRY: ${{ secrets.NPM_REGISTRY }}
        run: |
          npm install -g npm-cli-login
          npm-cli-login
          npm publish --registry $NPM_REGISTRY
```


## 오류 모음
fatal: unable to access 'https://github.com/mohitto55/UPMTest.git/': The requested URL returned error: 403
> 시크릿 토큰 설정 안함
해결 법 : https://light-tree.tistory.com/252

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/ecbcb5dc-8582-40ee-8cc7-d300f271ff3e)
1. 토큰 생성
github 계정의 settings -> Developer settings -> Tokens 에서 Generate new token 을 클릭한 후 classic token 을 선택

기한, 스코프 설정
일단 repo,workflow랑 지정하기
토큰 번호 반드시 복사하기
토큰: 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

2. 액션 토큰 지정
리포지토리->setting->secrets and variable->Actions
New repository token 로 생성준비

- Name에는 token 이름 Snake style로 작성
 - 네이밍 문법으로 단어가 합쳐진 부분마다 언더라인 붙이는 것
 - ex)Test_Token
- Secret는 token 입력

### 액터 인증
Run git config --local user.name ${GITHUB_ACTOR}
  git config --local user.name ${GITHUB_ACTOR}
  git config --local user.email ${GITHUB_ACTOR}@users.noreply.github.com
  git commit -a -m "Prepare for version 1.0.5"
  git push $REPO_URL
  shell: /usr/bin/bash -e {0}
  env:
    REPO_URL: ***github.com/mohitto55/UPMTest.git
[main 98175ff] Prepare for version 1.0.5
 1 file changed, 1 insertion(+), 1 deletion(-)
remote: Write access to repository not granted.
fatal: unable to access 'https://github.com/mohitto55/UPMTest.git/': The requested URL returned error: 403
Error: Process completed with exit code 128.

https://stackoverflow.com/questions/73687176/permission-denied-to-github-actionsbot-the-requested-url-returned-error-403
> 나의 경우엔 오직 읽기만 가능함 읽고 쓰기가 되게 해야함

Settings -> Action -> General -> Workflow permissions and choose read and write permissions

### Login to registy and publish
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/c8b9d519-6501-4e32-a9d6-d68b80347364)
Run npm install -g npm-cli-login
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

added 135 packages, and audited 136 packages in 7s

17 packages are looking for funding
  run `npm fund` for details

4 vulnerabilities (2 moderate, 2 high)

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/lib/index.js:11
            throw new Error(err);
            ^

Error: Error: No username supplied.
    at /opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/lib/index.js:11:19
    at /opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/lib/login.js:59:24
    at RegClient.adduser (/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/node_modules/npm-registry-client/lib/adduser.js:28:25)
    at Object.login (/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/lib/login.js:51:16)
    at module.exports (/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/lib/index.js:9:9)
    at login (/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/bin/npm-cli-login.js:30:19)
    at Object.<anonymous> (/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm-cli-login/bin/npm-cli-login.js:33:1)
    at Module._compile (node:internal/modules/cjs/loader:1198:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1252:10)
    at Module.load (node:internal/modules/cjs/loader:1076:32)
Error: Process completed with exit code 1.

배포하는 유저의 이름이 제공되지 않아서 생기는 오류
secret에서 변수를 만들어야 한다.

### npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

Node의 버전이 낮아서 지원이 안되는 라이브러리를 사용해 생기는 오류 node 버전을 올려야 한다.

# 배포가 좀 많이 어렵네 문서화 부터 하자
## DocFX 주의점
1. C#만 지원한다 C++은 안된다.

## 다른 언어 지원하기
https://dotnet.github.io/docfx/docs/additional-languages.html
Docfx는 기본적으로 C++만 지원하지만 다른 언어도 추가할 수 있다.
다만 맞춤형 API 변환기가 필요하다.

1. toc.yml file : 이 파일은 페이지의 콘텐츠 테이블의 계층을 생성한다.
2. series of YAML files : 이들은 각각 개별 페이지가 포함된 API 페이지 구조를 준수합니다. 생성된 페이지의 파일 경로는 페이지에 액세스하는 데 사용되는 URL에 해당합니다. API 참조 페이지 데이터 구조에 대한 포괄적인 문서는 API 페이지를 참조하세요.

To utilize the artifact generated by an API converter, you need to modify the docfx.json configuration file to incorporate the artifact as a build input. For instance, consider the following directory structure:

|- docfx.json
|- api // <-- output directory of custom API converter
    |- toc.yml
    |- api-page-1.yml
    |- api-page-2.yml
In the above structure, you can configure docfx.json to include the output of the API converter in the following manner:

{
  "build": {
    "content": [
      { "files": "api/**/*.yml" }
    ],
  }
}

DocFX 사용하기
기본 폴더구조

#### 경로
Assets/Package/Documentation~ 혹은
프로젝트루트/Documentation

DocFXSample\
    Articles\
    Images\
    Src\
        TestLib.sln
        TestLib\

설치
Documentation 폴더로가서
Install docfx as a global tool:
dotnet tool install -g docfx

Create and start a website locally:

기본 파일 만들기
docfx init -y

메타데이터 생성하기
docfx
>api 폴더에 메타데이터가 생성된다.


로컬 서버 작동
docfx serve

### 흰화면만 나온다.
여기까지 하면 흰색 바탕만 나오고 CSS가 적용되지 않은 모습이 보인다.

### 필터 설정하기
filterConfig.yml를 Documentation 폴더에 생성한다.
이 파일은 문서로 만들 API를 필터링하는 파일이다.

### 사이트 구성위한 파일 구성
DocFX에서 사이트 구성 및 편집을 하는 방법에 대해 설명드리겠습니다.

docfx.json 파일 편집: 프로젝트 폴더에 생성된 docfx.json 파일을 열어서 구성을 수정합니다. 이 파일은 DocFX 프로젝트의 주요 구성 파일입니다.

사이트 메타데이터 설정: docfx.json 파일에서 "metadata" 섹션을 찾아 사이트 메타데이터를 설정합니다. 이 메타데이터에는 사이트의 제목, 설명, 저자 등의 정보를 제공할 수 있습니다.

## DocFX 소스 추가하기
소스 인식할 수 있도록 metadata 정보와 build/content 정보를 구성해 주면 된다.

metadata : 소스를 연계하기 위한 설정
src : 소스 관련 정보
files : 소스 대상인 솔루션 또는 프로젝트 파일 와일드 카드 설정
exclude : bin/obj 같은 폴더내의 파일 제외용 와일드 카드 설정
src : 소스 폴더 설정
dest : 출력 결과물은 위치시킬 폴더 설정
build : DocFx 빌드를 위한 설정
content : 컨텐츠로 사용할 설정
files : 소스 빌드에서 생성된 파일에 대한 와일드 카드 설정
src : 소스 빌드에서 생성된 출력 결과 폴더 지정
dest : 소스 빌드의 결과를 docfx 빌드해서 결과물을 위치시킬 폴더 지정
resource : 이미지와 같은 Asset 파일들의 폴더 지정
dest : DocFx 결과 사이트 폴더 지정
```
{
  "metadata": [
    {
      "src": [
        {
          "src": "../",
          "files": [
            "**/*.csproj",
            "**/*.sln"
          ],
          "exclude": [
            "**/bin/**", 
            "**/obj/**"
        ]
        }
      ],
      "dest": "api",
      "disableGitFeatures": false,
      "disableDefaultFilter": false,
      "filter": "filterConfig.yml"
    }
  ],
  "build": {
    "content": [
      {
        "files": [
          "api/**.yml",
          "api/index.md"
        ]
      },
      {
        "files": [
          "articles/**.md",
          "articles/**/toc.yml",
          "toc.yml",
          "*.md"
        ]
      }
    ],
    "resource": [
      {
        "files": [
          "images/**"
        ]
      }
    ],
    "overwrite": [
      {
        "files": [
          "apidoc/**.md"
        ],
        "exclude": [
          "obj/**",
          "_site/**"
        ]
      }
    ],
    "_appTitle": "Example Unity documentation",
    "_appFooter": "Example Unity documentation",
    "_enableSearch": true,
    "dest": "_site",
    "globalMetadataFiles": [],
    "fileMetadataFiles": [],
    "template": [
      "default"
    ],
    "postProcessors": [],
    "noLangKeyword": false,
    "keepFileLink": false,
    "cleanupCacheHistory": false,
    "disableGitFeatures": false
  },
  "sitemap":
  {
    "baseUrl": "https://normanderwan.github.io/DocFxForUnity"
  }
}
```


### S3 프리티어 사용하기
https://dibrary.tistory.com/184

https://aws.amazon.com/ko/s3/?did=ft_card&trk=ft_card

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://medium.com/@thkim2/unity-package-manager-%EC%95%84%EC%A7%81-%EC%95%88%EC%8D%A8%EB%B4%A4%EC%96%B4-36b122b22fd4">https://medium.com/@thkim2/unity-package-manager-%EC%95%84%EC%A7%81-%EC%95%88%EC%8D%A8%EB%B4%A4%EC%96%B4-36b122b22fd4</a>
</p>
</div>