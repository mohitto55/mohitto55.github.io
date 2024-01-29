---
title : "[Obsidian] 코드수정을 한번에 CustomJS"
categories: Obsidian
tags: [Obsidian, DataviewJS, CustomJS]
toc: true
author_profile: false
sidebar:
  nav: "docs"
---

### What is CustomJS
CustomJS란 dataview에 Javascript로 작성한 함수를 적용할 수 있게 해주는 플러그인이다.

## Why use CustomJS
옵시디언에서 Dataview가 적힌 템플릿 노드들을 여러개 생성하다 보면 어느순간 Dataview 코드를 수정하고 싶을때가 있다. 하지만 수정하기엔 이미 너무나도 많이 생겨버려 수정할 엄두도 나지 않는다. 이를 방지할 수 있도록 코드를 함수로 작성해 **간결**하고,**유지보수** 효율을 높여줄 수 있게 해준다.

## How to use
1.community plugin에 들어가 **CustomJS**를 다운한다.

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/1313b76b-c6de-493c-aa75-3b7fdb766b6e)
2.CustomJS 플러그인 설정에 가서 js 파일들 위치 폴더를 지정해준다.
<br/>
```
class ShowTasks {
ShowNotComplitedTasksInFile(dv, pg) {
	let tasks = pg.file.tasks.where(p => !p.Completed);
	if (tasks.length == 0) {
		return;
	}

	dv.header(2, pg.file.link);
	for (let group of tasks.groupBy(t => t.section)) {
		dv.taskList(group.rows, false);
	}
}

	ShowNotComplitedTasksInPath(dv, path) {
		const { ShowTasks } = customJS;
	for (let page of dv.pages(`"${path}"`)) {
		ShowTasks.ShowNotComplitedTasksInFile(dv, page);
	}
}
}
```
3.*.js확장자 파일을 만들고 class와 함수를 작성해준다.
위 코드는 특정 위치에 있는 노드들의 완료되지 않은 Task를 보여주는 코드 함수다.
<br/>

```
dataviewjs
const {ShowTasks} = customJS;
const {ShowNotComplitedTasksInFile} = customJS;
const current = dv.current();
ShowTasks.ShowNotComplitedTasksInPath(dv,current.file.folder);
```

4.옵시디언에서 위와같이 js파일안에 클래스와 함수를 불러와주면 된다.

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/24e1274b-75e9-4679-aa3b-f82d09eb1d6c)

이제 단 한번의 수정으로 코드를 관리할 수 있게되었다.