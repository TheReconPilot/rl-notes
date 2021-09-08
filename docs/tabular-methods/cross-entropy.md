---
title: Cross Entropy Method
sidebar_position: 3
---

# Cross Entropy

## The Method

A tabular method for finding a good policy.

- Policy is a matrix: $\pi(a | s) = A_{s, a}$
- Initialize Policy with all actions having equal probabilities in each state

1. Sample $N$ sessions with this policy

2. Pick $M$ best sessions. We call them *elite*.

3. Compute new probabilities for these elite (state, action) pairs:

   $$
   \pi^{'}(a | s) = \frac{\sum\limits_{s_t, a_t \in \text{Elite}}[s_t=s][a_t=a]}{\sum\limits_{s_t\in \text{Elite}}[s_t=s]} = \frac{\text{Took $a$ at $s$}}{\text{Was at $s$}}\ (\text{among best $M$}) \\ \ \\
   \pi_{new}(a | s) = \alpha\ \pi^{'}(a | s) + (1 - \alpha)\ \pi(a | s)
   $$

   where $\alpha$ can be thought of as learning rate. The updated policy is a combination of the old and the one constructed with elite state/actions.

Repeat Steps 1-3 for a given number of times. 

<!-- ## Example: Taxi-v3

> There are **4 locations** (labeled by different letters) and your job is to pick up the passenger at one location and drop him off in another. You receive **+20 points** for a successful dropoff, and **lose 1 point** for every timestep it takes. There is also a **10 point penalty** for illegal pick-up and drop-off actions.
> 
> \- [Taxi-v3 | OpenAI Gym](https://gym.openai.com/envs/Taxi-v3/)
 -->
