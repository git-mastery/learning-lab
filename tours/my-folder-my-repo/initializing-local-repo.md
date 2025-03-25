---
title: Initializing local repositories
description: I have a project and I have Git, so how do I get started?
order: 0
next:
  path: tours/my-folder-my-repo/adding-files
---

## Overview

For this tour, we will focus on developing your understanding of how Git repositories work locally, looking at how you can add files to a local repository and starting to manage a linear history of commits.

## Why local repositories?

Let's suppose that you have a project that you're working on locally and you want to track the history of the changes using Git. You can turn the project folder into a local repository.

:::callout{.info}
You can find out more about the differences between local and remote repositories in the previous tour: [Local vs remote repositories](/learning-lab/tours/introduction/local-vs-remote-repositories).
:::

## Creating a local repository

There are two scenarios where you might create a local repository:

1. You have an existing project folder
2. You have a blank project folder

In both scenarios, you will use the same command to initialize the local repository: `git init`.

### `git init`

To initialize a project folder as a local Git repository, navigate to that folder in your terminal using `cd`.

Then, run the following command:

```bash
git init
```

This creates a hidden folder `.git/` in the root of your project folder, which contains the information Git uses for version control.

:::callout{.info}
If you are interested to learn more about what goes into `.git/`, refer [to the documentation!](https://git-scm.com/docs/gitrepository-layout)
:::

:::::handsOn
::::callout{.note}
Hands-on activities are short follow along demonstrations for each tour. Run the appropriate commands and play around with different variations!
::::

::::steps
:::step{title="Create a new folder"}
Create a new local folder to contain all of the hands-on practices:

```bash
mkdir git-mastery-hands-on
```

:::

:::step{title="Change directory"}
Navigate into the hands-on folder:

```bash
cd git-mastery-hands-on
```

:::

:::step{title="Initialize the folder as a local repository"}
Initialize the empty folder as a local repository:

```bash
git init
```

:::

:::step{title="Verification"}
Verify that the project folder has the `.git/` folder:

```bash
[ -d .git ] && echo 'Project is a local Git repository!' || echo 'Project is not a local Git repository...'
```

You should see the message:

```text
Project is a local Git repository!
```

You can also run the following command to view all hidden folders in your current directory, and if you see `.git/`, you will know that the local repository was initialized:

```bash
ls -al
```

:::
::::
:::::
