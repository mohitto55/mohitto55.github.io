var store = [{
        "title": "[Git Blog] 깃허브로 이사",
        "excerpt":"첫 깃허브 블로그 개설  원래는 티스토리에서 글을 작성하였다. 처음 입문하기에 더할나위 없는 블로그였고 잘 사용하고 있었으나 옵시디언을 내 입맛대로 꾸미다가 문득 블로그도 커스터마이징을 해서 꾸며보고 싶었졌다.  옵시디언을 하면서 마크다운 문법에 꽤나 익숙해져서 보다 자유도 높은 깃허브로 이사를 오게됐다.  ","categories": ["Git_Blog"],
        "tags": ["Blog"],
        "url": "/git_blog/%EA%B9%83%ED%97%88%EB%B8%8C%EB%A1%9C-%EC%9D%B4%EC%82%AC/",
        "teaser": null
      },{
        "title": "[Network] IPv4 Header",
        "excerpt":"IP 헤더 버전 IP 버전 나타내는 4비트 필드. IPv4에선 4가 들어간다. 헤더길이 헤더길이 나타내는 4비트 필드 Internet Header Length(IHL)라고 부르기도 함 단말은 이를 보고 어디까지가 헤더인지 알 수 있음 헤더길이는 IPv4 헤더의 길이를 4바이트 단위로 환산한 값이 들어감 IPv4 헤더 길이는 기본적으로 20바이트 이므로 5가 들어감 ToS Type of Service는...","categories": ["Network"],
        "tags": ["Blog","Jekyll","MinimalMistake","UTF-8"],
        "url": "/network/IPv4-%ED%97%A4%EB%8D%94/",
        "teaser": null
      },{
        "title": "[Git Blog] invalid byte sequence in UTF-8 해결법",
        "excerpt":"UTF-8 Error 열심히 유튜브를 보며 깃블로그 작성법을 공부하던 도중 bundle exec jeakll serve를 이용해 로컬서버를 돌리려는데 시작도 못하고 에러가 발생해 중지되었다. 에러 코드를 봤더니 invalid byte sequence in UTF-8 라고 나왔다. 검색을 통해 알아보니 파일 인코딩이 UTF-8이 아니라 다른 인코딩으로 되어있어서 발생하는 오류였다. 나는 Visual studio 2022 로 글을 작성...","categories": ["Git_Blog"],
        "tags": ["Blog","Jekyll","MinimalMistake","UTF-8"],
        "url": "/git_blog/UTF-8-ERROR/",
        "teaser": null
      },{
        "title": "[Git Blog] Minimal Mistakes 사이드바 추가하기",
        "excerpt":"Minimal-Mistakes 테마를 이용해 사이드바를 만들어 볼 것이다. 1. 사이드바 옵션 설정 사이드바를 만들기 전에 사이드바 내용을 정해줘야 한다. _data/navigation.yml 파일을 들어가자. _data 폴더는 블로그에서 사용할 데이터들을 모아 놓는 폴더이고 navigation.yml은 navigation에 필요한 데이터를 저장하는 파일이다. 파일에 들어가면 main 이라고 쓰인 오브젝트가 있을 것이다. 네비게이션에 쓰일 기본 데이터다. main: - title:...","categories": ["Git_Blog"],
        "tags": ["Blog","Jekyll","MinimalMistake"],
        "url": "/git_blog/%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EC%B6%94%EA%B0%80/",
        "teaser": null
      },{
        "title": "[Git Blog] Blog CSS 적용하는 법",
        "excerpt":"Git blog의 장점중 하나는 유저가 원하는 대로 커스터마이징 가능하다는 점이다. 내가 Git blog로 넘어온 이유도 다른 블로그들에 비해 독창적인 디자인의 블로그 비중이 Git으로 만든 블로그들이 많기 때문이다. 자유롭게 블로그를 꾸밀 수 있게 해주는 GIt blog의 기능 중 하나는 커스텀 CSS 덕분이다. 이 포스트에서는 MinimalMistake 테마에서 어떻게 CSS를 적용, 수정하는지 알아볼...","categories": ["Git_Blog"],
        "tags": ["Blog","Jekyll","MinimalMistake","CSS"],
        "url": "/git_blog/Git-blog-css%EC%A0%81%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[Git] non-fast-forward Error",
        "excerpt":"! [rejected] main -&gt; main (non-fast-forward) error: failed to push some refs to 'https://github.com/mohitto55/Until2023.git' hint: Updates were rejected because the tip of your current branch is behind hint: its remote counterpart. Integrate the remote changes (e.g. hint: 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in...","categories": ["Git"],
        "tags": ["Git","Error"],
        "url": "/git/Git-non-fast-forward-Error/",
        "teaser": null
      },{
        "title": "[Obsidian] 코드수정을 한번에 CustomJS",
        "excerpt":"What is CustomJS CustomJS란 dataview에 Javascript로 작성한 함수를 적용할 수 있게 해주는 플러그인이다. Why use CustomJS 옵시디언에서 Dataview가 적힌 템플릿 노드들을 여러개 생성하다 보면 어느순간 Dataview 코드를 수정하고 싶을때가 있다. 하지만 수정하기엔 이미 너무나도 많이 생겨버려 수정할 엄두도 나지 않는다. 이를 방지할 수 있도록 코드를 함수로 작성해 간결하고,유지보수 효율을 높여줄...","categories": ["Obsidian"],
        "tags": ["Obsidian","DataviewJS","CustomJS"],
        "url": "/obsidian/Dataview-CustomJS-%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[C++] 자원관리 기법 RAII",
        "excerpt":"RAII C++진영에서 자주 쓰이는 Idiom으로 객체가 쓰이는 Scope를 벗어나면 자원을 해제해주는 기법 Resource Acquisition Is Initialization 자원의 획득은 초기화라는 뜻으로 다르게 말해서 객체와 자원의 라이프 사이클을 일치 시키라는 것이다. 무슨 말이냐면 자원을 얻을 때 초기화(Constructor)가 되어야 하며 객체가 사라질 때는 자원을 전부 반환(Destructor)해야 하며 객체가 유효하지 않은 상태 이게 만들어....","categories": ["C++"],
        "tags": ["C++","RAII"],
        "url": "/c++/RAII/",
        "teaser": null
      }]
