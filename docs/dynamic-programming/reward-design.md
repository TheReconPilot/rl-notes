---
title: Reward Design
sidebar_position: 1
---

# Reward Design

The rewards and their design affects the learning of methods. A well-designed reward system would actually let the agent learn what we want, instead of settling into unexpected behaviours.

## Rewards

> **Goals and purposes** can be thought of as the **maximization** of the **expected value** of the **cumulative sum** of a received scalar signal.
>
> \- *Reinforcement Learning - An Introduction* [Sutton and Barto]

Let the sequence of **rewards** at and after time step $t$ be $R_t, R_{t+1}, R_{t+2}, \dots, R_T$, where $T$ is the final time-step.

The cumulative reward is called **return**.

$$
G_T = R_t + R_{t+_1} + \dots + R_T
$$

---

## Faulty Reward Functions

### Data Centre Cooling - Infinite Rewards

- **States**: Temperature measurements
- **Actions**: Fan Speeds
- **Rewards**:
    - R = 0 for exceeding threshold
    - R = +1 for each second the system is cool

$$
G_t = 1 + 1 + 0 + 0 + 1 + 1 + 1 + 0 + 1 + \dots = \sum\limits_{t=1}^{\infty} = \infty
$$

Even with non-optimal behaviour very often, the return can be infinite. This is a flawed reward design.

---

### Cleaning Robot

- **States**: Dust Sensors
- **Actions**: Cleaning
- **Rewards**:
    - R = 10 for cleaning a small room that takes 5 minutes
    - R = 100 for cleaning a large hall that takes 2 hours
- Episode ends each day.

Here, rewards are finite, but the system is flawed. If the robot just cleaned the small room for the whole two hours, it will obtain a reward of R = 240, which is much greater than that of cleaning the large hall.

So, the robot learns to stick cleaning only the small room.

---

### CoastRunners - OpenAI

Source: [Faulty Reward Functions in the Wild - OpenAI Blog](https://openai.com/blog/faulty-reward-functions/)

This is a real situation encountered by the OpenAI Gym Team, highlighting how a flawed reward design can lead to unexpected situations.

The game is **CoastRunners**, where the goal is to finish the boat race quickly and (preferably) ahead of other players. The player can also earn scores by hitting targets laid along the route.

> *It turned out that the targets were laid out in such a way that the reinforcement learning agent could gain a high score without having to finish the course.*

> The RL agent finds an isolated lagoon where it can **turn in a large circle** and **repeatedly knock over three targets**, timing its movement so as to always knock over the targets just as they repopulate. 

The agent manages to achieve a higher score using this strategy than is possible by completing the course in the normal way.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tlOIHko8ySg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


> This kind of behavior points to a more general issue with reinforcement learning: it is often **difficult or infeasible** to capture exactly what we want an agent to do, and as a result we frequently end up using **imperfect but easily measured proxies**. Often this works well, but sometimes it leads to undesired or even dangerous actions.

---

## Discounting Rewards

We can get rid of the infinite returns by **discounting**.

The rewards at each further time step are *discounted* by a factor of $\gamma$.

Take $0 \leq \gamma \leq 1$, where $\gamma$ is the **discount factor**.

$$
G_t = R_t + \gamma R_{t+1} + \gamma^2 R_{t+2} + \dots = \sum\limits_{i=0}^{\infty} \gamma^i R_{t+i}
$$

This discounting **reduces the significance of rewards farther in the future**.

:::note Maximal Reward for R = +1

Discounting makes sums finite.

$$
G_0 = \sum\limits_{k = 0}^{\infty} \gamma^k = \frac{1}{1-\gamma}
$$

![](https://i.imgur.com/BEBHfAY.png)

:::

:::tip Mathematical Convenience
$$
G_t = R_t + \gamma (R_{t+1} + \gamma R_{t+1} + \dots) \\ \ \\ 
\implies \boxed{G_t = R_t + G_{t+1}}
$$
:::
