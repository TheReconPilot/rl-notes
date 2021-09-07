---
title: Multi-Armed Bandits
sidebar_position: 1
---

# Multi-Armed Bandits

## The Concept

- `k` different options, or actions at each step
- A reward given at each action, depending on a stationary probability distribution
- **Objective:** Maximize total reward over a given number of steps, say 500 steps.

> The name comes from imagining a gambler at a row of slot machines (sometimes known as "one-armed bandits"), who has to decide which machines to play, how many times to play each machine and in which order to play them, and whether to continue with the current machine or try a different machine.
>
> \- Wikipedia

![](https://blogs.mathworks.com/images/loren/2016/multiarmedbandit.jpg)

---

## Exploration vs Exploitation

| **Exploitation**                    | **Exploration**                          |
| ----------------------------------- | ---------------------------------------- |
| Using known-good strategies/actions | Exploring new unknown strategies/actions |
| Known amount of rewards             | Rewards unknown                          |

If the bandit just exploits the known-strategies, it is possible that they are stuck in a local-optima.

There may be unknown strategies which yield a higher total reward in the long run.

---

## $\epsilon$-greedy strategy

Exploit known good strategies most of the time, but for an $\epsilon$ fraction, explore new strategies randomly.

As the number of steps increases, different actions will be sampled more and more times, eventually leading us to finding the optimal strategy in the limit of very large number of steps.
