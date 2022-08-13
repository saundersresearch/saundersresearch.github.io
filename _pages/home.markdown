---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: splash
author_profile: true
title: Home
permalink: /
splash_title: My name is Adam.
excerpt: I do medical image processing research.
header:
    overlay_image: /assets/images/header_small.jpg
feature_row:
  - image_path: /assets/images/frontier_selfie_square.jpg
    alt: "Frontier Selfie"
    title: "About Me"
    excerpt: "I am an electrical engineering student at the University of Dayton. I love learning and challenging myself to grow, and that's why I am to become a researcher."
    url: /about/
    btn_label: "Learn more"
    btn_class: "btn--info"
  - image_path: /assets/images/tumor_canvas.jpg
    alt: "tumor patch canvas"
    image_caption: "Generated using [CLAM](https://github.com/mahmoodlab/CLAM) and [CAMELYON16](https://camelyon16.grand-challenge.org/)"
    title: "My Research"
    excerpt: "My research experience includes using machine learning to classify whole-slide images, and I am working on developing super-resolution algorithms for diabetic retinopathy eye scans."
    url: "/research/"
    btn_label: "Learn more"
    btn_class: "btn--info"
  - image_path: /assets/images/whiteboard_square.jpg
    title: "Online CV"
    excerpt: "Learn more about my work and research experience, as well as what skills I have to offer."
    url: "/cv/"
    btn_label: "Learn more"
    btn_class: "btn--info"
---

{% include feature_row %}

<center>
<h1>Connect with Me</h1>
<p><a href="/contact/" class="btn btn--info">Contact Me</a></p>
</center>