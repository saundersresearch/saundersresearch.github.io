---
title: "A 4D atlas of diffusion-informed spatial smoothing windows for BOLD signal in white matter"
permalink: /posts/diffusion-smoothing/
tags: 
    - Vanderbilt MASI 
    - SPIE Medical Imaging
    - fMRI
category:
    - Research
excerpt: We developed an atlas for adaptive smoothing in the brain based on white matter tracts.
---

![Comparison of diffusion smoothing and traditional Gaussian smoothing](/assets/images/journal_headers/dss_graphical_abstract.png){: style="display:block; margin-left:auto; margin-right:auto"} 
Using our atlas, we can adaptively smooth functional MRI data based on white matter tracts, which better preserves the underlying signal present compared to traditional smoothing methods.
{: style="text-align: center; font-size:0.7em;"}

**Adam M. Saunders**, Gaurav Rudravaram, Nancy R. Newlin, Michael E. Kim, John C. Gore, Bennett A. Landman, and Yurui Gao. A 4D atlas of diffusion-informed spatial smoothing windows for BOLD signal in white maxtter. SPIE Medical Imaging: Image Processing, February 2025. [[doi:10.1117/12.3047240]](https://doi.org/10.1117/12.3047240).

# Abstract
> Typical methods for preprocessing functional magnetic resonance images (fMRI) involve applying isotropic Gaussian smoothing windows to denoise blood oxygenation level-dependent (BOLD) signals, a process which spatially smooths white matter signals that occur along anisotropically-oriented fibers. Abramian et al. have proposed diffusion-informed spatial smoothing (DSS) filters to smooth white matter in a physiologically-informed manner. However, these filters rely on paired diffusion MRI and fMRI data, which are not always available. Here, we create DSS windows for smoothing fMRI data in the white matter based on the Human Connectome Project Young Adult population-averaged atlas of fiber orientation distribution functions. We smooth fMRI data from 63 subjects using the atlas-based DSS windows and compare the results with fMRI data smoothed with isotropic Gaussian windows at 1.04 mm full-width half-max (FWHM) and 3 mm FWHM. Compared to isotropic Gaussian windows, the atlas-based DSS windows result in fMRI data with a significantly higher local functional connectivity measured with regional homogeneity (ReHo, p < 0.001). The DSS atlas results in biologically informed regions of interest identified through independent component analysis that more closely agree with regions from a diffusion MRI-based white matter atlas. The DSS atlas generated here allows for diffusion-informed smoothing of fMRI data when additional diffusion MRI data are not available. The DSS atlas and code are available online [(https://github.com/MASILab/dss_fmri_atlas)](https://github.com/MASILab/dss_fmri_atlas).
