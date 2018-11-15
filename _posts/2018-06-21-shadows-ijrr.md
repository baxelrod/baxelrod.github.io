---
#permalink: /posts/
title: "Provably Safe Robot Navigation with Obstacle Uncertainty (Journal Version)"

author_profile: true
#path: "/posts/"
type: posts

excerpt: "This work examines how to bound random geometry. It shows how to compute confidance intervals for shapes and applies it to planning under uncertainty. It further develops the related mathematical tools in a way that is better motivated and easier to understand."
tags: [robotics, uncertainty, shadows, algorithms]
ispublication: true
imagelocation: /assets/images/ucp.png
pdflocation: /pdfs/ijrrshadows-final.pdf
venue: IJRR
---
## Abstract
As drones and autonomous cars become more widespread it is becoming increasingly important that robots can operate safely under realistic conditions. The noisy information fed into real systems means that robots must use estimates of the environment to plan navigation. Efficiently guaranteeing that the resulting motion plans are safe under these circumstances has proved difficult. We examine how to guarantee that a trajectory or policy is safe with only imperfect observations of the environment. We examine the implications of various mathematical formalisms of safety and arrive at a mathematical notion of safety of a long-term execution, even when conditioned on observational information. We present efficient algorithms that can prove that trajectories or policies are safe with much tighter bounds than in previous work. Notably, the complexity of the environment does not affect our methods ability to evaluate if a trajectory or policy is safe. We then use these safety checking methods to design a safe variant of the RRT planning algorithm.


## Main Idea

In order for robots to operate safely and efficiently in the presence of noisy sensor data robots must be able to quantify the accuracy of their estimates of the environment. Especially with low-cost, noisy sensors todays robots can run into walls and other obstacles because they are unable to quantify how far they should stay away from the noisy estimates of these obstacles.
![A robot that didn't reason about obstacle uncertainty](https://what-if.xkcd.com/imgs/a/5/robot_apocalypse_door.png)

This paper formalizes the notion of a "shadow" as a generalization of confidence intervals that can be used to analyze uncertain shapes. The math developed to derive shadows ends up being useful for more than just providing formal guarantees. It suggests an algorithm for bounding the probability of collision for a given trajectory. This algorithm preserves strong theoretical guarantees, runs exponentially faster than its monte-carlo based equivalents, and fixes issues with previous ad-hoc versions of shadows that would cause excessively conservative behavior.

The math behind shadows turned out surprisingly beautiful and insightful and will be explored in greater depth in my thesis (coming soon!).


<!--![](https://what-if.xkcd.com/imgs/a/5/robot_apocalypse_comparison.png)-->
