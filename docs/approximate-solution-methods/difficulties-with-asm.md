---
title: Difficulties with Approximate Methods
sidebar_position: 2
---

# Difficulties with Approximate Methods

## Unusual Data

### Correlated Samples

We could have sequences of highly correlated non-iid data. For example, consider a racing video game. We cannot simply decide what action to take just based on one image. We need multiple frames to figure out our current velocity and direction.

Much of Supervised Learning relies on the iid assumption, and when this is broken, learning can become inefficient and SGD loses convergence guarantees.

![](https://i.imgur.com/b9J26pm.png)

### Dependence on Policy

Unseen data comes as agent learns new things. An agent could learn some fatal behaviour, or enter into some state from which it is unable to get to intended states. For example, an agent falling off the cliff.

### Proximity in space and time

The $Q(s, a)$ values can change abruptly in $s$ and $a$.
- Close states could be arbitrarily far in value
- Successive states could be arbitrarily far in value
- Unstable gradients
- More data needed for SGD

Example, a helicopter flying very low through a forest. With careful maneuvering, it could fly just fine. But just a strike with a tree, and everything plunges into chaos.

---

## Non-Stationarity

We cannot assume fixed training data distribution.
- TD targets are invalidated
- MC targets no longer apply

Numeric problems (oscillating behaviour)
- Small change in Q-values
    - drastic change in policy
    - drastic change in training data
    - large gradients
    - large update in Q-values

The environment itself can be non-stationary.

---

## The Deadly Triad - Model Divergence

1. Off-policy learning
    - E.g. Learning target $\pi$ while following behaviour $b$
2. Bootstrapping
    - Updating a guess towards another guess (TD, DP)
3. Function approximation
    - Using a model with smaller number of parameters than states

These three come together and can lead the model to completely diverge, and have our agent learn absolutely nothing useful.

Divergence is not connected with Sampling, exploration or greediness.

---

## Deep Q Networks (DQN)

DQN was introduced by DeepMind at Google. It is a deep convolutional network, based on Q-learning. 

It was the first successful application of learning directly from raw visual inputs (same as humans), that too in a wide variety of environments (Atari games).

The video game screens were gray-scaled and downsampled to simplify computation.

There were some interesting stability tricks used in DQN, a couple of which we see here.

### Experience Replay

We saw experience replay earlier. We store tuples $(S, A, R, S')$ in a pool, and we sample tuples from the pool at random, using which we update our Q-values.

This helps against correlated data, like the video game example. Computations are easy to parallelize, and so that speeds up the learning.

However, it is memory intensive. DQN stored about 1 million interactions. Random sampling could be improved. For instance, in some situations we could see that more recent data is more valuable in learning than further and older data.

### Reward Clipping

We may not know the scale of rewards beforehand. They could vary very widely, which could possibly lead to numeric problems with large Q-values.

A trick used was to clip the reward, for example, to [-1, 1]. This leads to more uniform Q-values and good gradients, however, we compromise on the distinction between *good* and *great*.
