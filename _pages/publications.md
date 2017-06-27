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
|{{ post.title }}  | {{post.venue}}| [PDF]({{post.pdflocation}}) |[Publication Page]({{ post.url }})  |{% endif %}{% endfor %}
