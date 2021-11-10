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

---

## Exploration vs Exploitation

Using Q-learning in a naive way could lead to issues. For example, at the very start, all Q-values are zero (or as per initialization). Whatever first action taken by the agent that has a positive reward automatically gets reinforced and preferred by the algorithm.

We again come to this issue, that *if our agent always takes the 'best' actions from its current point of view, how will it ever learn that other actions may be better than the current best one?*

In other words, this is the issue of Exploring new actions vs Exploiting the current best ones for reward.

There are multiple strategies.

### $\epsilon$-greedy

We take random action with probability $\epsilon$, otherwise the current optimal action.

However, we don't always want to keep exploring. After a sufficient number of iterations, we have a pretty good idea of the optimal actions, and so, one way is to discount this $\epsilon$ with each iteration, so that we take fewer exploration turns over time.

### Softmax

The softmax function is a function often used to take an input vector of real numbers and normalize it into a probability distribution, proportional to the exponentials of the input numbers.

Here, it can be used to convert action values into action probabilities. The function commonly used is:

$$
\Large
P_t(a) = \frac{\exp\left(\frac{q_t(a)}{\tau}\right)}{\sum\limits_{i=1}^{n} \exp\left(\frac{q_t(i)}{\tau}\right)}
$$

The parameter $\tau$ is called a *temperature parameter*. For high temperatures ($\tau \to \infty$), all actions have nearly the same probability, and the lower the temperature, the actions with higher expected rewards have higher probability. For a low temperature ($\tau \to 0^+$), the probability of the action with the highest expected reward tends to 1.

---

## SARSA

### Cliff Walking - Example

![](https://i.imgur.com/JQ7FC4K.png)

We have a robot, wanting to reach from the yellow square to the green square, and it is on a cliff.

The red squares depict falling off the cliff with a negative reward. 

There is a shorter path (red arrow) which leads us to the destination faster, but has a higher risk (falling off while exploring). And there is a longer, but much safer path (green arrow), which has a lower return [because of discounting by gamma].

While using Q-Learning, our robot learns to use the shorter path, but also likely falls down often.

Robots are expensive, we would be better off with having a safer path, even if it is somewhat longer. We don't want to rebuild one everytime it falls off the cliff.

It is in situations like this that SARSA method comes in.

### The Method

We follow the same update rule:

$$
\large\hat{Q}(s, a) \gets \alpha \hat{Q}(s, a) + (1-\alpha) Q(s, a)
$$

The difference comes in how we compute $\hat{Q}(s, a)$.

**Q-Learning**

$\large\hat{Q}(s, a) = r(s, a) + \gamma \max\limits_{a'}Q(s', a')$

**SARSA**

$\large\hat{Q}(s, a) = r(s, a) + \gamma Q(s', a')$

This is also called an *on-policy* control method, while Q-learning is called an *off-policy* control method.

On-policy simply means using the current policy (i.e. do actions recommended by the current policy). Off-policy means we may use some action not recommended by the current policy, or maybe use a different policy altogether (say, a sample run from an expert) for training.

- In Q-Learning, we sample $<s, a, r, s'>$ from the environment, then we use a max operator over all $a'$ to find the best action in a greedy sense.
- In SARSA, we sample $<s, a, r, s', a'>$ (hence the name) and use it directly. We follow the policy.


The idea of SARSA is well-explained in [a StackOverflow answer by Dennis Soemers](https://stackoverflow.com/a/49390009).

> - **SARSA** uses the behaviour policy (meaning, the policy used by the agent to generate experience in the environment, which is typically $\varepsilon$-greedy) to select an additional action $a'$, and then uses $Q(s', a')$ (discounted by $\gamma$) as expected future returns in the computation of the update target.
> 
> - **Q-Learning** does not use the behaviour policy to select an additional action $a'$. Instead, it estimates the expected future returns in the update rule as $\max\limits_{a'}Q(s', a')$. The max operator used here can be viewed as "following" the completely greedy policy. **The agent is not actually following the greedy policy** though; it only says, in the update rule, "suppose that I would start following the greedy policy from now on, what would my expected future returns be then?".

> **What does it mean intuitively?**

> - SARSA will converge to a solution that is optimal under the assumption that we keep following the same policy that was used to generate the experience. This will often be a policy with some element of (rather "stupid") randomness, like epsilon-greedy, because otherwise we are unable to guarantee that we'll converge to anything at all.
>
> - Q-Learning will converge to a solution that is optimal under the assumption that, after generating experience and training, we switch over to the greedy policy.

> **When to use which algorithm?**

> An algorithm like Sarsa is typically preferable in situations where we care about the agent's performance during the process of learning / generating experience.

Like, the expensive robot, which we don't want to fall off a cliff too often during learning.

> An algorithm like Q-learning would be preferable in situations where we do not care about the agent's performance during the training process, but we just want it to learn an optimal greedy policy that we'll switch to eventually. Consider, for example, that we play a few practice games (where we don't mind losing due to randomness sometimes), and afterwards play an important tournament (where we'll stop learning and switch over from epsilon-greedy to the greedy policy). This is where Q-learning would be better.

Another useful answer on [When to choose SARSA vs Q-Learning by Neil Slater](https://stats.stackexchange.com/questions/326788/when-to-choose-sarsa-vs-q-learning)

## Expected SARSA

In Expected SARSA, we replace the max operator of Q-Learning with an Expectation over the actions. Here's the comparison.

**Q-Learning**

$\large\hat{Q}(s, a) = r(s, a) + \gamma \max\limits_{a'}Q(s', a')$

**SARSA**

$\large\hat{Q}(s, a) = r(s, a) + \gamma Q(s', a')$

**Expected SARSA**

$$
\large
\begin{aligned}
    \hat{Q}(s, a) &= r(s, a) + \gamma \mathbb{E}_{a'}[Q(s', a')] \\ \\
                  &= r(s, a) + \gamma \sum\limits_{a'} \pi(a' | s') Q(s', a')
\end{aligned}
$$

The update rule is the same as before.

From the book:

> Expected SARSA is more computationally expensive than SARSA, but in return, it eliminates the variance due to the random selection of $a'$. Given the same amount of experience, we might expect it to perform slightly better than SARSA, and indeed it generally does.

![](https://i.imgur.com/yGdgAZc.png)