---
title: "Vasculature-informed spatial smoothing of white matter functional magnetic resonance imaging"
permalink: /posts/vasculature-smoothing/
tags: 
    - Vanderbilt MASI Lab
    - SPIE Medical Imaging
    - fMRI
excerpt: We developed a method for adaptive spatial smoothing based on the vasculature in the brain.
---

![Vasculature smoothing overview](/assets/images/journal_headers/vss_graphical_abstract.png){: style="display:block; margin-left:auto; margin-right:auto"} 
With our adaptive vasculature smoothing, we are able to identify more anatomically-informed independent components from fMRI data.
{: style="text-align: center; font-size:0.7em;"}

**Adam M. Saunders**, Michael E. Kim, Kurt G. Schilling, John C. Gore, Bennett Papers	A. Landman, and Yurui Gao. Vasculature-informed spatial smoothing of white matter functional magnetic resonance imaging. SPIE Medical Imaging: Image Processing, February 2025. [[doi: 10.1117/12.3047240]](https://doi.org/10.1117/12.3047240). **Robert F. Wagner All-Conference Best Student Paper Finalist.**

# Abstract
> Blood oxygenation level-dependent (BOLD) signals in white matter in the brain are anisotropically oriented, so that typical isotropic Gaussian spatial smoothing (GSS) of functional magnetic resonance images (fMRI) blurs across anatomical distributions. Abramian et al. developed a graph signal processing approach to smooth fMRI data along white matter fibers using diffusion MRI (diffusion-informed spatial smoothing, DSS). BOLD signals are modulated by the volume and oxygenation of blood carried by the vasculature, so we extend this method to provide vasculature-informed spatial smoothing (VSS). We collected susceptibility-weighted images and applied a Frangi filter to identify the peak vasculature direction in each voxel, alongside co-registered diffusion MRI and resting-state fMRI, weighting the VSS graph by the agreement of the vasculature directions aligned onto the graph’s edges. We acquired resting-state fMRI at 7T using a repetition time of 1.5 seconds and 400 time points. Applying the DSS and VSS filters significantly increased the local functional connectivity measured using regional homogeneity (ReHo) compared to GSS (𝑝 < 0.01 using a paired t-test), but not when comparing DSS and VSS (p = 0.06). Independent component analysis resulted in less noisy components that agree better with labels from a white matter atlas with a significantly higher Dice score from the VSS filter compared to GSS (p < 0.05 using the Mann-Whitney U-test), and the VSS filter and DSS filter performed comparably (p = 0.06). In this pilot analysis, we find that fMRI data smoothed using VSS are comparable to results generated using DSS. The filtering code is available online [(https://github.com/MASILab/vss_fmri)](https://github.com/MASILab/vss_fmri).