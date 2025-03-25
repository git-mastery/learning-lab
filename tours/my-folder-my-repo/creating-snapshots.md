---
title: Creating snapshots (via commits)
description: How do I save the changes made as a part of the repository's history?
order: 3
categories:
  - git-commit
prev:
  path: tours/my-folder-my-repo/viewing-status
next:
  path: tours/my-folder-my-repo/editing-files
---

You now have understood the very fundamentals of Git and how to add files to a local repository, but how do you start tracking the version history of your project? This is where commits come in.

## What is a commit?

To track a codebase, Git relies on a system of **commits.**

You can think of a commit as a _snapshot_ of the instance of the codebase at a given point in time. For instance, when you are fixing a bug or implementing a new feature, you may want to save the current state of the codebase (take a snapshot). Every time you take a snapshot, it gets added over the previous snapshot as a set of changes that were introduced in the new version of the codebase.

Internally, Git tracks these commits by creating an [Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph), with every commit representing a node in the graph and every node points back to the previous commit that occurred (the parent of the commit).

<div style="text-align: center; display: flex; justify-content: center;"><img src="learning-lab/images/tours/my-folder-my-repo/commit.png" width="400px" alt=""></div>

You may notice that each commit node may have more than one incoming edge. This is where the idea of **branching** stems from.

<!--TODO: This should be about git branching-->

:::callout{.note}
We will be discussing branching in a subsequent tour!
:::

## Creating a snapshot

Now that you have a mental model of how to visualize state and changes in Git, how do you create a snapshot?

By default, Git does not know what files it should be including in a snapshot (and this is a good thing because we don't want Git to just add every file as they may contain sensitive information).

This is where the "three areas" concept comes into play. It is often good to think of your projects with Git as three separate concepts:

<div style="text-align: center; display: flex; justify-content: center;"><img src="learning-lab/images/tours/my-folder-my-repo/staging.png" alt="" width="500px"></div>

1. **Working directory**: where your codebase actually resides
2. **Staging area**: set of files that you want to include in a snapshot
3. **Repository**: local/remote repository storing metadata about the project and Git

By default, all of your files reside in the working directory and are not yet added to the staging area. If you want a file included in the staging area, then you must first add it to the staging area (we will cover how this happens later on).

<!--TODO: This should be about git reset-->

:::callout{.note}
There are also ways to remove files from the staging area that we will cover in subsequent detour!
:::

### Adding a file to a snapshot

To tell Git to include a given file in the next snapshot, you will use the `git add <filename>` command. Specify the list of filenames that you want to be included in the snapshot and Git moves them from the working directory to the staging area.

Adding an untracked file to a snapshot allows Git to know to look out for subsequent edits to the file in future snapshots.

:::handsOn
In your local repository, try adding the files by the filenames you had initially given them. For instance, we will be adding the `hello_word.txt` and `new_file.txt` file:

```bash
git add hello_world.txt new_file.txt
```

You can then use `git status` to verify the status of your repository and understand the state of the snapshot:

```bash
git status
```

Which should yield the following result:

```text
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   hello_world.txt
        new file:   new_file.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        filea.txt
        script.py
```

Notice that the there is a new section in your `git status` output that you did not see previously. The contents under `Changes to be committed` represent the files that are going to be included in the next snapshot made.

:::

### Making a commit

Once you have added the necessary files you want for your snapshot, you can then proceed to create the snapshot using the `git commit` command.

When you run `git commit`, you will be brought to your default text editor for your machine, where you will see the following text:

```text

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
#
# Initial commit
#
# Changes to be committed:
#	new file:   hello_world.txt
#	new file:   new_file.txt
#
# Untracked files:
#	filea.txt
#	script.py
#
```

It will describe the files that are being added to the snapshot, along with the other untracked files.

You will enter the commit message in the very first line. The commit message describes the snapshot.

<!--TODO: This should be about commit message etiquette-->

:::detour{.wip}
The commit message has two components, the commit title and the commit description.

Most of the time, the commit title is sufficient for most commits, but you may want to include more details about the commit, so you may utilize the commit description.

We will be covering the conventions for Git commit messages in a subsequent detour!
:::

:::handsOn
Now that you have added your files to your snapshot, make the snapshot!

```bash
git commit
```

Set the commit message to anything you want, we will use "Initial commit". Save in your editor and you should see the following result:

```text
[main (root-commit) ea110ec] Initial commit
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 hello_world.txt
 create mode 100644 new_file.txt
```

Now, if you run `git status` again, you should see the following:

```text
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        filea.txt
        script.py

nothing added to commit but untracked files present (use "git add" to track)
```

The files you had added should no longer be present in the list of untracked files.

:::

<!--TODO: This should be about git log-->

:::detour{.wip}
You might be wondering how you can view the past commits of your local repository. We will be covering it in a subsequent detour!
:::
