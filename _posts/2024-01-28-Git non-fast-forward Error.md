---
title : "[Git] non-fast-forward Error"
categories: git
tags: [Git, Error]
---


```
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/mohitto55/Until2023.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

## 발생원인
- git push -u origin main   로 로컬 저장소와 연결 시도
- 깃허브 저장소를 만들 때 READ.me 파일을 만들어서 생기는 오류.
- 데이터 유실등의 이유로 git에서 통합을 막아서 발생하는 것이다.

## Solutions
- 임시방편으로 +를 붙이면 된다.
- git push -u origin +main


## References
- [Git push 오류 해결](https://doozi316.github.io/errorlog/2019/09/30/error1/)