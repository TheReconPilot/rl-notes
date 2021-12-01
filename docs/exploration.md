---
title: Exploration
sidebar_position: 6
---

# Exploration

Till now, we have mostly followed the simple $\epsilon$-greedy exploration with discounting, which has more or less worked. There could be many other strategies for exploration. How do we measure their quality?

## Regret

Given an optimal policy $\pi^*(a | s)$, the **regret** of policy $\pi(a | s)$ is given by:

Regret per time step = Optimal Policy - Our Policy

$$
\large
\eta = \sum_{t} \underset{s, a \sim \pi^*}{\mathbb{E}}[r(s, a)] - \underset{s, a \sim \pi}{\mathbb{E}}[r(s, a)]
$$

- Finite Horizon: $t < t_{\textsf{max}}$
- Infinite Horizon: $t \to \infty$

![](https://i.imgur.com/5M4TODU.png)

[Image Source](http://www.it.uu.se/research/systems_and_control/education/2017/relearn/lec3.pdf)

## Exploration Strategies

We again come to this issue, that *if our agent always takes the 'best' actions from its current point of view, how will it ever learn that other actions may be better than the current best one?*

In other words, this is the issue of Exploring new actions vs Exploiting the current best ones for reward.

There are multiple strategies.

### $\epsilon$-greedy

We take random action with probability $\epsilon$, otherwise the current optimal action.

The regret of this strategy grows linearly with time. This is because $epsilon$ is constant at every time step. Even if we have learned the optimal strategy, we still keep exploring random actions with a given probability. And so, the regret keeps growing.

### $\epsilon$-greedy with discounting

We don't always want to keep exploring. After a sufficient number of iterations, we have a pretty good idea of the optimal actions, and so, we discount this $\epsilon$ with each iteration, so that we take fewer exploration turns over time.

Hence,
$$
\large \lim_{t \to \infty} \epsilon = 0
$$

This strategy converges to the optimal policy, so regret eventually stops growing (theoretically).

An alternative strategy to reduce $\epsilon$ is to reduce it linearyly. For example, subtract, say, 0.05 from $\epsilon$ at each time step. $\epsilon$ eventually becomes zero. This linear reduction does not guarantee convergence to optimal policy (as we may not have explored optimal actions before our $\epsilon$ became zero), however, in practice, with proper tuning, this generally works.

### Softmax / Boltzman

The softmax function is a function often used to take an input vector of real numbers and normalize it into a probability distribution, proportional to the exponentials of the input numbers.

Here, it can be used to convert action values into action probabilities. The function commonly used is:

$$
\Large
P_t(a) = \frac{\exp\left(\frac{q_t(a)}{\tau}\right)}{\sum\limits_{i=1}^{n} \exp\left(\frac{q_t(i)}{\tau}\right)}
$$

The parameter $\tau$ is called a *temperature parameter*. For high temperatures ($\tau \to \infty$), all actions have nearly the same probability, and the lower the temperature, the actions with higher expected rewards have higher probability. For a low temperature ($\tau \to 0^+$), the probability of the action with the highest expected reward tends to 1.

## Uncertainty Based Exploration

![](https://i.imgur.com/lFE19Wd.png)

Any $\epsilon$-greedy exploration strategy is going to terribly break down in a problem like this. It will take an astronomically large number of samples to learn a policy with any algorithm.

This is more or less because $\epsilon$-greedy brings a lot of repeated exploration, which we don't exactly need.

**We want to try actions if we believe there's a chance they turn out optimal.**

### Thomson Sampling

Suppose we somehow know the probability distributions of $Q(s, a)$ values for multiple actions $a$. Thomson Sampling simply does the following:

- Sample once from each $Q$ distribution
- Take argmax over the samples

We pick the action whose sampled $Q$ value is the largest.


Continuing from that, we also want to explore actions that haven't been explored properly yet. So, an idea could be to **prioritize actions with uncertain outcomes**. This is also known as the *optimism in the face of uncertainty* idea.

### UCB (Upper Confidence Bounds)

Upper Confidence Bound (UCB) is a good way to model this.

![](https://i.imgur.com/7Eoa1Tk.png)

- Compute 95% UCB for each action $a$ on a probability distribution of $Q(s, a)$ values
- Take action with highest UCB

Actions which have lower UCB would mean that we fairly certain that they lead to lower reward in most cases.

#### Frequentist Approach

We do not really need to know the actual distributions. We could simply use some inequality that leads to a bound on the UCB.

:::success Hoeffding's Inequality

Let $X_1, \dots, X_n$ be independent random variables bounded by the interval $[0, 1]: 0 \leq X_i \leq 1$. Then,

$$
\large
P\left(\overline{X} - \mathbb{E}[\overline{X}] \geq t\right) \leq e^{-2t^2n}
$$

:::

We could use any of the other inequalities, like Chebyshev Inequality, for example.

#### UCB-1 for Bandits

Let's revisit the Multi Armed Bandit again, this time a bit more formally.

:::info Multi Armed Bandits

A bandit can be thought of as a slot machine with a lever. Pulling the lever can give you the reward, or give nothing.

The multi-armed bandit can be seen as a set of real distributions $B = \{R_1, R_2, \dots, R_k\}$, each distribution being associated with rewards delivered by one of the $K$ levers.

Let $\mu_1, \dots, \mu_k$ be the mean values associated with these reward distributions. The gambler iteratively plays one lever per round and observes the associated reward. The objective is to maximize the sum of collected rewards.

The bandit problem is formally equivalent to a one-state MDP. The regret $\rho$ after $T$ rounds is defined as the expected difference between the reward sum of an optimal strategy and the sum of the collected rewards:

$$
\large
\rho = T\mu^* - \sum_{t=1}^{T} \hat{r}_t
$$

where $\mu^*$ is the maximal reward, $\mu^* = \max\limits_{k}\{\mu_k\}$, and $\hat{r}_t$ is the reward in round $t$.

A common formulation is the Binary multi-armed bandit, or the **Bernoulli multi-armed bandit**, which issues a reward of 1 with probability $p$, and 0 otherwise.
:::

Let $v_a$ be the average reward obtained by taking action $a$. Then, in UCB-1, we taken actions in proportion to

$$
\tilde{v}_a = v_a + \sqrt{\frac{2 \log N}{n_a}}
$$

where

- $N$ = number of time steps so far
- $n_a$ = number of times action $a$ has been taken

Clearly, UCB-1 strategy will focus on exploring actions which haven't been taken at all. [This is because $n_a = 0$ for such an action.]

As both $N$ and all $n_a$ grow, $\tilde{v}$ approaches $v_a$. Then, we are just left to exploit the optimal actions.


### Bayesian UCB

- Start from Prior $P(Q)$,
- Learn Posterior $P(Q | \textsf{data})$
- Take $q^{th}$ percentile

We could learn the posterior in the standard way, for example, by using a normal prior distribution (or any other that is suitable in the situation)

There is a much more complex method, which uses Bayesian Neural Networks. Here, instead of weights which are just constant numbers, we have distributions of each weight. We do not see it here.



The advantage of Bayesian UCB over UCB is that we can choose any distribution we want and learn an actual distribution, not just the upper bound (which comes from an inequality anyway).

However, it could happen that the Prior does not work at all in the given situation. Without proper domain knowledge, Bayesian UCB may not perform as well. For example, we choose a unimodal prior when in reality the distribution looks like bimodal.

## Comparing Regret

![](https://i.imgur.com/J8pcuvk.png)