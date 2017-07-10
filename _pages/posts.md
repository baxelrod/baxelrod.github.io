---
permalink: /posts/
title: "Posts"

author_profile: true
path: "/posts/"
layout: archive
author_profile: true
---

### Note
This is mainly a set of notes that I shared with other people but didn't put too much effort into. Please let me know if something is wrong.  

{% for post in site.posts %}
  {% if !post.ispublication%}
  {% else %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
