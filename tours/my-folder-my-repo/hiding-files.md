---
title: Hiding files from Git
description: What do you have to hide? 👀
order: 5
categories:
  - gitignore
prev:
  path: tours/my-folder-my-repo/creating-snapshots
next:
  path: tours
  name: Back to tours
---

To round out this tour, let's take a look at how you can hide files from Git.

## But why?

There are several reasons why you might want to hide files from Git. Sometimes, the project file you are working on contains a lot of generated files that may not be necessary to include in any snapshots. Or you might be storing your secret keys in a file and you don't want that file being tracked by Git to avoid sharing those secrets with others.

Whatever the reason, Git supports the use of `.gitignore` to

> ...ensure that certain files not tracked by Git remains untracked

Which essentially means hiding files from Git, which we will refer to as "ignoring files" from here on out.

## `.gitignore` structure

`.gitignore` is actually a plain text file, but each line specifies a pattern that corresponds to files or folders.

For example, the following `.gitignore` file hides the `filea.txt` file, and the `nested/` folder.

```text
filea.txt
nested/
```

Note that if you ignore a folder, ALL of its contents are automatically ignored as well, unless you prefix it with `!`:

```text
# ...
!nested/okay.txt
```

In the above, the `nested/okay.txt` will not be ignored by Git, but every other file in `nested/` will continue to be nested. You may also have noticed but you can specify comments in `.gitignore` using `#`.

::::::handsOn
Let's start with creating your very first `.gitignore` file!

:::::steps
::::step{title="Create the file"}
Create the file with name `.gitignore`. It must be named this.

```bash
touch .gitignore
```

::::

::::step{title="Finding a candidate to ignore"}
Run `git status` to find the untracked files (these are files that have never been seen before by Git). They will be your first files to ignore.

:::callout{.note}
We specifically choose untracked files for simplicity.
:::

```bash
git status
```

Based on the output, we will pick `filea.txt` for this demonstration to ignore.

```text
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        filea.txt
        script.py

nothing added to commit but untracked files present (use "git add" to track)
```

::::

::::step{title="Adding contents to .gitignore"}
Once you have picked the file(s) you want to ignore, edit `.gitignore` to include the filenames:

```text
filea.txt
```

::::

::::step{title="Adding contents to .gitignore"}
Once you have picked the file(s) you want to ignore, edit `.gitignore` to include the filenames:

```text
filea.txt
```

::::

::::step{title="Verifying the hiding"}
Run `git status` once again to verify that the `.gitignore` is working:

```bash
git status
```

If all went well, you should not see the files you added in step (3) to appear in `git status` anymore.

```text
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        script.py

nothing added to commit but untracked files present (use "git add" to track
```

Instead, you should see that `.gitignore` appears as an untracked file!

::::

::::step{title="Creating a snapshot for .gitignore"}
Similar to what we've been doing every hands-on in this tour, create a snapshot with `.gitignore`!

::::

:::::
::::::

:::detour{.wip}
There are a lot more complexities that go into `.gitignore`.

For instance, try adding a tracked file into `.gitignore`. You may notice that any future changes to the file will be ignored, but it would have existed in past snapshots. What if you want to ignore the file entirely?

Or how about ignoring files that might follow a given pattern?

We will discuss these nuances in a detour!
:::

::::exercises
:::exercise{name="nothing-to-hide" recommendation="Good to try"}
Test your understanding of basic `.gitignore` syntax!
::::

## Rounding out the tour

Congratulations on coming to the end of this tour! Hopefully, you are better equipped with answering the following questions:

- [ ] What are local repositories in Git?
- [ ] How are local repositories different to project folders?
- [ ] How do you add/edit/delete files in a local repository?
- [ ] What are commits in Git?
- [ ] How do you create commits in Git?
- [ ] How do you view the state of your local repository?
- [ ] How do you hide files from Git?

Return to the tours page to check out more Git content!
