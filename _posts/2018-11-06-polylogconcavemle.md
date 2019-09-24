---
#permalink: /posts/
title: "An Efficient Algorithm For High-Dimensional Log-Concave Maximum Likelihood [original]"

author_profile: true
#path: "/posts/"
type: posts

excerpt: "An algorithm to compute the log-concave MLE in time polynomial in number of samples and dimension that uses the local exponentiality of tent-distributions."
tags: [algorithms, estimation, log-concave, locally-exponential]
ispublication: true
imagelocation: /assets/images/tentsubdivision.png
pdflocation: /pdfs/poly-mle.pdf
venue:
---
## Abstract
The log-concave maximum likelihood estimator (MLE) problem answers: for a set of points \\(X_1,...X_n \in \mathbb R^d\\), which log-concave density maximizes their likelihood? We present a characterization of the log-concave MLE that leads to an algorithm with runtime \\(poly(n,d, \frac 1 \epsilon,r)\\) to compute a log-concave distribution whose log-likelihood is at most \\(\epsilon\\) less than that of the MLE, and \\(r\\) is parameter of the problem that is bounded by the \\(\ell_2\\) norm of the vector of log-likelihoods the MLE evaluated at \\(X_1,...,X_n\\).



## Main Idea
The solution to a log-concave MLE problem is always a distribution whose log-density is a polytope with corners at the observed points \\(X_1,...,X_n\\). These "tent-distributions" are distributions on the boundary of log-concavity that don't waste density on points outside \\(X_1,...,X_n\\).

In this paper we show that tent-distributions are "locally-exponential". That is, sufficiently small balls in parameter-space always form an exponential family. In fact, tent distributions can be partitioned into a finite collection of exponential families where each exponential family corresponds to a regular subdivision of \\(X_1,...,X_n\\). We also show a reduction from the log-concave MLE problem to the tent-distribution MLE problem.

We also show that being locally-exponential and satisfying a regularity condition is sufficient to guarantee that a standard gradient descent based algorithm can be used to solve the tent-distribution maximum likelihood problem.
