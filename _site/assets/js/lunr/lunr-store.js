var store = [{
        "title": "[C#] 확장메서드 (Extension Method)",
        "excerpt":"간혹 프로그램을 작성하다 보면 특정 클래스에 메서드를 추가하고 싶은 경우가 있다. 그게 내가 만든 클래스라면 직접 파일을 열어서 추가하면 되지만 외부 라이브러리를 사용할 시 직접 수정하지 못하게 막아놓은 경우도 있을 것이다. 그럴 경우에 사용하면 되는 것이 확장메서드이다.확장메서드를 사용할 시 클래스 내부가 아닌 외부에서 메서드를 정의함으로서 기존 형식의 코드변경 없이 외부에서...","categories": ["cs"],
        "tags": ["C#","linq","확장메서드"],
        "url": "/cs/C-%ED%99%95%EC%9E%A5%EB%A9%94%EC%84%9C%EB%93%9C/",
        "teaser": null
      },{
        "title": "[Git Blog] 깃허브로 이사",
        "excerpt":"첫 깃허브 블로그 개설  원래는 티스토리에서 글을 작성하였다. 처음 입문하기에 더할나위 없는 블로그였고 잘 사용하고 있었으나 옵시디언을 내 입맛대로 꾸미다가 문득 블로그도 커스터마이징을 해서 꾸며보고 싶었졌다.  옵시디언을 하면서 마크다운 문법에 꽤나 익숙해져서 보다 자유도 높은 깃허브로 이사를 오게됐다.  ","categories": ["gitblog"],
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
        "title": "[UE5] Enhanced Input",
        "excerpt":"EnhancedInput? EnhancedInput 시스템은 Unreal Engine5에 등장한 새로운 Input 시스템으로 기존 InputSystem 보다 더 나은 기능 및 확장성을 가졌다. 이 포스팅에서는 코드로 EngancedInput를 사용하는 법을 작성할 것이다. EnhancedInput 모듈준비 EnhancedInput은 코드로 작성할 수 있다. EnhancedInput 시스템을 사용하기 전에 먼저 모듈을 추가시켜줘야 한다. 1.모듈이란 UEnhancedInputLocalPlayerSubSystem는 EnhancedInputSubsystems.h 헤더 안에 있다 이 헤더를 쓰기...","categories": ["ue5"],
        "tags": ["UnrealEngine5","Actor","Component","C++"],
        "url": "/ue5/UE5-Enhanced-Input/",
        "teaser": null
      },{
        "title": "[Git Blog] jekyll에서 emoji사용하기",
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
      }]
