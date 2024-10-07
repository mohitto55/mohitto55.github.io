var store = [{
        "title": "[C#] 확장메서드 (Extension Method)",
        "excerpt":"간혹 프로그램을 작성하다 보면 특정 클래스에 메서드를 추가하고 싶은 경우가 있다. 그게 내가 만든 클래스라면 직접 파일을 열어서 추가하면 되지만 외부 라이브러리를 사용할 시 직접 수정하지 못하게 막아놓은 경우도 있을 것이다. 그럴 경우에 사용하면 되는 것이 확장메서드이다.확장메서드를 사용할 시 클래스 내부가 아닌 외부에서 메서드를 정의함으로서 기존 형식의 코드변경 없이 외부에서...","categories": ["cs"],
        "tags": ["C#","linq","확장메서드"],
        "url": "/cs/C-%ED%99%95%EC%9E%A5%EB%A9%94%EC%84%9C%EB%93%9C/",
        "teaser": null
      },{
        "title": "[Git Blog] 깃허브로 이사",
        "excerpt":"첫 깃허브 블로그 개설  원래는 티스토리에서 글을 작성하였다.  처음 입문하기에 더할나위 없는 블로그였고 잘 사용하고 있었으나 옵시디언을 내 입맛대로 꾸미다가 문득 블로그도 커스터마이징을 해서 꾸며보고 싶었졌다.   옵시디언을 하면서 마크다운 문법에 꽤나 익숙해져서 보다 자유도 높은 깃허브로 이사를 오게됐다.  ","categories": ["gitblog"],
        "tags": ["Blog"],
        "url": "/gitblog/%EA%B9%83%ED%97%88%EB%B8%8C%EB%A1%9C-%EC%9D%B4%EC%82%AC/",
        "teaser": null
      },{
        "title": "[Network] IPv4 Header",
        "excerpt":"IP 헤더 버전 IP 버전 나타내는 4비트 필드. IPv4에선 4가 들어간다. 헤더길이 헤더길이 나타내는 4비트 필드 Internet Header Length(IHL)라고 부르기도 함 단말은 이를 보고 어디까지가 헤더인지 알 수 있음 헤더길이는 IPv4 헤더의 길이를 4바이트 단위로 환산한 값이 들어감 IPv4 헤더 길이는 기본적으로 20바이트 이므로 5가 들어감 ToS Type of Service는...","categories": ["network"],
        "tags": ["Blog","Jekyll","MinimalMistake","UTF-8"],
        "url": "/network/IPv4-%ED%97%A4%EB%8D%94/",
        "teaser": null
      },{
        "title": "[Git Blog] invalid byte sequence in UTF-8 해결법",
        "excerpt":"UTF-8 Error 열심히 유튜브를 보며 깃블로그 작성법을 공부하던 도중 bundle exec jeakll serve를 이용해 로컬서버를 돌리려는데 시작도 못하고 에러가 발생해 중지되었다. 에러 코드를 봤더니 invalid byte sequence in UTF-8 라고 나왔다. 검색을 통해 알아보니 파일 인코딩이 UTF-8이 아니라 다른 인코딩으로 되어있어서 발생하는 오류였다. 나는 Visual studio 2022 로 글을 작성...","categories": ["gitblog"],
        "tags": ["Blog","Jekyll","MinimalMistake","UTF-8"],
        "url": "/gitblog/UTF-8-ERROR/",
        "teaser": null
      },{
        "title": "[Git Blog] Minimal Mistakes 사이드바 추가하기",
        "excerpt":"Minimal-Mistakes 테마를 이용해 사이드바를 만들어 볼 것이다. 1. 사이드바 옵션 설정 사이드바를 만들기 전에 사이드바 내용을 정해줘야 한다. _data/navigation.yml 파일을 들어가자. _data 폴더는 블로그에서 사용할 데이터들을 모아 놓는 폴더이고 navigation.yml은 navigation에 필요한 데이터를 저장하는 파일이다. 파일에 들어가면 main 이라고 쓰인 오브젝트가 있을 것이다. 네비게이션에 쓰일 기본 데이터다. main: - title:...","categories": ["gitblog"],
        "tags": ["Blog","Jekyll","MinimalMistake"],
        "url": "/gitblog/%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EC%B6%94%EA%B0%80/",
        "teaser": null
      },{
        "title": "[UE5] 언리얼 리플렉션(Reflection) 알아보기",
        "excerpt":"개요 언리얼 엔진을 사용하면 UPROPERTY를 자주 사용하게된다. 정확한 이유는 모르지만 에디터에 변수를 표시하고 싶으면 쓰라고 공부해서 아무생각 없이 작성했었다. 그런데 사용할 수록 점점 의문이 들었는데 멀티플레이 게임을 제작할 때 Replicate를 하려면 UPROPERTY를 필수로 붙인다던가 지속적으로 사용하는 변수에 UPROPERTY를 붙이지 않으면 잠깐 사용안하는 1초사이에 GC가 처리해서 오류가 발생한다고 지인한테서 듣게되었다. 내가...","categories": ["ue5"],
        "tags": ["UnrealEngine","UE","Reflection","Property","UPROPERTY","C++"],
        "url": "/ue5/%EC%96%B8%EB%A6%AC%EC%96%BC-UPROPERTY/",
        "teaser": null
      },{
        "title": "[Git Blog] Blog CSS 적용하는 법",
        "excerpt":"Git blog의 장점중 하나는 유저가 원하는 대로 커스터마이징 가능하다는 점이다. 내가 Git blog로 넘어온 이유도 다른 블로그들에 비해 독창적인 디자인의 블로그 비중이 Git으로 만든 블로그들이 많기 때문이다. 자유롭게 블로그를 꾸밀 수 있게 해주는 GIt blog의 기능 중 하나는 커스텀 CSS 덕분이다. 이 포스트에서는 MinimalMistake 테마에서 어떻게 CSS를 적용, 수정하는지 알아볼...","categories": ["gitblog"],
        "tags": ["Blog","Jekyll","MinimalMistake","CSS"],
        "url": "/gitblog/Git-blog-css%EC%A0%81%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[Git] non-fast-forward Error",
        "excerpt":"! [rejected] main -&gt; main (non-fast-forward) error: failed to push some refs to 'https://github.com/mohitto55/Until2023.git' hint: Updates were rejected because the tip of your current branch is behind hint: its remote counterpart. Integrate the remote changes (e.g. hint: 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in...","categories": ["git"],
        "tags": ["Git","Error"],
        "url": "/git/Git-non-fast-forward-Error/",
        "teaser": null
      },{
        "title": "[Obsidian] 코드수정을 한번에 CustomJS",
        "excerpt":"What is CustomJS CustomJS란 dataview에 Javascript로 작성한 함수를 적용할 수 있게 해주는 플러그인이다. Why use CustomJS 옵시디언에서 Dataview가 적힌 템플릿 노드들을 여러개 생성하다 보면 어느순간 Dataview 코드를 수정하고 싶을때가 있다. 하지만 수정하기엔 이미 너무나도 많이 생겨버려 수정할 엄두도 나지 않는다. 이를 방지할 수 있도록 코드를 함수로 작성해 간결하고,유지보수 효율을 높여줄...","categories": ["obsidian"],
        "tags": ["Obsidian","DataviewJS","CustomJS"],
        "url": "/obsidian/Dataview-CustomJS-%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[C++] 자원관리 기법 RAII",
        "excerpt":"RAII C++진영에서 자주 쓰이는 Idiom으로 객체가 쓰이는 Scope를 벗어나면 자원을 해제해주는 기법 Resource Acquisition Is Initialization 자원의 획득은 초기화라는 뜻으로 다르게 말해서 객체와 자원의 라이프 사이클을 일치 시키라는 것이다. 무슨 말이냐면 자원을 얻을 때 초기화(Constructor)가 되어야 하며 객체가 사라질 때는 자원을 전부 반환(Destructor)해야 하며 객체가 유효하지 않은 상태 이게 만들어....","categories": ["cpp"],
        "tags": ["C++","RAII"],
        "url": "/cpp/RAII/",
        "teaser": null
      },{
        "title": "[Hardware] GPU 인식 안되는 현상 해결",
        "excerpt":"큰돈을 주고 컴퓨터를 새로 장만하고 기쁜 마음으로 언리얼엔진5를 시작했다. 그런데 이상하게도 에디터의 인식이 굉장히 느렸었다. 단순한 버그라기엔 뭔가 이상해서 CPU-Z를 이용해 그래픽카드를 확인해 봤더니… 분명 내 GPU는 RTX 4070 SUPER인데 구매한적도 없는 GPU가 들어가 있었다. 조립업체에 맡겨서 조립후 배달로 온건데 사기를 당한건가 싶기도 했다. 확인해 보니 인식되고 있던 GPU는 CPU내장...","categories": ["hardware"],
        "tags": ["GPU","CPU","Grapic Driver","Bios","Hardware","Mainboard"],
        "url": "/hardware/GPU-%EC%9D%B8%EC%8B%9D%EC%95%88%EB%90%8C-%ED%95%B4%EA%B2%B0/",
        "teaser": null
      },{
        "title": "[Git Blog] 사이드 카테고리 추가하기",
        "excerpt":"좌측 사이드바에 카테고리를 넣어볼 것이다. 1. 카테고리 목록 정하기 _data/navigation.yml에서 하단의 내용을 넣고 한글로 된 부분을 수정한다. sidebar-category: - title: \"타이틀\" children: - title: \"표시될제목\" url: \"/주소\" category: \"카테고리\" 2. 카테고리 포스트 목록 페이지 생성 _page로가서 catagories라는 폴더를 만들고 안에 카테고리 요소당 하나씩 *.md파일을 생성해 준다. 그리고 아래 요소들을 수정한다....","categories": ["gitblog"],
        "tags": ["minimal-mistake","Jekyll","Blog"],
        "url": "/gitblog/Blog-side-category-%EC%B6%94%EA%B0%80/",
        "teaser": null
      },{
        "title": "[Git Blog] Liquid 문법{% %}표시하기",
        "excerpt":"Liquid? 블로그를 작성하다 보면 가끔 {% %}라고 쓰여진 텍스트를 쓸 때가 있다. 하지만 그냥 작성하면 포스트에는 보이지 않고 사라지는 경우가 있다. 이는 {% %}는 Liquid라는 템플릿 언어의 문법 중 하나로 Jekyll같은 정적 사이트에서 주로 사용된다. {% %} 사이에 Liquid 문법을 넣어 템플릿을 생성하거나 조건문을 넣는데 아무 조치없이 사용하면 Jekyll 사이트는...","categories": ["gitblog"],
        "tags": ["minimal-mistake","Jekyll","Blog","Liquid","template","markdown"],
        "url": "/gitblog/Liquid-%EB%AC%B8%EB%B2%95-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[UE5] Actor, Component, GameMode 개념 정리",
        "excerpt":"언리얼 엔진의 기본 개념 컴포넌트 직접 코드를 작성해 시스템을 수행하는 모듈 액터의 추가 기능 확장 모듈이라 생각하면 된다. 트랜스폼 여부에 따라 불리는 이름이 다르다 액터 컴포넌트 - 트랜스폼 없이 기능만 제공 씬컴포넌트 - 트랜스폼이 있을 경우 Actor 월드내에 존재하는 유형, 무형의 게임 오브젝트 반드시 보이는 것 뿐만이 아닌 시스템 적으로...","categories": ["ue5"],
        "tags": ["UnrealEngine5","Actor","Pawn","Character","PlayerController","Component","GameMode","C++"],
        "url": "/ue5/UE5-Actor-Pawn-Character-%EB%B9%84%EA%B5%90/",
        "teaser": null
      },{
        "title": "[UE5] Enhanced Input",
        "excerpt":"EnhancedInput? EnhancedInput 시스템은 Unreal Engine5에 등장한 새로운 Input 시스템으로 기존 InputSystem 보다 더 나은 기능 및 확장성을 가졌다. 이 포스팅에서는 코드로 EngancedInput를 사용하는 법을 작성할 것이다. EnhancedInput 모듈준비 EnhancedInput은 코드로 작성할 수 있다. EnhancedInput 시스템을 사용하기 전에 먼저 모듈을 추가시켜줘야 한다. 1.모듈이란 UEnhancedInputLocalPlayerSubSystem는 EnhancedInputSubsystems.h 헤더 안에 있다 이 헤더를 쓰기...","categories": ["ue5"],
        "tags": ["UnrealEngine5","Actor","Component","C++"],
        "url": "/ue5/UE5-Enhanced-Input/",
        "teaser": null
      },{
        "title": "[Git Blog] Jekyll에서 emoji사용하기",
        "excerpt":"Emoji? Jekyll 테마는 github의 gemoji 같이 :: 사이에 이름를 넣어 Emoji를 사용 할 수 있는 기능인 jemoji를 제공한다. 다만 기본적으로 제공하는 건 아니고 플러그인을 추가해줘야 한다. jemoji 적용 Gemfile에 jemoji를 추가한다. gem \"jemoji\" 그리고 _config.yml에도 jemoji 플러그인을 추가한다. gem은 Ruby에서 지원하는 패키지 시스템이다. plugins: ... - jemoji 그럼 :: 사이에...","categories": ["gitblog"],
        "tags": ["jekyll","minimal-mistake","emoji","이모지","jemoji","gemoji"],
        "url": "/gitblog/Jekyll-%EC%9D%B4%EB%AA%A8%EC%A7%80-%EC%A0%81%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[Git Blog] Jekyll 코드블럭 테마 설정하기",
        "excerpt":"1. 테마 설치하기 먼저 아래 코드블럭 테마 사이트에 가서 원하는 테마의 이름을 복사한다. :point_right: 테마 사이트 2. rouge설치 gem install rouge CMD에서 root폴더에 위와 같이 입력해서 테마를 설치한다. 3. _config.yml 수정. # Conversion markdown: kramdown highlighter: rouge # Markdown Processing kramdown: input: GFM 4. css파일 다운받기 rougify style 테마이름 &gt;...","categories": ["gitblog"],
        "tags": ["Git","Blog","Jekyll","minimal-mistakes","코드블럭"],
        "url": "/gitblog/Jekyll-%EC%BD%94%EB%93%9C%EB%B8%94%EB%9F%AD-%ED%85%8C%EB%A7%88-%EB%B0%94%EA%BE%B8%EA%B8%B0/",
        "teaser": null
      },{
        "title": "SOLID 객체지향 5대원칙",
        "excerpt":"설명 OOP(객체지향언어)를 개발 하면서 지켜야 할 5가지 원칙을 말한다. 많은 Design Pattern이 SOLID 원칙을 토대로 만들어졌기에 이 원칙을 숙지하면 Design Pattern 및 구조 설계를 하기 수월해진다. 모든 코드에 반드시 적용할 필요는 없지만 좋은 설계를 위해선 해당 사항들을 의식하면서 작성하면 좋다. 장점 수정과 유지보수가 수월하다 단일 책임 원칙(SRP) 객체는 하나의 목적만...","categories": ["cpp"],
        "tags": ["SOLID","OOP","객체지향","객체지향5대원칙","디자인패턴","Design Pattern"],
        "url": "/cpp/SOLID-%EC%9B%90%EC%B9%99/",
        "teaser": null
      },{
        "title": "[C++] 백준 2665번-미로만들기",
        "excerpt":"BOJ 2665-미로만들기 문제 예제 입력 8 11100110 11010010 10011010 11101100 01000111 00110001 11011000 11000111 에제 출력 2 풀이 BFS를 사용하여 풀었다. board의 맵을 저장하고 flag는 방문 시 가장 적은 횟수로 벽을 부셨던 경우다. queue에 좌표(x,y)와 부순 횟수(c)를 담는다. queue를 탐색하고 현재 탐색 노드의 flag값보다 c가 크면 다음으로 넘어간다. 도착지점이면 답을...","categories": ["boj"],
        "tags": ["boj","백준","solved","문제풀이 2665번"],
        "url": "/boj/BOJ-2665%EB%B2%88/",
        "teaser": null
      },{
        "title": "[C++] 전방선언(Forward Declaration)",
        "excerpt":"전방선언 식별자를 정의하기 전 미리 식별자를 컴파일러에 알리는 것을 뜻한다. 원래는 식별자를 사용하기 위해선 정의된 헤더를 불러와야 하지만 전방선언(forward declaratioin)을 이용해 헤더를 선언하지 않아도 사용할 수 있다. 사용법 클래스 타입 전방선언 class MyObject; // 타입 전방선언 MyObject* ob1; 타입이 클래스임을 알리는 전방선언(forward declaratioin)이다. 이렇게 헤더를 선언하지 않고 사용하는 것 이여서...","categories": ["cpp"],
        "tags": ["C++","Forward Declaration","전방선언"],
        "url": "/cpp/CPP-%EC%A0%84%EB%B0%A9%EC%84%A0%EC%96%B8/",
        "teaser": null
      },{
        "title": "[CS] 짧은 순회 평가(Short circuit evaluation)",
        "excerpt":"Short circuit evaluation 논리연산을 할 때 왼쪽 식부터 차례대로 논리평가를 하다가 만약 결과가 false일 경우 우측에 있는 식을 검증하지 않고 끝나는 것을 뜻한다. 왜 이런 것이 있을까 생각해보면 답은 간단하다. 이미 논리연산의 결과가 나왔기에 남은 논리평가를 실행할 이유가 없기 때문이다. if(v[0] != 0 &amp;&amp; v[3] == 5){} v의 length가 0일경우...","categories": ["computerscience"],
        "tags": ["CS","Short circuit evaluation","짧은 순회 평가"],
        "url": "/computerscience/CS-%EC%A7%A7%EC%9D%80-%EC%88%9C%ED%9A%8C-%ED%8F%89%EA%B0%80/",
        "teaser": null
      },{
        "title": "[Git] 100MB이상 커밋하기 Git-LFS",
        "excerpt":"문제 발생 Github로 수정 내용을 저장소에 올리는 과정에서 특정 파일의 크기가 100MB가 넘어가면 Git에서 commit을 reject한다. 이를 해결 하기 위해선 100MB가 넘어가는 파일을 커밋하는 과정에서 제외하거나 Git LFS를 사용해야 한다. Git LFS LFS로 관리 받는 파일은 실제 리포지토리가 아닌 다른 저장소로 옮겨지고 실제 리포지토리는 메타데이터를 통해 다른 저장소에 있는 파일을...","categories": ["git"],
        "tags": ["Git","LFS","Github"],
        "url": "/git/Git-LFS%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[UE5] Modifires로 여러 값 반환하기",
        "excerpt":"EnhancedInput 언리얼엔진5은 기존 InputSystem을 대체하는 Enhanced Input을 이용해 더 확장성 높고 사용하기 편한 입력 시스템을 만들었다. 이 시스템 중 Input Mapping Context는 하나 이상의 Input Action을 트리거 할 수 있게 해준다. Mapping Context 설정 Mapping Context가 하는 일을 나열해 보자면 키 등록 - 어떤 키를 입력해야 InputAction이 실행되는지 설정 Trigger...","categories": ["ue5"],
        "tags": ["Unrealengine5","UE5","EnhancedInput","언리얼엔진5"],
        "url": "/ue5/UE5-Unhanced-Input-IMC-%EC%84%B8%EB%B6%80%EC%84%A4%EC%A0%95/",
        "teaser": null
      },{
        "title": "[C++] 백준 12865번-평범한 배낭",
        "excerpt":"BOJ 12865-평범한 배낭 문제 예제 입력 4 7 6 13 4 8 3 6 5 12 에제 출력 14 풀이 DP를 이용하는 냅색(Knapsack)문제다. 물건을 넣는 경우와 안넣는 경우 두가지에 대한 모든 경우의 수 중 무게가 k보다 안 높고 value가 가장 높은 경우를 구한다. 필요없는 경우의 수를 제외하기 위해 flag[무게 합][탐색...","categories": ["boj"],
        "tags": ["boj","백준","solved","문제풀이 12865번","Knapsack","Dynamic Programming","DP","C++","배낭문제"],
        "url": "/boj/BOJ-12865%EB%B2%88/",
        "teaser": null
      },{
        "title": "[C++] 백준 2629번-양팔저울",
        "excerpt":"BOJ 2629-양팔저울 문제 예제 입력1 2 1 4 2 3 2 에제 출력1 Y N 예제 입력2 4 2 3 3 3 3 1 4 10 에제 출력2 Y Y N 풀이 DP를 사용하여 푸는 문제다. 구슬의 무게 + 왼쪽 추의 무게합 = 우측 추의 무게 합 이 성립될 경우...","categories": ["boj"],
        "tags": ["boj","백준","solved","문제풀이 2629번","Dynamic Programming","DP"],
        "url": "/boj/BOJ-2629%EB%B2%88/",
        "teaser": null
      },{
        "title": "[Algorithm] Dynamic Programming(동적 계획법) 설명",
        "excerpt":"Dynamic Programming 다이나믹 프로그래밍이란 복잡한 문제를 여러개의 작은 문제로 나누고 값을 저장하여 푸는 방법을 말한다. 일반적으로 재귀 함수를 통해 이전 함수의 결과 값을 이용해 문제를 풀어나간다. 동적계획법 사용하는 이유 동적계획법은 재귀(Naive Recursion)함수와 비슷하다. 일반적인 재귀 함수는 같은 조건의 작은 문제들이 여러번 반복되어서 효율성이 낮다. 가장 대표적인 문제 중 하나인 피보나치...","categories": ["algorithm"],
        "tags": ["Algorithm","DP","Danamic Programming"],
        "url": "/algorithm/Dynamic%EB%8F%99%EC%A0%81%EA%B3%84%ED%9A%8D%EB%B2%95-%EC%84%A4%EB%AA%85/",
        "teaser": null
      },{
        "title": "[VScode] Snippet을 이용해 템플릿 사용하기",
        "excerpt":"Snippet 스니펫(snippet)은 재사용 가능한 소스 코드, 기계어, 텍스트의 작은 부분을 일컫는 프로그래밍 용어이다. 사용자가 루틴 편집 조작 중 반복 타이핑을 회피할 수 있게 도와준다. -Wikipedia snippet이란 작은 코드 조각을 뜻하는 말로 자주 쓰는 코드를 하나의 템플릿으로 만들어 반복작업을 줄일 수 있게 해주는 기능을 말한다. 대부분의 텍스트 편집기, IDE는 이런 snipet...","categories": ["ide"],
        "tags": ["Vscode","Snippet","Template","템플릿","스니펫","IDE"],
        "url": "/ide/VSCode-Snippets/",
        "teaser": null
      },{
        "title": "[Git Blog] 마크다운으로 이미지 캡션 추가하기",
        "excerpt":"이미지 캡션 이미지 아래 회색 글씨 캡션이란 위와 같이 이미지 아래 작은 글씨로 이미지에 대한 설명 글을 뜻한다. 한 문장으로 이미지에 대한 설명을 간략히 보여주기에 글을 이해하는데 도움을 주는 기능이다. Markdown 이미지 ![이름](링크) minimal-mistake 블로그 글을 쓸 때 이미지 표시를 주로 마크다운 기능을 이용해서 작성하는데 아쉽게도 마크다운에선 캡션 기능을 지원하고...","categories": ["gitblog"],
        "tags": ["Git","Blog","minimal-mistake","Jekyll","Markdown","Caption","마크다운","캡션"],
        "url": "/gitblog/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%BA%A1%EC%85%98/",
        "teaser": null
      },{
        "title": "[UE5] 프로젝트 폴더 정리본",
        "excerpt":"언리얼 엔진 사용 시 aaa 중요한 폴더 파일 및 폴더 설명 Config - 프로젝트의 환경 설정 값을 보관하는 곳 - 지우면 기본 설정 값으로 바뀐다 Content - 프로젝트에서 사용하는 .uasset 파일들이 있는 폴더 Source - C++ 소스가 있는 폴더 - 모듈 소스와 빌드 파이프라인 C# 소스도 있다. .uproject파일 - 언리얼...","categories": ["ue5"],
        "tags": ["UnrealEngine5","Folder","UE5","uproject"],
        "url": "/ue5/%EC%96%B8%EB%A6%AC%EC%96%BC-%ED%8F%B4%EB%8D%94-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[Algorithm] GCD 최소공약수 알고리즘",
        "excerpt":"예전 블로그에서 GCD에 관한 글을 작성하였는데 너무 오래되어 기억이 안나서 다시 재 작성하기로 했다. 최대공약수, 최소공배수의 개념 최대공약수 : 두 수의 약수 중 가장 큰 공통된 약수 최소공배수 : 두 수의 배수 중 가장 작은 공통된 배수 유클리드 알고리즘 두 자연수의 최대 공약수(Greatest Common Divisor)를 찾는 알고리즘을 뜻한다. 유클리드 알고리즘으로...","categories": ["algorithm"],
        "tags": ["Algorighm","최대공약수","최소공배수","GCD","LCM","유클리드 호제법","유클리드 알고리즘"],
        "url": "/algorithm/GCD-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/",
        "teaser": null
      },{
        "title": "[Unity] Private Repository 패키지를 UPM를 이용한 업데이트 방법",
        "excerpt":"들어가며 Unity를 이용하다 보니 생산성을 위해 여러가지 모듈을 개발하곤 한다. 나는 만들어진 모듈을 GitHub에 올리고 그것을 필요한 프로젝트에서 다시 다운 하는 방식으로 사용하고 있었다. 하지만 이런 방식은 너무 번거롭고 버전관리도 제대로 되지 않아 자동으로 관리할 수 있는 기능을 원했고 그렇게 찾은 것이 UPM 기능이다. UPM을 이용하여 Private 한 Repository에 접근해...","categories": ["unity"],
        "tags": ["Unity","PackageManager","UPM","유니티","Git","Repository","Git Credential Helper","CI/CD"],
        "url": "/unity/%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80/",
        "teaser": null
      },{
        "title": "[Algorithm] Bubble Sort 버블정렬 알고리즘",
        "excerpt":"Bubble Sort 버블 정렬 알고리즘은 정렬 알고리즘 중 하나로 느리지만 간단하여 자주 쓰이는 알고리즘이다. 원리 Index 0 부터 시작해서 n-i까지 비교해 자신 보다 작은 값을 보면 Swap 한 회차에 한번도 정렬이 안됐으면 정렬을 종료한다. 시간 복잡도 \\[(n-1) + (n-2)... = \\frac{n(n-1)}{2} = O(N^2)\\] 비교 횟수 i가 n-2 일 때 비교횟수...","categories": ["algorithm"],
        "tags": ["Algorighm","Sort","정렬","Bubble Sort","버블정렬"],
        "url": "/algorithm/Bubble-Sort-%EB%B2%84%EB%B8%94-%EC%A0%95%EB%A0%AC/",
        "teaser": null
      },{
        "title": "[Algorithm] Selection Sort 선택정렬 알고리즘",
        "excerpt":"Selection Sort 선택정렬 알고리즘은 제자리 정렬 알고리즘 중 하나로 입력 데이터 외 추가 데이터가 필요하지 않은 알고리즘이다. 원리 정렬하고자 하는 데이터 중 가장 큰 데이터의 맨 끝 데이터랑 교환 0번 째 Index부터 N-i까지 차례로 순회한다. 순회를 하던 중 값이 Index &lt; Index +1 일 경우 가장 큰 값을 Index +...","categories": ["algorithm"],
        "tags": ["Algorighm","Sort","정렬","Selection Sort","선택정렬"],
        "url": "/algorithm/Selection-Sort-%EC%84%A0%ED%83%9D-%EC%A0%95%EB%A0%AC/",
        "teaser": null
      },{
        "title": "[Window] Window에서 Linux(WSL2) 환경 설치하기",
        "excerpt":"들어가며 Docker를 사용하기 위해 알아보던 중 Hyper-V 기능을 활성화 해야하는 것을 알았다. 활성화 하려고 했지만 아무리 찾아도 보이지 않았다. 어찌된 것인지 알아보니 Window Pro 이상의 버전만 지원하는 기능이였고 난 Home였기에 할 수 없었다. 어떻게든 방법을 찾던 와중 Window에서 Linux 환경을 실행할 수 있는 기능이 있었고 이를 이용하면 Docker도 설치할 수...","categories": ["os"],
        "tags": ["Window","Linux","Ubuntu","WSL2","Window Service for Linux","우분투","윈도우","리눅스"],
        "url": "/os/WSL2-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[C++] 백준 17396번-백도어",
        "excerpt":"문제 링크 BOJ 17396-백도어 문제 예제 입력1 5 7 0 0 0 1 1 0 1 7 0 2 2 1 2 4 1 3 3 1 4 6 2 3 2 3 4 1 에제 출력1 12 예제 입력2 5 7 0 1 0 1 1 0 1 7...","categories": ["boj"],
        "tags": ["boj","백준","PS","solved","문제풀이 17396번","Dijkstra","다익스트라"],
        "url": "/boj/BOJ-17396%EB%B2%88/",
        "teaser": null
      },{
        "title": "[Math] 데카르트 좌표계와 극 좌표계",
        "excerpt":"들어가기 좌표는 우리 일상 생활에서 중요한 요소다. 사람과의 거리, 건축, 컴퓨터 등 다양한 분야에서 사용하는 개념이다. 좌표계는 고대에도 사용된 개념인데 천문학자들이 별의 위치를 추정하기 위하여 사용하곤 했다. 오늘은 우리 일상과 빠트릴 수 없는 좌표계에 대하여 알아볼 것이다. 좌표계란 공간에 대해서 위치를 숫자나 가하학 요소를 이용해 나타낸 것이다 데카르트 좌표계(Cartesian coordinate...","categories": ["math"],
        "tags": ["데카르트 좌표계","Cartesian coordinate system","극 좌표계","Polar coordinate system"],
        "url": "/math/%EC%A2%8C%ED%91%9C%EA%B3%84-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[Algorithm] Merge Sort 합병정렬 알고리즘",
        "excerpt":"Merge Sort 선택정렬 알고리즘은 제자리 정렬 알고리즘 중 하나로 입력 데이터 외 추가 데이터가 필요하지 않은 알고리즘이다. 원리 정렬하고자 하는 데이터 중 가장 큰 데이터의 맨 끝 데이터랑 교환 0번 째 Index부터 N-i까지 차례로 순회한다. 순회를 하던 중 값이 Index &lt; Index +1 일 경우 가장 큰 값을 Index +...","categories": ["algorithm"],
        "tags": ["Algorighm","Merge","Divide and Conquer","정렬","Merge Sort","합병정렬","분할정복"],
        "url": "/algorithm/Merge-Sort-%ED%95%A9%EB%B3%91%EC%A0%95%EB%A0%AC/",
        "teaser": null
      },{
        "title": "[Ubuntu] Docker 설치하기",
        "excerpt":"도커 다운받기 1. 우분투 시스템 패키지 업데이트 sudo apt-get update 2. 필요한 패키지 설치 sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common 3. Docker의 공식 GPG키를 추가 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - 4. Docker의 공식 apt 저장소를 추가 sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\" 5....","categories": ["linux"],
        "tags": ["Window","Linux","Ubuntu","WSL2","Window Service for Linux","Docker","도커","우분투","윈도우","리눅스"],
        "url": "/linux/Docker-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Ubuntu] Docker 삭제하기",
        "excerpt":"Docker 삭제하기 1. docker 설치 확인하기 dpkg -l | grep -i docker 2. docker를 삭제 sudo apt-get purge -y docker-engine docker docker.io docker-ce sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce 위의 명령으로 호스트에서 이미지, 컨테이너, 볼륨 또는 사용자 생성 구성 파일을 제외한 모든 파일을 삭제한다. ​3. 모든 이미지,...","categories": ["linux"],
        "tags": ["Window","Linux","Ubuntu","WSL2","Window Service for Linux","Docker","도커","우분투","윈도우","리눅스"],
        "url": "/linux/Docker-%EC%99%84%EC%A0%84-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Docker] Error response from daemon: container id is not running 에러 해결법",
        "excerpt":"들어가며 docker exec -it mysql-container bash 를 통해 MySql 컨테이너에 진입하려고 했는데 Error response from daemon: container id is not running 라는 오류가 나오며 실행되지 않았다. 도커 컨테이너 접속시 오류 Error response from daemon: container 1a0ab9fe9da2301b1d7959614ad2e8335ae745cf9b72a2b0394474236526557c is not running 이것은 컨테이너 접속전행전 도커 이미지가 실행되고 있지 않아서 일어나는 오류로 아래...","categories": ["network"],
        "tags": ["Docket","Ubuntu","Linux","컨테이너"],
        "url": "/network/Docker-%EC%BD%98%ED%85%8C%EC%9D%B4%EB%84%88-%EB%9F%B0-%EC%98%A4%EB%A5%98/",
        "teaser": null
      },{
        "title": "[Visual Studio] Nuget Package Manager Console 사용 방법",
        "excerpt":"들어가며 C#을 통해 작업하다보면 외부 라이브러리를 사용해야 할 경우가 있다. 마침 적당한 라이브러리가 보여서 Nuget 패키지를 통해서 찾다보면 검색이 안되는 경우가 있다. 그래서 공식 사이트에가서 설치 방법을 알아보면 저런 설치 명령어가 있는 경우가 있다. 필자도 Itext를 다운 받으려고 했는데 Nuget에서 Itext가 다운이 되지 않아 방법을 찾아보니 저런걸 발견했다. 결론은 C#은...","categories": ["ide"],
        "tags": ["Visual Studio","Nuget","Nuget Package Manager Console","WSL2","C#"],
        "url": "/ide/VS-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80-%EC%BD%98%EC%86%94-%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[Obsidian] CSS 적용하며 PDF로 내보내는법",
        "excerpt":"PDF 출력 옵시디언을 통해 내용을 정리하고 다양한 기능들을 이용해 꾸민뒤 PDF로 변환해야할 때가 있다. 그런데 이상하게도 css로 열심히 꾸며도 PDF로 출력만 하면은 제대로 적용이 되지 않은채 변환되곤한다. 같은 내용 다른 느낌 어떻게든 CSS를 제대로 적용시키고 싶어서 ITEXT로 PDF로 변환도 해보고 기존 CSS를 수정하는 등 여러 시행착오를 거쳐서 변환 전 모습과...","categories": ["obsidian"],
        "tags": ["css","html","Obsidian","PDF","옵시디언"],
        "url": "/obsidian/Obsidian-PDF-Export/",
        "teaser": null
      },{
        "title": "[Unity] 정점이 8개인 Cube 만들기",
        "excerpt":"유니티 큐브의 정점갯수는 기본적으로 24개다. 정점 8개만 이용해도 큐브를 만들 수 있지 않나 싶어서 만들어보았다. Cube 만들기 vertex 순서 우선 정점을 만들어준다. 정점의 순서는 위와 같이 정했으며 이를 구현한다. float halfWidth = width / 2; float halfHeight = height / 2; List&lt;Vector3&gt; vertexs = new List&lt;Vector3&gt;(); vertexs.Add(new Vector3(-halfWidth, -halfHeight, -halfWidth));...","categories": ["unity"],
        "tags": ["Unity","Mesh","Cube","UV"],
        "url": "/unity/Unity-%EC%A0%95%EC%A0%908%EA%B0%9C-%ED%81%90%EB%B8%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Unity] 정점이 24개인 큐브 만들기",
        "excerpt":"지난번 정점 8개 큐브 만들기에 이어서 이번엔 정점24개를 가진 큐브를 만들어 볼 것이다. Cube 작성 정점위치 참조 테이블 한 위치에 같은 정점이 3개가 만들어지는데 이 정점의 위치를 매번 계산하는 것 보단 테이블로 만들고 면이 테이블에 있는 정점 위치 정보를 가져오게 하는 것이 좋을 것이다. 그러기 위해선 각 면에서 사용할 정점...","categories": ["unity"],
        "tags": ["Unity","Cube","Mesh"],
        "url": "/unity/Unity-%EC%A0%95%EC%A0%9024%EA%B0%9C-%ED%81%90%EB%B8%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[Unity] 패럴씽크로 멀티플레이 게임 개발하기",
        "excerpt":"들어가며 멀티플레이 게임을 개발할 때 가장 중요한 것 중 하나가 여러 유저의 동시 접속 기능이다. 예전에 멀티 게임을 구현할 때 시스템이 제대로 작동하는지 테스트하기 위해 게임을 빌드하고 직접 다운 받고 실행하는 방식으로 했었는데 시간이 매우 오래걸리고 비효율 적이였다. 오랜만에 다시 멀티게임을 만들게 되었는데 과거의 끔찍했던 경험을 다시 하고싶지 않아 에디터...","categories": ["unity"],
        "tags": ["Unity","MultiPlay"],
        "url": "/unity/Unity-%ED%8C%A8%EB%9F%B4-%EC%8B%B1%ED%81%AC/",
        "teaser": null
      },{
        "title": "[Visual Studio] LNK2019 함수에서 참조되는 확인할 수 없는 외부기호",
        "excerpt":"설명 보통 솔류션 파일을 직접 만들어 작업하지 않고 복사 붙여넣을 때 발생하는 오류다. 발생과정 MyQueue.h에 클래스 구현 Alt Enter로 함수 구현 하려 했으나 h에 생성이 됨 직접 cpp파일을 만들고 구현. 빌드 오류 해결과정 아마 cpp파일을 복사 붙여넣기 하여 만든것이 원인이라 생각하여 참조 디렉터리를 확인해보기로 했다. 하지만 생각해보니 하나의 프로제그에 모두...","categories": ["ide"],
        "tags": ["Visual Studio","비쥬얼스튜디오","LNK2019","오류"],
        "url": "/ide/VS-%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-%EC%B0%B8%EC%A1%B0%EB%90%98%EB%8A%94-%ED%99%95%EC%9D%B8%ED%95%A0-%EC%88%98-%EC%97%86%EB%8A%94-%EC%99%B8%EB%B6%80%EA%B8%B0%ED%98%B8/",
        "teaser": null
      },{
        "title": "[UE5] C++ 폴더 추가하는 법",
        "excerpt":"개요 언리얼엔진은 C++ Class 폴더가 존재한다. 이 폴더에서 프로젝트에 적용하는 모든 C++ 파일들이 들어가게 되는데 해당 폴더안에 폴더를 새로 생성하면 인식이 되지 않는 경우가 있다. 이를 해결하기 위해선 언리얼이 감지할 수 있게 범위를 지정해 주어야한다. 폴더 감지 설정 C++ 파일은 모두 All/C++Classes 폴더 아래에 생성된다. 언리얼엔진은 이 폴더안에 있는 C++...","categories": ["ue5"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","C++"],
        "url": "/ue5/UE5-C++-%ED%8F%B4%EB%8D%94-%EC%83%9D%EC%84%B1%EB%B2%95/",
        "teaser": null
      },{
        "title": "[UE5] 애니메이션 리타겟팅 완벽히 이해하기",
        "excerpt":"개요 언리얼 마켓플레이스나 Mixamo를 둘러보다 보면 좋은 애니메이션들이 많다. 찾은 애니메이션을 다른 Skeleton에 적용시키려고하면 Skeleton이 일치하지 않아 사용할 수 없는데 Animation Retargeting은 다른 Skeleton에 애니메이션을 사용할 수 있게 만들어주는 기능이다. Mixamo 에셋 가져오기 원하는 캐릭터로 애니메이션 가져오기 Mixamo캐릭터에서 원하는 메시를 고른다. 리타겟팅 5.4 이상 5.4 버전부터는 자동으로 애니메이션 리타겟팅이 가능하다....","categories": ["ue5"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","Animation Retargeting"],
        "url": "/ue5/UE5-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A6%AC%ED%83%80%EA%B2%9F%ED%8C%85/",
        "teaser": null
      },{
        "title": "[UE5] Unreal Insights 사용법",
        "excerpt":"프로파일링 (Profiling) 프로그래밍에서의 프로파일링이란 소프트웨어의 성능 분석을 말한다. 프로그램의 메모리, CPU 사용량, 여러 이벤트 발생률들을 통계적으로 요약하여 보여준다. 프로파일링 툴을 이용하여 성능 취약점 부분을 찾아내어 보다 쉬운 최적화가 가능하다. 언리얼 인사이트 언리얼의 프로파일링 툴이다. 다양한 퍼포먼스 데이터를 체크할 수 있다. 네트워크 통신 상태도 확인 가능하다. 로컬 게임 설정법 인사이트 실행하기...","categories": ["ue5"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","Unreal Insights"],
        "url": "/ue5/UE5-%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[UE5] 트레이스 채널 사용법",
        "excerpt":"개요 트레이스 채널 생성 for 액션 판정 - ABAction 캐릭터 캡슐용 프로필 : ABAction 트레이스 채널에 반응 타입은 Pawn이다. 스켈레탈 메시용 프로필 - 주로 랙돌 구현 트리거용 프로필 : 폰 캡슐에만 반응, 타입은 WorldStaticd 트레이스 채널 추가 Project Setting &gt; Engine &gt; Collision &gt; New Trace Channel 프리셋 추가 아래...","categories": ["ue5"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","Trace Channel"],
        "url": "/ue5/UE5-%ED%8A%B8%EB%A0%88%EC%9D%B4%EC%8A%A4-%EC%B1%84%EB%84%90-%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[UE5] 패키지된 게임 디버그 하는 법",
        "excerpt":"개요 네트워크 기능이 있는 게임을 만들었는데 PIE상에서는 괜찮았는데 패키지를 하니 버그가 발생했다. 이게 네트워크에서 발생한 것인지 아니면 내부 구조 로직에서 충돌이 일어난 것인지 알길이 없어서 디버그를 해야만 했다. 언리얼 디버그에 관한 지식이 전무 했었기 때문에 이 기회에 패키지된 게임을 디버그하는 방법을 공부하여 정리하는 시간을 가져보았다. 사전 준비 디버깅을 위한 편집기...","categories": ["ue5"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","Debug","Package"],
        "url": "/ue5/UE5-%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%94%94%EB%B2%84%EA%B7%B8/",
        "teaser": null
      },{
        "title": "[UE5] Loading PreDefault Modules for Plugin 오류 해결하기",
        "excerpt":"에러 현상 사용하던 5.3프로젝트를 5.4로 변경하고 Motion Matching을 연습 중이였는데 빌드하고 재시작하니 위와 같이 75%에서 계속 멈추고 진행이 되지 않았다. 해결 과정 Warning LogAnimation SkeletalMesh SkeletalMesh /Game/Characters/Mannequin_UE4/Meshes/SK_Mannequin.SK_Mannequin has no skeleton. This needs to fixed before an animation can be set Warning LogLinker [AssetLog] C:\\Users\\admin\\git\\UE5\\Multi\\Content\\MCO_Mocap_Basics\\Character\\Mesh\\UE4_Mannequin_Skeleton.uasset: Failed to load '/Engine/EngineMeshes/Humanoid': Can't find...","categories": ["ue5"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","Plugin","Error","Motion Matching"],
        "url": "/ue5/UE5-Modules-for-Plugin-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0/",
        "teaser": null
      },{
        "title": "[Graphics] 렌더링 파이프라인 정리",
        "excerpt":"렌더링 파이프라인 3차원 모델을 2차원 화면에 투영하는 렌더링 과정을 말한다. 벌칸 엔진의 렌더링 파이프라인 과정 Application 좌표계 정하기 2차원은 왼손 좌표계 3차원은 오른손 좌표계를 이용한다. Geometry Processing 정점 정보를 3D 공간으로 변환하는 단계 모델, 뷰행렬 투영, 클립핑 등등 화면에 표시할 기하학적 요소들을 화면상에 투영시키는 과정 Resterization 정점 정보를 픽셀 데이터로...","categories": ["computergraphics"],
        "tags": ["UE5","Unreal Engine5","Unreal Engine","Debug","Package"],
        "url": "/computergraphics/%EB%A0%8C%EB%8D%94%EB%A7%81-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[CS] 컴퓨터에서 문자를 표현하는 방법",
        "excerpt":"문자 집합과 인코딩 문자집합 컴퓨터가 인식할 수 있는 문자의 모음이다. 인코딩 문자를 0과 1로 변환해 컴퓨터가 이해할 수 있는 정보로 변환하는 과정이다. 디코딩 0과1을 사람이 이해하는 문자로 변환하는 과정이다. 아스키 코드 초창기 문자집합이다. 7비트로 표현할 수 있는 문자는 총 128개이다. 표현 가능한 수가 적기 때문에 한글을 표현할 수 없다. 확장...","categories": ["computerscience"],
        "tags": ["인코딩","디코딩","유니코드","아스키코드","Unicode","ASCII","Encode","Decode","ECU-KR","UTF-8","UTF-16","UTF-32"],
        "url": "/computerscience/%EB%AC%B8%EC%9E%90%EB%A5%BC-%ED%91%9C%ED%98%84%ED%95%98%EB%8A%94-%EC%9D%B8%EC%BD%94%EB%94%A9%EA%B3%BC-%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C/",
        "teaser": null
      },{
        "title": "[Window] 구글캘린더 바탕화면에 위젯 생성하기",
        "excerpt":"들어가며 나는 Todoist, Google Calendar, Obsidian을 통해 일정관리를 한다. 나는 일정관리에서 제일 중요하다 생각하는 부분이 언제 어디서든 최소한의 액션으로 간편하게 일정을 확인할 수 있어야 한다고 생각한다. 그래서 휴대폰에는 바탕화면에 구글 캘린더 위젯을 생성하고 옵시디언에서 Full Calendar 플러그인을 통해 구글 캘린더를 확인할 수 있다. 다만 윈도우의 경우에는 구글캘린더를 바탕화면 위젯으로 생성가능한...","categories": ["os"],
        "tags": ["Window","Google Calendar","Outlook","Widget","Calendar","윈도우","구글캘린더","아웃룩"],
        "url": "/os/%EA%B5%AC%EA%B8%80%EC%BA%98%EB%A6%B0%EB%8D%94-%EC%95%84%EC%9B%83%EB%A3%A9-%EC%97%B0%EB%8F%99-%EB%B0%94%ED%83%95%ED%99%94%EB%A9%B4/",
        "teaser": null
      },{
        "title": "[Docker] Docker와 VM의 차이점",
        "excerpt":"Docker Docker란 컨테이너를 이용한 오픈소스 가상화 플랫폼이다. 컨테이너는 OS레벨의 가상화로 프로세스를 격리시켜 동작하는 것을 말한다. OS자체를 가상화 하던 방식과는 다른데 무슨 차이가 있는것일까? VM 가상화 vs Docker 가상화 VM 기존에는 하나의 서버에 하나의 어플리케이션만 구동시켰다. 이는 남는 자원이 많아진다. 이를 극복하기 위해 나온것이 가상화다 하이퍼바이저 기반의 가상화가 많이 이용됐다. 논리적으로...","categories": ["network"],
        "tags": ["Docker","Ubuntu","Linux","컨테이너","VM","가상환경","가상머신","도커","하이퍼바이저","HyperVisor","Virtual Machine"],
        "url": "/network/Docker%EC%99%80-VM-%EC%B0%A8%EC%9D%B4/",
        "teaser": null
      },{
        "title": "[Docker] Docker Image 개념과 구조",
        "excerpt":"Docker 이미지 컨테이너를 만드는데 사용되는 Template이라 생각하면 된다. 컨테이너는 이미지를 기반으로 생성된다. 이미지는 Docker hub에서 다운받아서 사용하는 방식으로 도커 계정을 가진 사람들끼리 이미지를 공유할 수 있다. 이미지 구조와 레이어 이미지는 용량이 매우 큰데 기본 몇백MB다. 이미지를 업데이트하면 그 큰 용량을 매번 전부 다운 받는것은 비효율적이다. 그래서 Layer 구조를 통해 관리를...","categories": ["network"],
        "tags": ["Docker","Ubuntu","Linux","컨테이너","Image","Layer"],
        "url": "/network/Docker-Image-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[Docker] Ubuntu에서 Docker로 Mysql설치하기",
        "excerpt":"Docker 설치 Docker 다운받기 sudo wget -qO- http://get.docker.com/ | sh Docker 버전 확인 docker -v Mysql 설치 Docker 이미지 다운 sudo docker pull mysql 다운받아진 이미지 확인 docker images 컨테이너를 실행하기 docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=&lt;password&gt; -d -p 3306:3306 mysql:latest --name &lt;container_name&gt; : &lt;container_name&gt; 이름의 컨테이너를 실행한다. -e :...","categories": ["network"],
        "tags": ["Docket","Ubuntu","Linux","컨테이너"],
        "url": "/network/Docker%EC%97%90-mysql-%EC%84%A4%EC%B9%98/",
        "teaser": null
      },{
        "title": "[UE5] 언리얼엔진 캐릭터 애니메이션 모션매칭 사용법",
        "excerpt":"언리얼엔진이 5.4버전이 나오면서 모션매칭 기능이 새로 발표되었다. 모션 매칭은 캐릭터 애니메이션을 위한 차세대 프레임워크다. 이 기술은 언리얼 엔진 5.4 버전에서 새롭게 도입되었으며, 캐릭터의 움직임을 더욱 자연스럽고 역동적으로 만드는 데 중점을 준다. 모션매칭을 이용한 애니메이션 제작은 기존 방식과 큰 차이가 있다. 모션 매칭의 주요 특징으로는 다음과 같다. 1. 데이터 기반 접근:...","categories": ["ue5"],
        "tags": ["UE5","UnrealEngine","Animation","MotionMatching"],
        "url": "/ue5/UE5-%EB%AA%A8%EC%85%98%EB%A7%A4%EC%B9%AD%EC%82%AC%EC%9A%A9%EB%B2%95/",
        "teaser": null
      },{
        "title": "[CS] 페이징과 스와핑을 활용한 가상 메모리 관리 기법 이해하기",
        "excerpt":"컴퓨터 시스템에서 프로세스는 작업을 처리하기 위해 반드시 데이터를 메모리에 저장해야 한다. 하지만 물리적인 메모리 용량은 제한적이기 때문에, 모든 프로세스가 동시에 메모리에 상주할 수는 없다. 이를 해결하고자 운영체제는 다양한 메모리 관리 기법을 통해 메모리 자원을 효율적으로 배분하고 활용한다. 이러한 기법들은 프로세스의 메모리 사용량을 최적화하고, 실행 속도를 보장하며, 시스템의 안정성을 유지하는 데...","categories": ["computerscience"],
        "tags": ["가상 메모리","Virtual Memory","페이징","Paging","스와핑","Swapping","메모리 관리 기법","Memory Management","컴퓨터 구조","Computer Architecture","운영체제","Operating System","메모리 단편화","Memory Fragmentation","프로세스 메모리 할당","Process Memory Allocation"],
        "url": "/computerscience/%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B5%AC%EC%A1%B0-%EA%B0%80%EC%83%81%EB%A9%94%EB%AA%A8%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[Obsidian] Vercel을 활용한 Obsidian Digital Garden 블로그 만들기",
        "excerpt":"옵시디언으로 블로그를 만드는 이유 지금까지 나는 지식을 정리하고 정리한 내용을 공유하기 위해 여러 종류의 블로그 사이트를 사용해 봤다. 맨처음에는 네이버 블로그였는데 한국인의 입장에선 확실히 네이버가 접근성이 좋긴하지만 한국인을 제외한 외국인들은 구글 검색에 뜨기가 쉽지않고 디자인이 마음에 들지않아 금방 포기했다. 그 다음은 티스토리 블로그였다. 개발관련 자료를 검색하면 많은 자료가 티스토리 혹은...","categories": ["obsidian"],
        "tags": ["UE5","UnrealEngine5","Fresnel","물 셰이더","물리 기반 렌더링","쉐이더 그래프","반사 효과","UnrealEngine","Shader","물리 엔진"],
        "url": "/obsidian/Vercel%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-Obsidian-Digital-Garden-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "[UE5] 프레넬을 활용한 현실감 있는 물 셰이더 만들기",
        "excerpt":"시작하기 언리얼을 이용해서 프로젝트를 시작했는데 컨셉은 청소기를 통해 물체들을 빨아들이는 건데 그 중에서 물같은 유체도 포함된다. 팀원들에게 부탁하기에는 다들 바빠보여서 이번 기회에 공부할겸 한번 직접 제작해 볼까 한다. Fresnel 프레넬 이란? 프레넬이란 모든 빛은 매질(media)에 따라 반사, 흡수, 굴절을 하게 되는데 이 프레넬 공식을 통해 빛의 움직을 계산한다. 이를 사용하면...","categories": ["ue5"],
        "tags": ["UE5","UnrealEngine5","Fresnel","물 셰이더","물리 기반 렌더링","쉐이더 그래프","반사 효과","UnrealEngine","Shader","물리 엔진"],
        "url": "/ue5/%EC%96%B8%EB%A6%AC%EC%96%BC-%EB%AC%BC%EC%85%B0%EC%9D%B4%EB%8D%94-%EB%B0%8F-%ED%94%84%EB%A0%88%EB%84%AC/",
        "teaser": null
      }]
