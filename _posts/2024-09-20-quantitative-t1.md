---
title: "Comparison and Calibration of MP2RAGE Quantitative T1 Values to Multi-TI Inversion Recovery T1 Values"
permalink: /posts/quantitative-t1/
tags: 
    - Vanderbilt MASI Lab
    - Preprint
excerpt: We found and corrected a bias in quantitative T1 methods using a patch-based deep learning model.
---

![Quantitative T1 bias correction model](/assets/images/journal_headers/mp2rage_model.png){: style="display:block; margin-left:auto; margin-right:auto"} 
We found a bias between two methods for mapping quantitative values of T1 from MRI, and we corrected that bias with a patch-based deep learning model.
{: style="text-align: center; font-size:0.7em;"}

**Adam M. Saunders**, Michael E. Kim, Chenyu Gao, Lucas W. Remedios,  Aravind R. Krishnan, Kurt G. Schilling, Kristin P. O’Grady, Seth A. Smith, and Bennett A. Landman. Comparison and calibration of MP2RAGE quantitative T1 values to multi-TI inversion recovery T1 values. Submitted to _Magnetic Resonance Imaging_. [[arXiv:2409.13145]](https://arxiv.org/abs/2409.13145)

# Abstract
> While typical qualitative T1-weighted magnetic resonance images reflect scanner and protocol differences, quantitative T1 mapping aims to measure T1 independent of these effects. Changes in T1 in the brain reflect chemical and physical changes in brain tissue, such as the demyelination of axons in multiple sclerosis. Magnetization-prepared two rapid acquisition gradient echo (MP2RAGE) is an acquisition protocol that allows for efficient T1 mapping with a much lower scan time per slice compared to multi-TI inversion recovery (IR) protocols. We collect and register B1-corrected MP2RAGE acquisitions with an additional inversion time (MP3RAGE) alongside multi-TI selective inversion recovery acquisitions for four subjects and find a tissue-dependent bias between the derived T1 values. We train a patch-based ResNet-18 to calibrate the MP3RAGE T1 values to the multi-TI IR T1 values, incorporating the standard deviation of T1 calculated from a Monte Carlo simulation as an additional channel. Across four folds, the error between the MP2RAGE and T1 maps varies substantially (RMSE in white matter: 0.30 +/- 0.01 seconds, subcortical gray matter: 0.26 +/- 0.02 seconds, cortical gray matter: 0.36 +/- 0.02 seconds). Our network reduces the RMSE significantly (RMSE in white matter: 0.11 +/- 0.02 seconds, subcortical gray matter: 0.10 +/- 0.02 seconds, cortical gray matter: 0.17 +/- 0.03 seconds). Adding the standard deviation channel does not substantially change the RMSE. Using limited paired training data from both sequences, we can reduce the error between quantitative imaging methods and calibrate to one of the protocols with a neural network.