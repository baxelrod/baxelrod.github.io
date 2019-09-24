---
#permalink: /posts/
title: "Near-optimal Approximate Discrete and Continuous Submodular Function Minimization"

author_profile: true
#path: "/posts/"
type: posts

excerpt: "Approximate Submodular Function Minimization"
tags: [discrete optimization]
ispublication: true
imagelocation: /assets/images/tentsubdivision.png
pdflocation: /pdfs/submodular-approx.pdf
venue: SODA 2020
---
## Abstract
In this paper we provide improved running times and oracle complexities for approximately minimizing a submodular function. Our main result is a randomized algorithm, which given any submodular function defined on \\(n\\)-elements with range \\([−1,1]\\), computes an \\(\epsilon\\)-additive approximate minimizer in \\(\widetilde O(n/\epsilon^2)\\) oracle evaluations with high probability. This improves over the \\(\widetilde O(n^{5/3}/\epsilon^2)\\) oracle evaluation algorithm of Chakrabarty et al.(STOC 2017) and the \\(\widetilde O(n^{3/2}/\epsilon^2)\\) oracle evaluation algorithm of Hamoudiet al. Further, we leverage a generalization of this result to obtain efficient algorithms for minimizing abroad class of nonconvex functions. For any function with domain \\([0,1]^n \\) that satisfies \\(\frac{\partial x_i}{\partial x_j} \le 0\\) for all \\(i \neq j\\) and is L-Lipschitz with respect to the \\(\ell_\infty\\)-norm we give an algorithm that computes an \\(\epsilon\\)-additive approximate minimizer with \\(\widetilde O(n·poly(L/\epsilon))\\) function evaluation with high probability.

<!-- ## Main Idea -->
