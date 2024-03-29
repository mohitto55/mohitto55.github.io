---
title : "[Git Blog] Blog CSS 적용하는 법"
categories: gitblog
tags: [Blog, Jekyll, MinimalMistake, CSS]
---

Git blog의 장점중 하나는 유저가 원하는 대로 커스터마이징 가능하다는 점이다. 내가 Git blog로 넘어온 이유도 다른 블로그들에 비해 독창적인 디자인의 블로그 비중이 Git으로 만든 블로그들이 많기 때문이다. 자유롭게 블로그를 꾸밀 수 있게 해주는 GIt blog의 기능 중 하나는 커스텀 CSS 덕분이다. 이 포스트에서는 **MinimalMistake** 테마에서 어떻게 CSS를 적용, 수정하는지 알아볼 것이다.

## CSS 파일 위치
**MinimalMistake**의 CSS 파일들은 루트폴더에서 **_sass/minimal-mistakes**폴더 안에 있다. 안에 있는 **.scss** 확장자 파일들이 있는데 이것이 CSS 파일이다. 각 파일들은 블로그를 구성하는 여러 구조들의 외관을 어떻게 표현할지 적혀져있다.

## 수정할 영역 찾기
적혀진 내용이 매우 많은데 어느것이 내가 수정하기 원하는 부분인지 알기 어렵다. 이를 알고싶으면 페이지에서 직접 확인해야한다. 페이지에 들어가서 우클릭/검색 혹은 F12 눌러서 개발자 모드 창을 열면 html이 적힌 화면이 보일 것이다. 

이는 현재 페이지가 html로 어떻게 구성되어 있는지 볼 수 있는 창으로 html 코드에 마우스를 가져다대면 화면에 해당 html이 적용중인 영역이 표시된다. 원하는 영역이 표시되는 html을 찾았으면 해당 코드를 클릭하고 아래쪽 스타일 부분을 보면 CSS 코드가 보일 것이다. 

그리고 오른쪽 상당에 **_*.scss:숫자** 형식으로 쓰여져 있을텐데 이는 해당 CSS 코드의 파일 위치를 나타낸다.


## 변수
CSS 코드를 보면 일반적인 숫자 변수말고 **$*** 형식으로 되어있는 것이 있다. 이는 변수로 **_variables.scss** 파일안에 정의되어 있다. 


## SUMMARY
- F12 or 우클릭/검색 개발자 모드로 페이지를 구성하는 html을 볼 수 있다.
	- 스타일 영역에서 수정하고 싶은 CSS 코드 위치를 확인 할 수있다.
- CSS코드는 **_sass/minimal-mistakes** 폴더 안에 있다.
- 변수는 **_sass/_variables.scss** 파일에 정의되어 있다.