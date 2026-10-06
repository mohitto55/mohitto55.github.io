---
title: "Books"
layout: single
permalink: /books/
author_profile: true
---

{% assign book_posts = site.posts | where_exp: "p", "p.series" %}
{% assign books = book_posts | group_by: "series" | sort: "name" %}
{% if books.size == 0 %}
<p>아직 정리한 책이 없습니다.</p>
{% endif %}
{% for book in books %}
{% assign items = book.items | sort: "date" | sort: "series_order", "last" %}
<section class="series-book" id="{{ book.name | slugify: 'pretty' }}">
<h2 class="series-book__title">{{ book.name }} <span class="series-nav__count">{{ book.size }}편</span></h2>
<ol class="series-nav__list">
{% for p in items %}
<li><a href="{{ p.url | relative_url }}">{{ p.title }}</a> <small>{{ p.date | date: "%Y-%m-%d" }}</small></li>
{% endfor %}
</ol>
</section>
{% endfor %}
