---
title : '[VScode] Snippet을 이용해 템플릿 사용하기'
category: vscode
tags: [Vscode, Snippet, Template, 템플릿, 스니펫, IDE]
---

## Snippet
>스니펫(snippet)은 재사용 가능한 소스 코드, 기계어, 텍스트의 작은 부분을 일컫는 프로그래밍 용어이다. 사용자가 루틴 편집 조작 중 반복 타이핑을 회피할 수 있게 도와준다.
>-[Wikipedia](https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%8B%88%ED%8E%AB)

`snippet`이란 **작은 코드 조각**을 뜻하는 말로 자주 쓰는 코드를 하나의 템플릿으로 만들어 반복작업을 줄일 수 있게 해주는 기능을 말한다.

대부분의 텍스트 편집기, IDE는 이런 `snipet` 기능을 지원하며 VScode또한 마찬가지다.

## VScode에서 Snippet 사용하기
### 1. Snippet 파일 열기
`snippet`을 작성하기 위해선 먼저 `snippet`코드를 관리하는 `JSON`파일을 열어야 한다. 파일을 열기위한 방법은 두가지가 있다.

---

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/63414c56-30f2-4f78-9818-b1f4fa30e2d2)
 
 **1. File->Preferences->Configure User Snippets**

 **2. Setting->User Snippets**


---

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/b3df2470-fc19-45ba-bca8-60f4c685993a)

위 두가지 방법 중 하나를 실행하면 화면 상단에 커맨드창이 나올것이다. 필요한 `snipet` 파일을 열고 없으면 `New Global Snippets file`을 눌러 파일이름을 설정 한 후 연다.

---
### 2. 내용 작성하기
```json
{
	"snippet-name":{
		"prefix": "blog-template",
		"body": [
		"---",
		"title : '[] '",
		"category: ",
		"tags: []",
		"---",
		"",
		"",
		"",
		"<div class='Reference'>",
		"<div class='callout-header'> </div>",
		"<p>",
		"<a href=''></a>",
		"</p>",
		"</div>"
	],
		"description": "Blog Template"
	}
}
```
소스는 다음 규격을 맞춰 작성하면 된다.

|이름|<center>설명</center>|
|:---:|---|
|snippet-name|- snippet의 이름<br>- description이 설정 되있지 않으면 Intellisense에서 해당 이름이 표시된다.|
|prefix|- 자동완성시 불러올 키워드|
|body|- 자동완성시 불러올 내용<br>- 줄이 여러개일 경우 ,(comma)를 이용해 줄 바꿈을 한다.|
|description|- prefix 작성 시 Intellisense에서 표시 될 설명이다.|

---
![Honeycam](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/c15bcda9-d6d5-4340-a7e4-992411b7f4d6)*snippet을 활용해 생산성을 높일 수 있다*

`snippet`이 적용이 되면 위와 같이 작동한다. 단 몇 타자 만으로 긴 코드를 빠르게 작성할 수 있다.

## Snippet 적용이 안될 경우
설정을 완벽하게 했음에도 불구하고 Intellisense가 작동하지 않는 경우가 있다. 그럴경우 `setting.json`에서 `editor.quickSuggestions`을 true로 설정해줘야 한다.

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/53927eaa-961c-4f7a-8006-13142db2a248)*View->Command palette OR Ctrl+Shift+p*

```json
"[markdown]":{
     "editor.quickSuggestions": true
}
```

커맨드 창을 열어 `Open User Setting(JSON)`을 적고 위 소스를 넣어주면 된다.

<div class='callout-info-expanded'>
<div class='callout-header'>setting.json과 quickSuggestions</div>
<p>
setting.json은 작업중인 프로젝트의 셋팅값을 설정하는 파일이고 quickSuggestions 설정은 자동 완성 활성화 여부를 결정하는 값이다.
</p>
</div>

## Snippet 변수
`snippet`은 여러 변수 값을 지원한다. `$name` or `${name:default}` 같은 문구를 사용 함으로써 파일의 이름이나 내용을 불러올 수 있다. 자세한 내용은 [공식문서](https://code.visualstudio.com/docs/editor/userdefinedsnippets)에서 확인하기 바란다.

---

<div class='Reference'>
<div class='callout-header'> </div>
<p>
<a href='https://velog.io/@humblego42/VSCode%EC%97%90%EC%84%9C-Snippet-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0'>vVSCode에서 Snippet 활용하기</a>
<a href='https://junu-k.medium.com/vscode-%EA%BF%80%ED%8C%81-1-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%8A%A4%EB%8B%88%ED%8E%AB-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-28b6044a77d3'>vscode 꿀팁: 나만의 스니펫 사용하기</a>
<a href='https://gnews365.tistory.com/entry/vscode-settingjson-%EC%97%90-%EB%93%A4%EC%96%B4%EA%B0%80%EA%B8%B0-%EB%B9%84%EC%A3%BC%EC%96%BC-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%BD%94%EB%93%9C'>vscode setting.json 에 들어가기</a>
</p>
</div>