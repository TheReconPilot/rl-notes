---
title: Value Functions
sidebar_position: 2
---

# Value Functions

**Dynamic Programming** is a method to solve complex problems by breaking it into smaller parts and solving them recursively.

In Reinforcement Learning, we want to find an **optimal policy** that gives maximum total rewards. So, we need to find a policy $\pi$ with the maximum return.

We use the Discounted Rewards system with the factor of $\gamma$.


A *policy* is a mapping from states to probability of selecting each possible action. If the agent is following policy $\pi$ at time $t$, then $\pi(a|s)$ is the probability that $A_t = a$ if $S_t = s$.

## State-Value Function $v_{\pi}(s)$

The *value function* of a state $s$ under a policy $\pi$, denoted by $v_{\pi}(s)$, is the expected return when starting in $s$ and following $\pi$ thereafter.

$$
\large
\begin{aligned}
    v_{\pi}(s) &= \mathbb{E}_{\pi}[G_t | S_t = s] \\ \\
               &= \mathbb{E}_{\pi}[R_t + \gamma G_{t+1} | S_t = s] \\ \\
               &= \sum\limits_{a} \pi(a|s) \sum\limits_{r, s'} p(r, s' | s, a)\left[r + \gamma\ \green{\mathbb{E}_{\pi}[G_{t+1} | S_{t+1} = s']}\right] \\ \\
               &= \sum\limits_{a} \pi(a | s) \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma\ \green{v_{\pi}(s')}]
\end{aligned}
$$

This is called the **Bellman expectation equation**.

:::tip Bellman Expectation Equation for State-Value Function

$$
\Large
\begin{aligned}
    v_{\pi}(s) &= \sum\limits_{a} \pi(a | s) \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma\ v_{\pi}(s')] \\ \\
               &= \mathbb{E}_{\pi}[R_t + \gamma v_{\pi}(S_{t+1}) | S_t = s]
\end{aligned}

$$
:::

### Backup Tree Diagram

![](https://i.imgur.com/5Pq5HNu.png)

Source: Practical RL, HSE University

---

## Action Value Function $q_{\pi}(s, a)$

The *action value function* for a policy $\pi$, denoted by $q_{\pi}(s, a)$, is the expected return starting from state $s$, taking action $a$, and then following policy $\pi$ thereafter.

$$
\large
\begin{aligned}
q_{\pi}(s, a) &= \mathbb{E}_{\pi}[G_t | S_t = s, A_t = a] \\ \\
              &= \mathbb{E}_{\pi}[R_t + \gamma\ G_{t+1} | S_t = s, A_t = a] \\ \\
              &= \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma \mathbb{E}_{\pi}[G_{t+1} | S_{t+1} = s']] \\ \\
              &= \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma v_{\pi}(s')]
\end{aligned}
$$

### Relation between $v_{\pi}(s)$ and $q_{\pi}(s, a)$

We already have $q_{\pi}(s, a)$ in terms of $v_{\pi}(s)$.

$$
\large
q_{\pi}(s, a) = \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma \green{v_{\pi}(s')}]
$$

We can now try writing $v_{\pi}(s)$ in terms of $q_{\pi}(s, a)$.

$$
\large
\begin{aligned}
v_{\pi}(s) &= \sum\limits_{a} \pi(a | s) \blue{\sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma\ v_{\pi}(s')]} \\ \\
           &= \sum\limits_{a} \pi(a | s)\ \blue{q_{\pi}(s, a)}
\end{aligned}
$$

So, we can now write a recurrence relation for the action value function.

$$
\large
q_{\pi}(s, a) = \sum\limits_{r, s'} p(r, s' | s, a)\left[r + \gamma\ \sum\limits_{a'} \pi(a'|s')\ q_{\pi}(s', a')\right]
$$



:::tip Bellman Expectation Equation for Action-Value Function

$$
\Large
\begin{aligned}
    q_{\pi}(s, a) &= \sum\limits_{r, s'} p(r, s' | s, a)[r + \gamma\ v_{\pi}(s')] \\ \\
                  &= \sum\limits_{r, s'} p(r, s' | s, a)\left[r + \gamma\ \sum\limits_{a'} \pi(a'|s')\ q_{\pi}(s', a')\right]
\end{aligned}

$$
:::

### Backup Tree Diagram

![](https://i.imgur.com/y4qAfw2.png)
Source: Practical RL, HSE University

---

With Bellmann expectation equations, we can assess policy performance.