---
title: Commits
description: "Diving into the most fundamental concept of Git: commits!"
categories:
  - git-commit
draft: false
prev:
  path: /lessons/introduction
  name: Introduction
order: 1
---

## What is a commit?

To track a codebase, Git relies on a system of **commits.**

You can think of a commit as a _snapshot_ of the instance of the codebase at a given point in time. For instance, when you are fixing a bug or implementing a new feature, you may want to save the current state of the codebase (take a snapshot). Every time you take a snapshot, it gets added over the previous snapshot as a set of changes that were introduced in the new version of the codebase.

Internally, Git tracks these commits by creating an [Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph), with every commit representing a node in the graph and every edge points back to the previous commit that occurred.

<div style="text-align: center;"><img src="commit.png" width="400px" alt=""></div>

You may notice that each commit node may have more than one incoming edge. This is where the idea of **branching** stems from.

:::callout{.warning}
We will be discussing branching in a later lesson.
:::

## Adding files to a snapshot

By default, Git does not know what files it should be including in a snapshot (and this is a good thing because we don't want Git to just add every file as they may contain sensitive information).

This is where the "three areas" concept comes into play. It is often good to think of your projects with Git as three separate concepts:

<div style="text-align: center;"><img src="staging.png" alt="" width="500px"></div>

1. Working directory: where your codebase actually resides
2. Staging area: set of files that you want to include in a snapshot
3. Repository: local/remote repository storing metadata about the project and Git

By default, all of your files reside in the working directory and are not yet added to the staging area. If you want a file included in the staging area, then you must first add it to the staging area (we will cover how this happens later on).

:::callout{.info}
There are also ways to remove files from the staging area!
:::

## Hands-on: Committing to your local repository

To better understand how commits work, we have prepared a simple exercise that can work out the local repository [created in the introduction](docs/lessons/introduction/#creating-a-local-repository).

### Adding a new file

Create a new file in the folder and add some text to it.

```bash
echo 'Hello world' >> hello.txt
```

:::callout{.info}
The command above essentially redirects the output of the `echo` (Hello world) into a new file `hello.txt`
:::

If you don't want to use bash commands, you can just create the file using your preferred method as well.

### Getting the status of a repository

Now, run the following command to view the status of your repository.

```bash
git status
```

You should see the following:

```bash
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
 hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```

Recall that in [Adding files to a snapshot](./#adding-files-to-a-snapshot "mention"), Git does not automatically add files to a snapshot as it does not know exactly what you want. So we want to tell Git that we want `hello.txt` in the snapshot.

:::callout{.info}
`git status` is to view the state of your repository in Git's eyes. Use it to view things like the current files in the snapshot.

You may find exercises for it [here](https://github.com/git-mastery/problems-directory?tab=readme-ov-file#git-status).
:::

### Tracking files

You may notice that the `git status` message states that `hello.txt` is untracked. Untracked files are those that have never been registered with Git before. They are often new files that have been added to the repository and have not existed in any snapshots.

Files that have been added to a snapshot before are considered "tracked" and Git knows to look out for changes between snapshots.

### Adding files to the staging area

As discussed in [What is a commit](./#what-is-a-commit "mention"), a file from the working directory needs to be explicitly added to the staging area for a snapshot to include it. By default, an untracked file that is added to a snapshot becomes tracked for future snapshots.

To add `hello.txt` to the staging area, use the following command:

:::callout{.warning}
We will be covering what `git add` does in a later lesson.
:::

```bash
git add hello.txt
```

Then, use `git status` to view the status of your repository again:

```bash
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
 new file:   hello.txt
```

Notice that now, instead of stating that your file is untracked, Git is indicating that the changes have not committed. This is a sign that the file(s) have been tracked and added to the snapshot.

:::callout{.info}
You can use `.` to add all files in the current folder as well.
:::

### Taking the snapshot

Now, to take the snapshot (make the commit), you can use the following:

```bash
git commit -m "First commit"
```

The `-m` flag is used to specify the commit message. Every commit has an accompanying message that you can use to indicate what the commit contains/entails.

:::callout{.info}
If you do not use `-m`, your favorite terminal/GUI editor will be launched and you can compose the commit message in that editor, save it, and close the editor
:::
