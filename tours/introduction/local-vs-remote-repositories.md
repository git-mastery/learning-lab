---
title: Local vs remote repositories
description: The differences between the types of repositories in Git
order: 1
draft: true
prev:
  path: tours/introduction/origins-of-git
next:
  path: tours
  name: Back to tours
---

## What are repositories?

Git relies on the core concept of a repository, which is essentially a parent folder with Git added to to monitor the changes of the folder and its contents (including sub-folders).

More formally, a Git repository contains the `.git/` folder inside of it - used to track all changes made to the files in the project. If `.git/` is deleted, the entire project history is deleted.

## Differences between local and remote repositories

As discussed previously, repositories can exist on both your local machines or remotely on an external server (or [self-hosted](https://about.gitea.com/)).

### Local repositories

A local repository has the same version-tracking abilities as a remote repository. If you are working on a project locally and want to enjoy the benefits of version-tracking, initialize the repository as a Git repository.

:::callout{.info}
We discuss how to initialize local Git repositories in the next tour: [My Folder, My Repo](/learning-lab/tours/my-folder-my-repo)
:::

### Remote repositories

However, a local repository is only accessible to you through your machine. What happens if you wish to share the repository with others and collaborate on it?

This is where remote repositories shine - being able to synchronize and coordinate repositories through a central machine (i.e. the Git server).

[Github](https://github.com) is an example of a hosted remote Git server where you can create remote repositories and work on them locally (while pushing changes remotely, hence the "decentralized" nature of Git).

:::callout{.info}
We will discuss how to work with remote Git repositories in an upcoming tour.
:::
