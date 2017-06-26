---
permalink: /publications/
title: "Publications"

author_profile: true
path: "/publications/"
layout: archive
author_profile: true
---
## subtitle?

| Title | Venue | PDF | additional info
|---|---|{% for post in site.posts %}{% if post.title and post.ispublication%}
|{{ post.title }}  | | [PDF]({{post.pdflocation}}) |[Click Here]({{ post.url }})  |{% endif %}{% endfor %}
