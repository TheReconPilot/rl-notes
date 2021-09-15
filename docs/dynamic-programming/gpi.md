---
title: Generalized Policy Iteration
sidebar_position: 4
---

# Generalized Policy Iteration

Generalized Policy Iteration is the general idea of letting *policy evaluation* and *policy improvement* processes interact.

## Model-based setup and value-based approach

- **Model-based setup**
    - Model of the world is known
    - $p(r, s' | s, a)$ known for all $r, s', s, a$

- **Value based approach**
    1. Build or estimate a value
    2. Extract a policy from the value

## Policy Evalutation (Prediction)

**Policy Evalutation**, also called **Prediction** is predicting the value function for a particular policy.

The Bellman expectation equation is basically a system of linear equations where the number of unknowns is equal to the number of equations and number of states.

$$
\large
\begin{aligned}
    v_{\pi}(s) &= \sum\limits_{a} \pi(a | s) \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma\ v_{\pi}(s')] \\ \\
               &= \mathbb{E}_{\pi}[R_t + \gamma v_{\pi}(S_{t+1}) | S_t = s]
\end{aligned}
$$

:::danger Iterative Policy Evaluation

- Input $\pi$, the policy to be evaluated
- Initialize an array $v(s) = 0$, for all $s \in S$
- Repeat until $\Delta \le \theta$ (a small positive threshold)
    - $\Delta \gets 0$
    - For each $s \in S$:
        - $\large v_{old}(s) \gets v(s)$
        - $\large \boxed{v(s) \gets \sum\limits_{a} \pi(a | s) \sum\limits_{s', r} p(s', r | s, a) [r + \gamma v(s')]}$ (Bellman expectation equation)
        - $\large \Delta \gets \max (\Delta, |v_{old}(s) - v(s)|$
- Output $v \approx v_{\pi}$
:::
