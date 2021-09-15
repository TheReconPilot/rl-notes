---
title: Optimality
sidebar_position: 3
---

# Optimality

Value functions define a partial ordering over policies.

:::info Definition

A policy $\pi$ is defined to be better than or equal to a policy $\pi'$ if its expected return is greater than or equal to that of $\pi'$ over all states.

In other words,

$$
\Large
\pi \geq \pi' \iff v_{\pi}(s) \geq v_{\pi'}(s)\ \forall s
$$

:::

The **optimal policy** is the one that is better than or equal to all the other policies. There may be multiple optimal policies. We denote it by $v_{*}$.

**Optimal policies also share the same optimal optimal action-value function**, denoted by $q_{*}$. 

For the state-action pair $(s, a)$, this gives the expected return for taking the action $a$ in state $s$ and thereafter following an optimal policy.

$$
v_{*}(s) = \max_{\pi} v_{\pi}(s) \\ \ \\
q_{*}(s, a) = \max_{\pi} q_{\pi}(s, a)
$$

In any finite MDP, there is always at least one deterministic optimal policy.