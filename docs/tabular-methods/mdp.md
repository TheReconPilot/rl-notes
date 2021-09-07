---
title: Markov Decision Process
sidebar_position: 2
---

# Markov Decision Process

We consider the finite case, where number of states is finite, and time steps are discrete.

![](https://i.imgur.com/9OIpLJV.png)

## Setup

- States: $s \in \mathcal{S}$

- Actions: $a \in \mathcal{A}$

- Rewards: $r \in \mathbb{R}$

- $P_a(s, s') = Pr(s_{t+1} = s' | s_t = s, a_t = a)$ is the probability that the action $a$ in state $s$ at time $t$ will lead to state $s'$ at time $t+1$. 

- Policy $\pi$, which maps states to actions, defining the strategy


![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Markov_Decision_Process.svg/600px-Markov_Decision_Process.svg.png)


## Reward and Objective

- Total Reward: $R = \sum\limits_{t} r_t$.

- Policy: $\pi(a | s)$ = Probability of taking action $a$ in state $s$.

- Goal: Maximize $\pi(a|s): E_{\pi}[R]$
  - Find policy $\pi$ that maximizes the expected reward