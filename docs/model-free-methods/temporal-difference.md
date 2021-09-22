---
title: Temporal Difference
sidebar_position: 2
---

# Temporal Difference

Temporal Difference (TD) Learning is a general class of model-free methods, which combines the ideas of Monte-Carlo and Dynamic Programming (DP).

Like Monte-Carlo methods, TD methods can learn directly from raw experience without a model of the environment's dynamics.

While Monte-Carlo methods only adjust their estimates once the final outcome is known, TD methods adjust estimates based in part on other learned estimates, without waiting for the final outcome (similar to DP).

This is a form of bootstrapping, as illustrated in this example from [Wikipedia](https://en.wikipedia.org/wiki/Temporal_difference_learning):

> Suppose you wish to predict the weather for Saturday, and you have some model that predicts Saturday's weather, given the weather of each day in the week. In the standard case, you would wait until Saturday and then adjust all your models. However, when it is, for example, Friday, you should have a pretty good idea of what the weather would be on Saturday – and thus be able to change, say, Saturday's model before Saturday arrives.

## The Idea

Recall the Optimality Equation for action value function, using which we can improve $Q(s, a)$ iteratively

$$
\large
\underbrace{Q(s_t, a_t)}_{Q*(s, a)} \gets \underset{r_t, s_{t+1}}{\mathbb{E}}\left[ r_t + \gamma \max_{a'}Q(s_{t+1}, a') \right]
$$

However, we don't know the model dynamics, so we can't find the expectation. So, we **approximate by replacing expectation with sampling**.

$$
\large
\underset{r_t, s_{t+1}}{\mathbb{E}}\left[ r_t + \gamma \max_{a'}Q(s_{t+1}, a') \right] \approx \frac{1}{N} \sum_{i} \left[ r_i + \gamma \max_{a'} Q(s'_i, a') \right]
$$

And we use moving average with just one sample:

$$
\Large
Q(s_t, a_t) \gets \alpha (r_t + \gamma \max_{a'} Q(s_{t+1}, a')) + (1-\alpha) Q(s_t, a_t)
$$

## Q-learning

Q-learning is a TD method.

- Initialize $Q(s, a)$ with zeros
- Loop:
    - Sample $< s, a, r, s' >$ from the environment
    - Compute $\large\hat{Q}(s, a) = r(s, a) + \gamma \max\limits_{a'}Q(s', a')$
    - Update $\large\hat{Q}(s, a) \gets \alpha \hat{Q}(s, a) + (1-\alpha) Q(s, a)$

Even before we finish our first trajectory, we would end up with something better than random Q-values. This is helpful in situations where we have infinite processing or situations with no apparent termination criteria for the session.

Q-learning can take all those situations and learn towards a better policy without even finishing.
