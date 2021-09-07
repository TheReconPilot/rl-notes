---
title: Reinforcement Learning
sidebar_position: 1
slug: /
---

# Reinforcement Learning

This is a personal notes site, built with [Docusaurus 2](https://docusaurus.io/).

## Introduction

Reinforcement Learning is

- a paradigm of machine learning
- about maximizing a goal (reward) by finding what actions to take in an environment at different states

## Examples

- Learning to play a game, like Chess, Go, arcade games
- A human learning to walk
- An aircraft autopilot system learning to handle a plane
- Personalization systems in online services

---

## Comparison

| **Supervised Learning**                                      | **Unsupervised Learning**                               | **Reinforcement Learning**                                   |
| ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| Learning to approximate answers in new situations using reference answers | Learning to find underlying structure in the given data | Learning optimal strategy by trial and error                 |
| Needs reference data and correct answers                     | No prior data/feedback required                         | Needs feedback/reward on attempted actions                   |
| Model does not affect input data                             | Model does not affect input data                        | Agent can affect the environment, its possible future states and actions |

---

## Basic Elements

There is an **agent** and an **environment**. The agent can be any entity that has the ability to take some *action* at any given *state*.

### Policy

- The strategy that the agent follows in a given state of the environment
- Similar to *stimulus-response* rules or associations

### Reward Signal

- Defines the goal
- At each state/step, the environment gives a certain reward to the signal
- Agent's objective is to maximize the total reward

### Value Function

- The *value of a state* is the total amount of reward an agent can expect to receive, starting from that *state*. 
- Value function is simply a map from states to their given state values

An action may have low rewards but lead to a state with high value, indicating that a lower immediate reward will be more than compensated with an overall higher reward.

### Model of the Environment

- A reference which can mimic the actual environment, and can show how the environment will behave given a particular state and action
  - Can be used for planning and finding optimal policy
- A model may not always be available, when the environment is unpredictable