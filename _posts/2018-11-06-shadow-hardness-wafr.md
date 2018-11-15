---
#permalink: /posts/
title: "Hardness of 3D Motion Planning Under Obstacle Uncertainty (WAFR 2018)"

author_profile: true
#path: "/posts/"
type: posts

excerpt: "This work quantifies the hardness of 3D motion planning with uncertain obstacles."
tags: [robotics, uncertainty, shadows, algorithms]
ispublication: true
imagelocation: /assets/images/ucp.png
pdflocation: /pdfs/shadow-hardness-wafr.pdf
venue: WAFR 2018
---
## Abstract
We consider the problem of motion planning in the presence
of uncertain obstacles, modeled as polytopes with Gaussian-distributed
faces (PGDF). A number of practical algorithms exist for motion planning
in the presence of known obstacles by constructing a graph using randomly
sampled vertices, then efficientlyciently searching the graph to find a collision-
free path.We show that such a class of algorithms is unlikely to be efficientlycient
in the domain with uncertain obstacles. In particular, we show that safe
3D motion planning among PGDF obstacle is NP-hard with respect to
the number of obstacles, and remains NP-hard after being restricted to
a graph. Our reduction is based on a path encoding of 3-SAT and uses
the risk of collision with an obstacle to encode the variable assignment.
This implies that, unlike in the known case, planning under uncertainty
is hard, even when given a graph containing the solution.


## Main Idea
This paper aims to answer "how much harder is motion planning under obstacle uncertainty than motion planning with known obstacles?" Even though the motion planning problem with known obstacles is known to be PSPACE-hard, we have many practically effective algorithms for generating motions plans. 

In light of this, how does one show computational hardness results that provide insight to the real hardness of the problem and guide the development of algorithms to solve it? Simply showing that the new problem is PSPACE-hard (or even a stronger result) would not provide any new information. 

We attempt to solve this problem by showing the following things:
1. Graph based methods for solving motion planning rely on the motion plan being captured in a graph of small size. If this graph can be identified, motion planning can be reduced to a shortest path problem which is easy to solve in polynomial time. We show that this method does **cannot** work with obstacle uncertainty. 
2. The reason that the above method works in the known obstacle case is that the system is memoryless. It does not matter how you got to a particular state. This does not hold true for the unknown obstacle case. We show how this property leads to the hardness result. In other words, motion planning with uncertainty is harder than motion planning with known obstacles because it matters which trajectory was chosen to get a configuration. 

The result relies on converting a 3SAT instance to a graph embedded in \(\mathbb R^3\) paired with a set of random obstacles. Navigation through the graph forces the robot to go through two stages. In the first the robot is forced to choose which obstacles it must go near. This corresponds to choosing an assignment of variables in the 3SAT. The second state can only be successfully navigated if the right path was chosen in the first stage. The above method relies on constructing the graph and random obstacles such that collisions between the first and second stages are correlated in just the right way. 

While the construction presented in this paper conforms to reasonable conditions (is robust to changing the obstacle distribution, requires only 3 dimensions and a point robot) all hope is not lost. The result suggests that it is really the long term interactions between collision probabilities that make the problem hard. It suggests several paths towards efficient planning with obstacle uncertainty:
1. Finding a locally optimal solution
2. Assuming the problem has limited long-term interactions between nodes in the graph. 


