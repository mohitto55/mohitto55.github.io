---
layout: archive
permalink: language
title: "Language"

author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.language %}
{% for post in posts %}
  {% include custom-archive-single.html type=entries_layout %}
{% endfor %}
