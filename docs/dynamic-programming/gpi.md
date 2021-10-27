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

---

## Policy Evaluation (Prediction)

**Policy Evaluation**, also called **Prediction** is predicting the value function for a particular policy.

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
- Repeat until $\Delta < \theta$ (a small positive threshold)
    - $\Delta \gets 0$
    - For each $s \in S$:
        - $\large v_{old}(s) \gets v(s)$
        - $\large \boxed{v(s) \gets \sum\limits_{a} \pi(a | s) \sum\limits_{s', r} p(s', r | s, a) [r + \gamma v(s')]}$ (Bellman expectation equation)
        - $\large \Delta \gets \max (\Delta, |v_{old}(s) - v(s)|)$
- Output $v \approx v_{\pi}$
:::

---

## Policy Improvement

Once we know the value function for a particular policy, we could improve on it by acting greedily.

From some state $s$, we want to know whether it would be better to follow the current policy or take an action not recommended by the current policy.

One way to go about this is taking an action $a$ not recommended by the current policy, i.e. $a \neq \pi(s)$, and then following the policy $\pi$ thereafter.

:::danger Policy Improvement
$$
\Large
\pi'(s) \gets \argmax_{a} \overbrace{\sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma v_{\pi}(s')]}^{q_{\pi}(s, a)}
$$
:::

This procedure is guaranteed to produce a better policy, owing to the **Policy Improvement Theorem**.

:::info Policy Improvement Theorem

Let $\pi$ and $\pi'$ be any pair of deterministic policies such that, for all $s \in S$,

$$
\large
q_{\pi}(s, \pi'(s)) \geq v_{\pi}(s).
$$

Then, $\large v_{\pi'}(s) \geq v_{\pi}(s)$ and hence $\large \pi' \geq \pi$

If a new policy after improvement is the same as the old one, i.e. $\large \pi' = \pi$, then it is optimal.

:::

For an idea of the proof, refer to Section 4.9 of the Book by Sutton and Barto, given in [Resources](/resources).

**The process of making a new policy that improves on an original policy, by making it greedy with respect to the value function of the original policy, is called *policy improvement.***

:::info Recovering Optimal Policy from known values

If $q_{*}(s, a)$ is known:

$$
\large
\pi_{*}(s) \gets \argmax_{a} q_{*}(s, a)
$$

If $v_{*}(s)$ is known:

$$
\large
\pi_{*}(s) \gets \argmax_{a} \overbrace{\sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma v_{*}(s')]}^{q_{*}(s, a)} 
$$

:::

So, if the model dynamics are unknown, i.e. $p(r, s' | s, a)$ are unknown, then we cannot recover an optimal policy from $v_{*}$, and we need to rely on $q_{*}$.

---

## Generalized Policy Iteration

**Generalized Policy Iteration**
1. Evaluate given policy
2. Improve policy by acting greedily with respect to its value function

**Policy Iteration**
1. Evaluate policy until convergence (with some tolerance)
2. Improve Policy

**Value Iteration**
1. Evaluate policy only with a single iteration
2. Improve policy

### Policy Iteration

:::danger Policy Iteration Scheme

1. Initialize $v(s)$ and $\pi(s)$ arbitrarily for all $s \in S$
2. Perform policy evaluation
3. Policy improvement:
    - `policy_stable` $\gets$ true
    - For each $s \in S$:
        - `old_action` $\gets \pi(s)$
        - $\large \pi(s) \gets \argmax\limits_{a} \overbrace{\sum\limits_{s', r} p(s', r | s, a)[r + \gamma v(s')]}^{q(s, a)}$
        - If `old_action` $\neq \pi(s)$, then `policy_stable` $\gets$ false
    - If `policy_stable`, then stop and return $v \approx v_*$ and $\pi \approx \pi_*$, else go to Step 2

:::

### Value Iteration

:::danger Value Iteration Scheme

- Initialize array $v$ arbitrarily
    - For example, $v(s) = 0$ for all $s \in S$
- Repeat until $\Delta < \theta$ (a small positive threshold)
    - $\Delta \gets 0$
    - For each $s \in S$:
        - $\large v_{old}(s) \gets v(s)$
        - $\large \boxed{v(s) \gets \max\limits_{a} \sum\limits_{s', r} p(s', r | s, a) [r + \gamma v(s')]}$ (Bellman optimality equation)
        - $\large \Delta \gets \max (\Delta, |v_{old}(s) - v(s)|)$
- Output a deterministic policy, $\pi \approx \pi_*$, such that
$$
\large
\pi(s) = \argmax_{a} \sum\limits_{s', r} p(s', r | s, a)[r + \gamma v(s')]
$$
:::

---

### Comparison of Policy Iteration and Value Iteration

**Policy Iteration (PI)**
- PI is slower per cycle - $O(|A|\ |S|^2 + |S|^3)$
- PI requires few cycles

**Value Iteration (VI)** 
- VI is faster per cycle - $O(|A|\ |S|^2)$
- VI requires many cycles
