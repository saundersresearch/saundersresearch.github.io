---
title: "DeepFixel: Crossing white matter fiber identification through spherical convolutional neural networks"
tags: 
    - Vanderbilt MASI Lab
    - SPIE Medical Imaging
    - Crossing fibers
category:
    - Research
excerpt: We developed DeepFixel, a deep learning approach for separating crossing white matter fibers in diffusion MRI data.
---

![DeepFixel graphical abstract](/assets/images/journal_headers/deepfixel.png){: style="display:block; margin-left:auto; margin-right:auto"} 
DeepFixel is a deep learning approach for separating crossing white matter fibers in diffusion MRI data.
{: style="text-align: center; font-size:0.7em;"}

**Adam M. Saunders**, Lucas W. Remedios, Elyssa M. McMaster, Jongyeon Yoon, Gaurav Rudravaram, Adam Sadriddinov, Praitayini Kanakaraj, Bennett A. Landman, and Adam W. Anderson. DeepFixel: Crossing white matter fiber identification through spherical convolutional neural networks. SPIE Medical Imaging: Clinical and Biomedical Imaging, February 2026. [[https://arxiv.org/abs/2511.03893]](https://arxiv.org/abs/2511.03893).

# Abstract
> Diffusion-weighted magnetic resonance imaging allows for reconstruction of models for structural connectivity in the brain, such as fiber orientation distribution functions (ODFs) that describe the distribution, direction, and volume of white matter fiber bundles in a voxel. Crossing white matter fibers in voxels complicate analysis and can lead to errors in downstream tasks like tractography. We introduce one option for separating fiber ODFs by performing a nonlinear optimization to fit ODFs to the given data and penalizing terms that are not symmetric about the axis of the fiber. However, this optimization is non-convex and computationally infeasible across an entire image (approximately 1.01 × 10^6 ms per voxel). We introduce DeepFixel, a spherical convolutional neural network approximation for this nonlinear optimization. We model the probability distribution of fibers as a spherical mesh with higher angular resolution than a truncated spherical harmonic representation. To validate DeepFixel, we compare to the nonlinear optimization and a fixel-based separation algorithm of two-fiber and three-fiber ODFs. The median angular correlation coefficient is 1 (interquartile range of 0.00) using the nonlinear optimization algorithm, 0.988 (0.317) using a fiber bundle elements or “fixel”-based separation algorithm, and 0.973 (0.004) using DeepFixel. DeepFixel is more computationally efficient than the non-convex optimization (0.32 ms per voxel). DeepFixel’s spherical mesh representation is successful at disentangling at smaller angular separations and smaller volume fractions than the fixel-based separation algorithm.