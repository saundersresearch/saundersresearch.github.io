---
title: Research
permalink: /research/
---

Currently, my research focuses on applying deep learning algorithms to medical image processing. During the summer of 2022, I performed research at Oak Ridge National Laboratory with the [Multimodal Data Analytics Group](https://www.ornl.gov/group/multimodal-data-analytics). During the school year, I perform research under the mentorship of [Dr. Russell Hardie](https://udayton.edu/directory/engineering/electrical_and_computer/hardie_russell.php) at the University of Dayton.

# Whole-slide imaging and multiple-instance learning (Oak Ridge National Laboratory)

<a href="/assets/pdf/suli_poster.pdf">
![2022 SULI Poster](/assets/images/suli_poster_small.jpg)</a> Winner of Best Poster in Computing and Computational Sciences Directorate at the 2022 ORNL Summer Intern Symposium 
{: style="text-align: center; font-size:0.7em;"}

Whole-slide imaging is a relatively new imaging modality that allows cancer pathologists to analyze tissue samples digitally instead of on glass slides. This change allows for the application of machine learning methods. However, due to the gigapixel-scale resolution required for whole-slide imaging, designing machine learning models is very difficult. Our research focuses on multiple-instance learning, a technique where we break the image into many smaller patches and use inferences from the patches to classify the entire image. 

During my intership at ORNL, we took advantage of [Summit](https://www.olcf.ornl.gov/summit/), one of the world's fastest supercomputers, to train and analyze deep learning models on a scale that would be unattainable without the power of high performance computing. 

**Publications**
* _A comparison of histopathology imaging comprehension algorithms based on multiple instance learning._ **Adam Saunders,** Sajal Dash, Aristeidis Tsaris, Hong-Jun Yoon. SPIE Medical Imaging, February 2023.

* _Ensemble learning of attention-based models for whole-slide imaging comprehension._ Hong-Jun Yoon, **Adam Saunders,** Folami Alamudun, Sajal Dash, Jacob Hinkle, and Aristeidis Tsaris. Computational Approaches for Cancer Workshop (CAFCW22), November 2022.

# Diabetic retinopathy and deep learning algorithms (University of Dayton)

Diabetic retinopathy is a disease common in diabetics that can lead to blindness if left undiagnosed and untreated. Diagnosis can be tedious, as ophthalmologists must analyze fine details from fundus images of the eyes. However, deep learning algorithms can automate this process. However, many deep learning algorithms use small images sizes as inputs, while much larger images are available. We can improve computer-aided detection systems for diabetic retinopathy by developing algorithms that utilize more of the available high resolution of the fundus images. We focus on image processing algorithms and transformations that fit more high-resolution content into a smaller image size.

**Publications**
* [Honors thesis] _Methods for exploiting high-resolution imagery for deep learning-based diabetic retinopathy detection and grading._