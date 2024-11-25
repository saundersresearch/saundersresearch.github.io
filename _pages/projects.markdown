---
title: Undergraduate Projects
permalink: /projects/
toc: true
toc_label: "Contents"
toc_icon: None
---

Here's some highlights of cool projects I've worked on while a student at the University of Dayton.

## Diabetic retinopathy and deep learning algorithms 

<a href="https://ecommons.udayton.edu/uhp_theses/423/">
![TED Talk-style Presentation](/assets/images/ted_talk.jfif)</a> Presented as a featured honors thesis at the 2023 Stander Symposium at the University of Dayton
{: style="text-align: center; font-size:0.7em;"}

Diabetic retinopathy is a disease common in diabetics that can lead to blindness if left undiagnosed and untreated. Diagnosis can be tedious, as ophthalmologists must analyze fine details from fundus images of the eyes. However, deep learning algorithms can automate this process. However, many deep learning algorithms use small images sizes as inputs, while much larger images are available. We can improve computer-aided detection systems for diabetic retinopathy by developing algorithms that utilize more of the available high resolution of the fundus images. We focus on image processing algorithms and transformations that fit more high-resolution content into a smaller image size.

This work was presented at the Stander Symposium as an undergraduate honors thesis, available [here](https://ecommons.udayton.edu/uhp_theses/423/). Additionally, this research was presented in a TED Talk-style format as one of four featured honors thesis writers. I performed this research under the mentorship of [Dr. Russell Hardie](https://udayton.edu/directory/engineering/electrical_and_computer/hardie_russell.php) at the University of Dayton.

Adam Saunders. [Methods for exploiting high-resolution imagery for deep learning-based diabetic retinopathy detection and grading.](https://ecommons.udayton.edu/uhp_theses/423/) University of Dayton Honors Theses, April 2023.

## Music therapy app for pain management
![MANTRA](/assets/images/mantra_screenshot.png){: style="display:block; margin-left:auto; margin-right:auto"} 
A screenshot from MANTRA displaying a client's baseline pain score, current pain score, and a live display of emotion using the valence-arousal model.
{: style="text-align: center; font-size:0.7em;"}

MANTRA (Music-Assisted Neurotherapy Response and Assessment) is a mobile application designed to assist music therapists and clients with pain management. The app interfaces with an EEG headset over Bluetooth to generate a pain score. We generate the pain score using a neural network, and the app takes in feedback from users to update the pain score generation algorithm over time.

![We Soar campaign launch screenshot](/assets/images/we_soar_video.png){: style="display:block; margin-left:auto; margin-right:auto"} 
Our capstone project was featured in the [We Soar](https://youtu.be/FgrBV8P1mJo) campaign launch video at the University of Dayton
{: style="text-align: center; font-size:0.7em;"}

This app was developed as a part of the ECE 432L capstone course at the University of Dayton. Please contact [Dr. Theus Aspiras](https://udayton.edu/directory/engineering/electrical_and_computer/aspiras-theus.php) with any questions.

## Super-resolution from video frames
![Reference frame](/assets/images/sr_interp/ref.png)
![Super-resolution image](/assets/images/sr_interp/sr_after_filter.png){: style="display:block; margin-left:auto; margin-right:auto"} 
The reference frame and super-resolution image generated from several frames of the video.
{: style="text-align: center; font-size:0.7em;"}

As a part of the University of Dayton ECE 563 Image Processing course, I implemented an algorithm that turned 12 frames of a video into a single super-resolution image at three times the original resolution of each frame. We use non-uniform interpolation to obtain the super-resolution image. First, we apply shift registration to obtain the subpixel-level shifts between the frames. We then use these shifts to interpolate between the values of the non-uniform samples of the underlying high-resolution image. After producing the super-resolution image, we use a Wiener filter to reduce the blurring introduced by the diffraction of the camera aperture and the spatial integration of light over multiple pixels in the detector.

![Regions of interest](/assets/images/sr_interp/roi.png){: style="display:block; margin-left:auto; margin-right:auto"} 
Regions of interest (ROI) of interpolated reference frame and super-resolution image before and after Wiener filter
{: style="text-align: center; font-size:0.7em;"}

The super-resolution algorithm is successful in producing a higher-resolution image where the text is clearer and high-frequency components suffer from less aliasing. Additionally, the Wiener filter helps reduce blurring.

## Image restoration after optical turbulence
In the University of Dayton ECE 563 Image Processing course, I got to design and implement a Wiener filter for image restoration. When capturing an image over a long distance, atmospheric optical turbulence can warp the image due to the different indices of refraction of light in hot and cold pockets of air. As a solution, we average several digital images over time. The resulting image is very blurry, but we can restore the image using a Wiener filter. We develop the Wiener filter using an observation model of long-exposure atmospheric blur. The resulting image is much clearer than the original image.

![Original image](/assets/images/wiener_restoration/original_img.png)
![Restored image](/assets/images/wiener_restoration/filtered_img.png){: style="display:block; margin-left:auto; margin-right:auto"} 
The original image and restored image after apply the Wiener filter
{: style="text-align: center; font-size:0.7em;"}

## Super-resolution of diabetic retinopathy images
For the final project of the ECE 477 Artificial Neural Networks course at the University of Dayton, I applied an artificial neural network to a real-life issue. I chose to implement a radial basis network (RBF) for super-resolution, similar to the one described in [this article](http://journal.bit.edu.cn/jbit/en/article/id/20040206). We apply this network to a collection of diabetic retinopathy images, with labels indicating the severity of diabetic retinopathy. We simulate a low-resolution image by converting the image to grayscale, applying a Gaussian blur, downsampling the image and adding in some Gaussian noise. We then resize the low-resolution image to the size of the high-resolution image using bicubic interpolation.

The input to the RBF network is a 5 by 5 sliding window across the pixels. We take these 25 pixels and input them to the RBF. The RBF then produces a single super-resolution pixel for the center of this window. We train the network using several images, and we train a separate network for each class of diabetic retinopathy severity.

![RBF network](/assets/images/sr_rbf/rbf_network.png){: style="display:block; margin-left:auto; margin-right:auto"} 
The RBF network architecture
{: style="text-align: center; font-size:0.7em;"}

The network is successful at producing super-resolution images with a higher peak signal-to-noise ratio and a lower mean square error compared to the low-resolution images for all classes. The full report submitted for the class is available [here](/assets/pdf/superresolution_dr_rbf_network.pdf).

![RBF network results](/assets/images/sr_rbf/results.png){: style="display:block; margin-left:auto; margin-right:auto"} 
Example results for a diabetic retinopathy image
{: style="text-align: center; font-size:0.7em;"}