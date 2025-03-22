---
title: Origins of Git
description: Where did Git come from and why do we even need it?
order: 0
next:
  path: tours/introduction/local-vs-remote-repositories
---

## The need for version control

Imagine developing a piece of complex software and wanting to share it with another developer to contribute. How might one approach this problem?

Maybe you could zip the project folder and send it over. But what happens if you want to continue working on it while the other person builds his own set of features? Would you manually compare the differences and merge them? What happens if there are conflicts between your codes, how would you go about resolving them?

The birth of [version control systems](https://www.atlassian.com/git/tutorials/what-is-version-control) stems from the growth of software delivery among teams. Essentially, version control systems were designed to track the "history of changes" of a piece of software over time, allowing developers to work on a shared codebase and manage changes easily.

## Predecessors of Git

Git is not the first version control system that was introduced. Prior to its creation, version control systems like Subversion ([SVN](https://en.wikipedia.org/wiki/Apache_Subversion)) and [Mercurial](https://www.mercurial-scm.org/). While they may be implemented different underneath the hood, they serve the same purpose - to easily manage the version history of software.

:::callout{.info}
For a comprehensive background on version control systems, refer to [this post](https://tarynwritescode.hashnode.dev/a-history-of-version-control)
:::

## Introduction of Git

Git was created by Linux Torvalds - creator of the Linux kernel - with the aim of managing software changes over time, after he had realized that all of the existing version control systems did not suit his needs for the Linux kernel development.

## What does Git have?

Git is a distributed version controls system, which means that developers maintain a local copy of an entire repository (think of it as a project) with history and version-tracking abilities, independent of network access or a central server.

Git provides features to synchronize changes between repositories that share history.

For collaboration with other developers, Git supports synchronizing with repositories on remote machines.

<div style="text-align: center; display: flex; justify-content: center;"><img src="learning-lab/images/tours/introduction/distributed.png" width="400px" alt=""></div>

We will be exploring this distinction between local and remote repositories next.
