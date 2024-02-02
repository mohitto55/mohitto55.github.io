---
title : "[Git Blog] 사이드 카테고리 추가하기"
categories: gitblog
tags: [minimal-mistake, Jekyll, Blog]
---
좌측 사이드바에 카테고리를 넣어볼 것이다.

## 1. 카테고리 목록 정하기
`_data/navigation.yml`에서 하단의 내용을 넣고 한글로 된 부분을 수정한다.
```
sidebar-category:
  - title: "타이틀"
    children:
      - title: "표시될제목"
        url: "/주소"
```

## 2. 카테고리 포스트 목록 페이지 생성
`_page`로가서 `catagories`라는 폴더를 만들고 안에 카테고리 요소당 하나씩 `*.md`파일을 생성해 준다. 그리고 아래 요소들을 수정한다.
- title: 페이지 제목
- layout:페이지에서 사용할 layout
- permalink: navigation.yml에서 설정한 url
- 탐색할카테고리: navigation.yml 설정한 category


~~~html
---
title: "페이지 이름"
layout: archive
permalink: 링크
---
{% raw %} {% assign posts = site.categories.탐색할카테고리 %}
{% for post in posts %}
  {% include custom-archive-single.html type=entries_layout %}
{% endfor %} {% endraw %}
~~~

## 3.포스트 수 표시
`_includes/nav_list`에 아래 내용을 모두 덮어쓴다.
```
{% raw %}{% assign navigation = site.data.navigation[include.nav] %}

<nav class="nav__list">
  {% if page.sidebar.title %}<h3 class="nav__title" style="padding-left: 0;">{{ page.sidebar.title }}</h3>{% endif %}
  <input id="ac-toc" name="accordion-toc" type="checkbox" />
  <label for="ac-toc">{{ site.data.ui-text[site.locale].menu_label | default: "Toggle Menu" }}</label>
  <ul class="nav__items">
    {% for nav in navigation %}
      <li>
        {% if nav.url %}
          <a href="{{ nav.url | relative_url }}"><span class="nav__sub-title">{{ nav.title }}</span></a>
        {% else %}
          <span class="nav__sub-title">{{ nav.title }}</span>
        {% endif %}

        {% if nav.children != null %}
        <ul>
          {% for child in nav.children %}
          {% assign post_cnt = 0 %}
          {% for category in site.categories %}
            {% if category[0] == child.category  %}
                {% assign post_cnt = category[1].size %}
            {% endif %}
          {% endfor %}

            <li><a href="{{ child.url | relative_url }}"{% if child.url == page.url %} class="active"{% endif %}>{{ child.title }}({{ post_cnt }})</a></li>
          {% endfor %}
        </ul>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</nav> {% endraw %}
```

## 4.모든페이지 사이드바 적용
루트폴더에 있는 `config.yml`에서 sidebar 부분을 추가해준다.
```
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
      show_date: true
      sidebar: # 추가
        nav: "sidebar-category"
```

## 5.결과
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/12ef844b-9baa-4af1-8096-dd9c8ab1571c)
