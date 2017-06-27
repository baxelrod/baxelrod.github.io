---
permalink: /posts/
title: "Posts"

author_profile: true
path: "/posts/"
layout: archive
author_profile: true
---

### Note
Old posts can be found on [www.axelbot.com](http://www.axelbot.com).

{% for post in site.posts %}
  {% if !post.ispublication%}
  {% else %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
