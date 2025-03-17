---
title: Introduction
description: Introducing the history of the Git version control, the fundamental ideas of Git, and Github.
next:
  path: /lessons/git-commit
  name: Commits
order: 0
type: lesson
---

## What is Git?

Git is a [version control system](https://www.atlassian.com/git/tutorials/what-is-version-control) first created by Linus Torvalds with the aim of managing software changes over time. It is not the first version control system ([SVN](https://en.wikipedia.org/wiki/Apache_Subversion) and [Mercurial](https://www.mercurial-scm.org/) existed before it) but it is one of the most commonly used ones.

At a high level, version control systems track the "history of changes" of a piece of software over time. Git, in particular, emphasizes the use of a decentralized collaborative workflow, allowing teams to collaborate and work on a codebase without an active connection to the centralized repository.

## Local and remote repositories

Git relies on the core concept of a repository, which is essentially a parent folder with Git added to to monitor the changes of the folder and its contents (including sub-folders).

These repositories can exist on both your local machines or remotely on an external server (or [self-hosted](https://about.gitea.com/)).

[Github](https://github.com) is an example of a hosted remote Git server where you can create remote repositories and work on them locally (while pushing changes remotely, hence the "decentralized" nature of Git).

:::callout{.warning}
We will be covering how you can get your local repository changes to a remote repository like Github and vice versa in a following lesson!

In the meantime, we will be providing you with the commands necessary to get your changes to Github.
:::

## Hands-on: Creating a local repository

You can create a local repository from an existing project folder or from an empty folder.

To follow along with the lessons, create an empty local repository.

Create a folder that will become the repository.

```bash
mkdir new-folder/
```

Navigate to the folder.

```bash
cd new-folder/
```

Run the following command:

```bash
git init
```

This tells Git that you want this folder to be monitored by Git.
