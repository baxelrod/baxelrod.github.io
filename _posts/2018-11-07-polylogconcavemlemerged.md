---
#permalink: /posts/
title: "A Polynomial Time Algorithm for Log-Concave Maximum Likelihood via Locally Exponential Families [merged]"

author_profile: true
#path: "/posts/"
type: posts

excerpt: "An algorithm to compute the log-concave MLE in time polynomial in number of samples and dimension that uses the local exponentiality of tent-distributions."
tags: [algorithms, estimation, log-concave, locally-exponential]
ispublication: true
imagelocation: /assets/images/tentsubdivision.png
pdflocation: /pdfs/poly-mle-marged-arxiv.pdf
venue: NeurIPS 2019
---
## Abstract
We consider the problem of computing the maximum likelihood multivariate log-concave distribution for a set of points. Specifically, we present an algorithm which, given \\(n\\) points in \\(\mathbb R^d\\) and an accuracy parameter \\(\epsilon >0 \\), runs in time \\(\mathrm{poly}(n,d,1/\epsilon)\\), and returns a log-concave distribution which, with high probability, has the property that the likelihood of the n points under the returned distribution is at most an additive ϵ less than the maximum likelihood that could be achieved via any log-concave distribution. This is the first computationally efficient (polynomial time) algorithm for this fundamental and practically important task. Our algorithm rests on a novel connection with exponential families: the maximum likelihood log-concave distribution belongs to a class of structured distributions which, while not an exponential family, "locally" possesses key properties of exponential families. This connection then allows the problem of computing the log-concave maximum likelihood distribution to be formulated as a convex optimization problem, and solved via an approximate first-order method. Efficiently approximating the (sub) gradients of the objective function of this optimization problem is quite delicate, and is the main technical challenge in this work. 

## Main Idea
The solution to a log-concave MLE problem is always a distribution whose log-density is a polytope with corners at the observed points \\(X_1,...,X_n\\). These "tent-distributions" are distributions on the boundary of log-concavity that don't waste density on points outside \\(X_1,...,X_n\\).

In this paper we show that tent-distributions are "locally-exponential". That is, sufficiently small balls in parameter-space always form an exponential family. In fact, tent distributions can be partitioned into a finite collection of exponential families where each exponential family corresponds to a regular subdivision of \\(X_1,...,X_n\\). We also show a reduction from the log-concave MLE problem to the tent-distribution MLE problem.

We also show that being locally-exponential and satisfying a regularity condition is sufficient to guarantee that a standard gradient descent based algorithm can be used to solve the tent-distribution maximum likelihood problem.

This paper is a merged version of <https://arxiv.org/abs/1812.05524> and <https://arxiv.org/abs/1811.03204>
