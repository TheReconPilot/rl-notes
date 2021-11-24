---
title: Approximate Solution Methods
sidebar_position: 1
---

# Approximate Solution Methods

In our methods till now, we tried to store state value functions ($v_\pi$) for every state (or action value function for state-action pair).

In situations with a very large state space (which is like, most real situations), this starts becoming a problem very soon.

Now, we try to look at methods to *approximate* the state value function. We no longer want it to perfectly give the correct state-value for any state, just an approximate value is enough.

This falls under the purview of **Function Approximation**, which is a theme in Supervised Learning. We want to approximate a function, by giving it training data points. We expect our function to perform reasonably well on new unknown points.

## Value Function Approximation

The approximte value function is represented not as a table, but as a parameterized function form with weight vector $\bold{w} \in \mathbb{R}^{d}$, where $d <<< |S|$, the size of state space.

We denote

$$
\large
\hat{v}(s, \bold{w}) \approx v_{\pi}(s)
$$

for the approximate value of state $s$ given weight vector $\bold{w}$.

Changing one weight changes the estimated value of many states. Consequently, when a single state is updated, the change generalizes from that state to affect the values of many other states. This generalization makes the learning potentially more powerful, but also potentially more difficult to manage and understand.

Similar to above, we can also approximate the action value function:

$$
\large
\hat{q}(s, a, \bold{w}) \approx q_{\pi}(s, a)
$$

We also refer to an individual update by the notation $s \mapsto g$, where $s$ is the state updated and $g$ is the *update target* or the *goal*.

$$
\large
\begin{aligned}
    s &\mapsto v_{\pi}(s) \\
    s, a &\mapsto q_{\pi}(s, a)
\end{aligned}
$$

In a sense, the update $s \mapsto g$ means that the estimated value for state $s$ should be more like the goal $g$.


:::info Monte Carlo
**Ideal World Goals**
$$
\large
\begin{aligned}
    s &\mapsto \mathbb{E}_{\pi}[G_t | S_t = s] \\
    s, a &\mapsto \mathbb{E}_{\pi}[G_t | S_t = s, A_t = a]
\end{aligned}
$$

**Sample based Estimates of Goals $g(s)$, $g(s, a)$**
$$
\large
\begin{aligned}
    s &\mapsto R(s, \pi(s)) + \gamma G_{t+1} \\
    s, a &\mapsto R(s, a) + \gamma G_{t+1}
\end{aligned}
$$
:::

:::info Temporal Difference (TD)
**Ideal World Goals**
$$
\large
\begin{aligned}
    s &\mapsto \mathbb{E}_{\pi}[R_{t+1} + \gamma v_{\pi}(S_{t+1}) | S_t = s] \\
    s, a &\mapsto \mathbb{E}_{\pi}[R_{t+1} + \gamma v_{\pi}(S_{t+1}) | S_t = s, A_t = a]
\end{aligned}
$$

**Sample based Estimates of Goals $g(s)$, $g(s, a)$**
$$
\large
\begin{aligned}
    s &\mapsto R(s, \pi(s)) + \gamma \hat{v}_{\pi}(S_{t+1}, \bold{w}) \\
    s, a &\mapsto R(s, a) + \gamma \hat{v}_{\pi}(S_{t+1}, \bold{w})
\end{aligned}
$$
:::

### Loss Function

Now that we have goals $g(s)$ and $g(s, a)$ (in general notation), we can now look for an equation to optimize. The **Loss Function**. Many loss functions are available, we go with the Mean Standard Error (MSE), the Loss Function for a Regression Problem in Supervised Learning.

$$
\large
\mathcal{L}(\bold{w}) = \frac{1}{2} \sum\limits_{s, a} \rho_{\pi}(s, a) [g(s, a) - \hat{q}_{\pi}(s, a, \bold{w})]^2
$$

where $\rho_{\pi}(s, a)$ denotes the *weights of importance*; simply a way to denote which $(s, a)$ pairs we care more about.

The weight of importance $\rho_{\pi}(s, a)$ can be thought of as the fraction of time for which the policy encounters state $s$, and in that state makes action $a$.

Of course, we want $\sum\limits_{s, a} \rho_{\pi}(s, a) = 1$

Some definitions again:

:::tip Online, Offline, On-Policy, Off-Policy
**Off-policy** is more general
- **Behaviour** policy: collects data (makes actions)
- **Target** policy: subject to evaluation and improvement

**On-policy** - less general but easier
- **Behaviour** policy is the same as **Target** policy
:::

### Minimizing Loss with Gradient Descent

$$
\large
\mathcal{L}(\bold{w}) = \frac{1}{2} \sum\limits_{s, a} \rho_{\pi}(s, a) \overbrace{[g(s, a) - \hat{q}_{\pi}(s, a, \bold{w})]^2}^{\mathcal{L}_{s, a}(\bold{w})}
$$

**Gradient Descent (GD)**

$$
\large
\bold{w} \gets \bold{w} - \alpha \nabla_{\bold{w}} \mathcal{L}(\bold{w})
$$

where

$$
\large
\nabla_{\bold{w}} \mathcal{L}(\bold{w}) = \left(\frac{\partial \mathcal{L}(\bold{w})}{\partial w_1}, \frac{\partial \mathcal{L}(\bold{w})}{\partial w_2}, \dots, \frac{\partial \mathcal{L}(\bold{w})}{\partial w_d} \right)^\intercal
$$

**Stochastic Gradient Descent (SGD)**

- On-policy: $s, a \sim \rho_{\pi}$
- Off-policy: $s, a \sim \rho_{b}$ (b = behaviour policy)

$$
\large
\bold{w} \gets \bold{w} - \alpha \nabla_{\bold{w}} \mathcal{L}_{s, a}(\bold{w})
$$

Gradient Descent can become computationally heavy, due to computing many squares and derivatives. It is slow on large data.

In Stochastic Gradient Descent (SGD), we reduce some of this computational complexity by simplifying some aspect. For example, in the case of regression, there is a method called *mini-batch SGD*, where we sample multiple points instead of just one at each iteration of the computation. This reduces the accuracy of the gradient, but gives a good speed boost.

Here, in RL, we simply **assume that the states appear in the examples with the same distribution.** In other words, we let go of the $\rho_\pi{(s, a)}$.

### Stochastic Semi-Gradient

We further simplify computation by treating the goals as fixed:

$$
\large
\nabla_{\bold{w}} g(s, a) = 0
$$

So,

$$
\large
\begin{aligned}
\bold{w} &\gets \bold{w} - \alpha \nabla_{\bold{w}} \mathcal{L}_{s, a}(\bold{w}) \\ \\
\bold{w} &\gets \bold{w} + \alpha\left[ g(s, a) - \hat{q}_{\pi}(s, a, \bold{w}) \right] \nabla_{\bold{w}} \hat{q}_{\pi}(s, a, \bold{w})
\end{aligned}
$$

Stochastic Semi-Gradient Descent
- Treats goals $g(s, a)$ as fixed numbers
- Changes parameters to move estimates closer to targets
- Is not a proper gradient
    - No SGD's theoretical convergence properties
    - Converges reliably in most cases
    - More computationally efficient than SGD


:::note Targets

**SARSA**

$$
\large
g(s, a) = R(s, a) + \gamma \hat{q}_{\pi}(S_{t+1}, A_{t+1}, \bold{w})
$$


**Expected SARSA**

$$
\large
g(s, a) = R(s, a) + \gamma \sum_{a} \pi(a | S_{t+1}) \hat{q}_{\pi}(S_{t+1}, a, \bold{w})
$$


**Q-Learning**

$$
\large
g(s, a) = R(s, a) + \gamma \max\limits_{a} \hat{q}_{\pi}(S_{t+1}, a, \bold{w})
$$

:::