---
permalink: /publications/
title: "Publications"

author_profile: true
path: "/publications/"
layout: archive
author_profile: true
---
|Conference Papers
|---|---|{% for post in site.posts %}{% if post.title and post.ispublication%}
|{{ post.title }}  | {{post.venue}}| [PDF]({{site.baseurl | append: post.pdflocation}}) |[Informal Summary]({{ site.baseurl | append: post.url }})  |{% endif %}{% endfor %}
