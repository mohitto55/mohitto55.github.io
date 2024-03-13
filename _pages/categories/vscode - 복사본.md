---
title: "Jira"
layout: jira
permalink: /jira
---


{% assign posts = site.categories.jira %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}