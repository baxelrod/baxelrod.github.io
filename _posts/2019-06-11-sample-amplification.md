---
#permalink: /posts/
title: "Sample Amplification: Increasing Dataset Size even when Learning is Impossible"

author_profile: true
#path: "/posts/"
type: posts

excerpt: "Is generating new samples as hard as learning?"
tags: [sample amplification]
ispublication: true
imagelocation: /assets/images/tentsubdivision.png
pdflocation: /pdfs/sampleamplification.pdf
venue: ICML 2020
---
## Abstract
Given data drawn from an unknown distribution, \\(D\\), to what extent is it possible to "amplify" this dataset and faithfully output an even larger set of samples that appear to have been drawn from \\(D\\)?  
We formalize this question as follows:  an \\((n,m)\\) \emph{amplification procedure} takes as input \\(n\\) independent draws from an unknown distribution \\(D\\), and outputs a set of \\(m > n\\) "samples".  An amplification procedure is \emph{valid} if no algorithm can distinguish the set of \\(m\\) samples produced by the amplifier from a set of \\(m\\) independent draws from \\(D\\), with probability greater than \\(2/3\\).  Perhaps surprisingly, in many settings, a valid amplification procedure exists, even in the regime where the size of the input dataset, \\(n\\), is significantly less than what would be necessary to \emph{learn} distribution $D$ to non-trivial accuracy.  Specifically we consider two fundamental settings: the case where \\(D\\) is an arbitrary discrete distribution supported on \\(\le k\\) elements, and the case where \\(D\\) is a \\(d\\)-dimensional Gaussian with unknown mean, and fixed covariance matrix.  In the first case, we show that an \\(\left(n, n + \Theta(\frac{n}{\sqrt{k}})\right) \\) amplifier exists.   In particular, given \\(n=O(\sqrt{k})\\) samples from \\(D\\), one can output a set of \\(m=n+1\\) datapoints, whose total variation distance from the distribution of \\(m\\) i.i.d. draws from \\(D\\) is a small constant, despite the fact that one would need quadratically more data, \\(n=\Theta(k)\\), to \emph{learn} $D$ up to small constant total variation distance. In the Gaussian case, we show that an \\(\left(n,n+\Theta(\frac{n}{\sqrt{d}} )\right)\\) amplifier exists, even though learning the distribution to small constant total variation distance requires \\(\Theta(d))\\) samples.  In both the discrete  and Gaussian settings, we show that these results are tight, to constant factors.  Beyond these results, we formalize a number of curious directions for future research along this vein.

<!-- ## Main Idea -->


