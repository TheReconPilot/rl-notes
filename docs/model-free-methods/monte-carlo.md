---
title: Monte-Carlo Methods
sidebar_position: 1
---

# Monte-Carlo Methods

## The Problem with Model-based methods

If we know the model and the probabilities $P(s', r|s, a)$, we can use dynamic programming and optimality equations in some iteration scheme to get a good policy.

However, here's the thing. In many situations, **the probabilities $P(s', r| s, a)$ are not known**. This is the case with many realistic scenarios.

Our methods till now fail because they rely on the knowledge of these probabilities. So, we need to find ways to learn a policy without them.

We have MDP trajectories, which are sequences of:
- states ($s$)
- actions ($a$)
- rewards ($r$)

Using these, we can learn the state value and action value functions $V(s)$ and $Q(s, a)$.

Among these, $V(s)$ requires the knowledge of $P(s' | s, a)$. So, an approach would be to use action values.

In Policy Improvement, we saw that 

$$
\large
\pi(s) : \argmax_{a} Q(s, a)
$$

Just to recap, action value $Q(s, a)$ is the expected return (total reward) $G$ the agent gets from state $s$ by taking action $a$ and following policy $\pi$ from the next state.

## Monte-Carlo

The idea of Monte-Carlo is simple.

- Sample all trajectories containing particular $(s, a)$
- Estimate $G(s, a)$ for each trajectory
- Average them to get expectation

In Monte-Carlo methods, we follow the overall schema of *generalized policy iteration (GPI)*, which involves interaction processes of policy evaluation and policy improvement.

Monte-Carlo methods provide an alternative policy evaluation process. Rather than use a model to compute the value of each state, we simply average many returns that start in the state.