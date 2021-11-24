---
title: Neural Networks
sidebar_position: 3
---

Neural Networks are also known as Artificial Neural Networks (ANN). They are at the heart of deep learning algorithms, and are inspired by the human brain, trying to replicate how neurons signal each other.

In RL, Neural Networks are used with a variety of algorithms, like Q-Learning for example. $\hat{v}$ can be a function computed by a multi-layer ANN, with $\bold{w}$ the vector of connection weights in all the layers.

ANNs are comprised of **node layers**. 
- An input layer
- One or more hidden layers
- An output layer

Each node (or artificial neuron) connects to another (in the neighbouring layer) and has an associated *weight* and threshold. If the output of any individual node is above the threshold value, that node is activated, sending the data to the next layer of the network. Otherwise, no data is passed along.

![](https://i.imgur.com/eUlQVcb.jpg)




Reference: https://www.ibm.com/in-en/cloud/learn/neural-networks