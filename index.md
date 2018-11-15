---
layout: archive 
author_profile: true
---

|Conference and Journal Papers
|---|---|{% for post in site.posts %}{% if post.title and post.ispublication%}
|{{ post.title }}  | {{post.venue}}| [PDF]({{site.baseurl | append: post.pdflocation}}) |[Informal Summary]({{ site.baseurl | append: post.url }})  |{% endif %}{% endfor %}

Brian Axelrod's masters thesis, done under the supervision of [Leslie Pack Kaelbling](https://people.csail.mit.edu/lpk/) and [Tomás Lozano-Pérez](https://people.csail.mit.edu/tlp/) at MIT, can be found [here]({{site.baseurl | append: "/pdfs/baxelrod-meng-thesis.pdf"}}).
