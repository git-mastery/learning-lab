---
title: Editing files in a repository
description: But what if I want to edit the files in my local repository?
order: 4
categories:
  - git-commit
prev:
  path: tours/my-folder-my-repo/creating-snapshots
next:
  path: tours/my-folder-my-repo/hiding-files
---

Of course, Git does not only support adding new files to a local repository. So let's take a look at what it's like editing and deleting files.

## Maintaining the mental model

We maintain the same mental model we introduced in [Adding files](/learning-lab/tours/my-folder-my-repo/adding-files), where we think of a local repository as a regular project folder.

## Editing files

To edit a file, you can simply edit it as a regular file.

:::handsOn
In your local repository, try to edit multiple files.

For demonstration, we will edit the `hello_world.txt` and `new_file.txt` files by adding new lines of text to it.

If you want to quickly append lines to a file, you may use the `echo` bash command along with the redirection operation:

```bash
echo 'New line!' >> hello_world.txt
```

```bash
echo 'New line!' >> new_file.txt
```

Then, run `git status` again:

```bash
git status
```

You will notice that the output this time looks different from when we had first added new files:

```text
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   hello_world.txt
        modified:   new_file.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        filea.txt
        script.py

no changes added to commit (use "git add" and/or "git commit -a")
```

We will be discussing this difference below.

Then, you can add the files to a new snapshot of the edits:

```bash
git add hello_world.txt new_file.txt
```

And make the snapshot:

```bash
git commit -m "Edits!"
```

:::

:::::exercises
::::exercise{name="grocery-shopping" recommendation="Must do"}
:::callout{.note}
Problem sets are real-world scenarios that you can download to your local machine and experiment with them! Once you are done, run the submission script provided in the problem set (via `bash submit.sh`) and get feedback on how you've done!

If you haven't setup git-mastery yet, refer to the [setup guide](/learning-lab/setup)!
:::

Test out your understanding of making commits in Git with the `grocery-shopping` problem set where you are tasked to update a grocery list for shopping!

::::
:::::

## Deleting files

Similar to editing a file, we can delete files as we would in regular folders.

:::handsOn
In your local repository, pick a file that you have already added (via `git add`) to delete.

For demonstration, we will delete the `hello_world.txt` file.

In bash, you can use `rm` to delete a file:

```bash
rm hello_world.txt
```

Then, run `git status` again:

```bash
git status
```

You will see something similar:

```text
On branch main
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    hello_world.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        filea.txt
        script.py

no changes added to commit (use "git add" and/or "git commit -a")
```

:::

## Different `git status`

From the hands-on, you will notice that the output of the `git status` with edited/deleted files looks different from that of the `git status` we [introduced earlier](/learning-lab/tours/my-folder-my-repo/viewing-status).

This is because files that were edited/deleted, in the eyes of Git, were files that were already tracked and have instead, had their contents changed.

This is why the edited/deleted files are listed under a different section "Changes not staged for commit", rather than the "Untracked files" section.

You may also have noticed that the description of the change of the file follows the action made on the file, for instance, when the file was edited, it was prefixed with `modified: `, but when the file was deleted, it was prefixed with `deleted: `.

:::detour{link="/learning-lab/tours"}
You will notice that `git status` is an incredibly powerful tool in understanding the state of your local repository.

We have barely scratched the surface in understanding the different ways to interpret and use `git status`.

If you are interested in learning more about how `git status` works, check out this detour!
:::

:::::exercises
::::exercise{name="amateur-detective" recommendation="Must do"}
Now that you have understood the basic ways of using `git status`, try figuring out what files the hacker added and edited in `amateur-detective`!
::::
:::::
