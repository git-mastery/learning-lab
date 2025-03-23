---
title: Adding files to a repository
description: Great, I have repository now, how do I start adding files to it?
order: 1
prev:
  path: tours/my-folder-my-repo/initializing-local-repo
next:
  path: tours/my-folder-my-repo/viewing-status
---

Now that you have a local repository setup, how do you start adding files to it.

## Mental model: Repositories as folders

We will develop the mental model for understanding Git throughout the tours, but for now, let's start imagining the local repository as a regular project folder with files and sub-directories.

There are no magical commands that you run to add/edit/delete files in a local repository, everything is done as regular actions against a folder.

So, open the project folder created from last lesson's hands-on in your favorite editor and let's get started!

:::callout{.note}
For the remainder of this tour, we will be using [Vim](https://www.vim.org/) as the core editor, along with various Bash commands (make sure it's [properly installed](/learning-lab/setup#bash)) as it is the easiest to explain.

However, you are free to use Visual Studio Code or any other IDE that you prefer!
:::

## Adding files

To add new files to a local repository, simply create the file in the project folder.

If you are using Bash, you might use something like `touch <filename>` or if you're using an IDE, you can also interactively create it.

:::::handsOn

::::callout{.note}
We will discuss how to manage these changes in subsequent lessons.
::::

::::steps
:::step{title="Create a new file"}
We will create a new file using `touch` to make things simple:

```bash
touch hello_world.txt
```

:::

:::step{title="Editing the file contents"}
Then, edit the file contents fo the file using your favorite editor:

```bash
vim hello_world.txt
```

Or if you want a quick and easy way to append text to a file, use:

```bash
echo "Hello world!" >> hello_world.txt
```

:::

:::step{title="Repeat this a few more times"}

Repeat steps (1) and (2) a few more times with different file names and different file contents!

In fact, try creating multiple sub-directories and nest files in them!

Be as creative as possible!

:::

:::step{title="View the files in your project"}
Now that you have created a bunch of files, you can view them in Bash via:

```bash
ls
```

Alternatively, in your IDE, you should have a file explorer to display this information!
:::
::::
:::::

## Now what?

Now that you have created a bunch of files in your local repository, how do you go about bridging this gap between a regular project folder and using the features of Git?

This is what we will cover in the next lesson!
