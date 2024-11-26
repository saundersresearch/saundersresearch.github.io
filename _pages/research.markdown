---
title: Research
permalink: /research/
---

I study medical imaging, with a focus in magnetic resonance images (MRI) in the brain. MRI is an incredibly powerful and flexible imaging modality, allowing us to highlight different features by tuning the parameters under which we acquire the image.

Unfortunately, clinically-acquired MRI varies highly based on the site the image was collected at, scanner hardware, and sequence parameters used to generate the image. Acquiring multiple images with different contrasts give us the most complete picture, but we rarely have access to high-quality, multi-modal images for each subject.

In my research, I use AI to impute or estimate that desired data from what we have available. For example, we can use a patch-based deep learning model to correct biases between quantitative imaging methods:

![Quantitative T1 bias correction model](/assets/images/journal_headers/mp2rage_model.png){: style="display:block; margin-left:auto; margin-right:auto"} 
We found a bias between two methods for mapping quantitative values of T1 from MRI, and we corrected that bias with a patch-based deep learning model.
{: style="text-align: center; font-size:0.7em;"}