---
title: "Comparison and Calibration of MP2RAGE Quantitative T1 Values to Multi-TI Inversion Recovery T1 Values"
redirect_from: /posts/quantitative-t1/
tags: 
    - Vanderbilt MASI Lab
category:
    - Research
excerpt: We found and corrected a bias in quantitative T1 methods using a patch-based deep learning model.
---

![Quantitative T1 bias correction model](/assets/images/journal_headers/mp2rage_model.png){: style="display:block; margin-left:auto; margin-right:auto"} 
We found a bias between two methods for mapping quantitative values of T1 from MRI, and we corrected that bias with a patch-based deep learning model.
{: style="text-align: center; font-size:0.7em;"}

**Adam M. Saunders**, Michael E. Kim, Chenyu Gao, Lucas W. Remedios,  Aravind R. Krishnan, Kurt G. Schilling, Kristin P. O’Grady, Seth A. Smith, and Bennett A. Landman. Comparison and calibration of MP2RAGE quantitative T1 values to multi-TI inversion recovery T1 values. _Magnetic Resonance Imaging_, 117, 110322 (2025). [[doi:10.1016/j.mri.2025.110322]](https://doi.org/10.1016/j.mri.2025.110322).

# Abstract
> While typical qualitative T1-weighted magnetic resonance images reflect scanner and protocol differences, quantitative T1 mapping aims to measure T1 independent of these effects. Changes in T1 in the brain reflect structural changes in brain tissue. Magnetization-prepared two rapid acquisition gradient echo (MP2RAGE) is an acquisition protocol that allows for efficient T1 mapping with a much lower scan time per slab compared to multi-TI inversion recovery (IR) protocols. We collect and register B1-corrected MP2RAGE acquisitions with an additional inversion time (MP3RAGE) alongside multi-TI selective inversion recovery acquisitions for four subjects. We use a maximum a posteriori (MAP) T1 estimation method for both MP2RAGE and compare to typical point estimate MP2RAGE T1 mapping, finding no bias from MAP MP2RAGE but a sensitivity to B1 inhomogeneities with MAP MP3RAGE. We demonstrate a tissue-dependent bias between MAP MP2RAGE T1 estimates and the multi-TI inversion recovery T1 values. To correct this bias, we train a patch-based ResNet-18 to calibrate the MAP MP2RAGE T1 estimates to the multi-TI IR T1 values. Across four folds, our network reduces the RMSE significantly (white matter: from 0.30 +/- 0.01 seconds to 0.11 +/- 0.02 seconds, subcortical gray matter: from 0.26 +/- 0.02 seconds to 0.10 +/- 0.02 seconds, cortical gray matter: from 0.36 +/- 0.02 seconds to 0.17 +/- 0.03 seconds). Using limited paired training data from both sequences, we can reduce the error between quantitative imaging methods and calibrate to one of the protocols with a neural network.