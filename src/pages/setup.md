---
layout: ../layouts/MarkdownLayout.astro
title: Setup
prev:
  path: .
  name: Home
next:
  path: lessons
  name: Lessons
---

:::callout{.danger}
git-mastery provides many useful toolings to improve your learning experience. Make sure that everything in this guide is setup properly before proceeding.
:::

## Bash

:::callout{.warning}
git-mastery uses [Bash](https://www.gnu.org/software/bash/) to download problem sets and perform submissions on your behalf. So it is important that you have access to it.
:::

Verify that you have Bash installed on your machine.

:::::tabs{key=os}
::::tab{key=unix header="Linux/MacOS"}
Bash is usually installed on most Linux/MacOS machines. To verify that it is installed, you need to open a terminal (search your applications for "Terminal") and type the following command:

```bash
bash --version
```

If you have Bash installed, you should see a similar output:

```bash
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin23)
Copyright (C) 2007 Free Software Foundation, Inc.
```

::::

::::tab{key=windows header="Windows"}

To check if you have access to Bash on your Windows machine, first, check if you have Git Bash or Windows Subsystem for Linux (WSL) installed.

:::callout{.info}
You have Git Bash from a previous installation of Git, if so, that is perfectly alright.
:::

With Git Bash or WSL open, type the following command:

```bash
bash --version
```

If you have Bash installed, you should see a similar output:

```bash
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin23)
Copyright (C) 2007 Free Software Foundation, Inc.
```

::::

:::::

Keep your terminal open, we will be using it for the rest of the setup.

## Git

:::callout{.warning}
**Take note!**

You may have interacted with Git through GUIs like Github Desktop, GitKraken, and SourceTree. However, please use only the terminal for all of git-mastery. Doing so will allow you to build an intuition for how Git commands work.
:::

:::::tabs{key=git-setup}
::::tab{key=verification header="Verification"}
First, you should verify that you have Git installed already using the following command (which will display the version number of Git installed):

```bash
git version
```

If you see the following text, it is already present on your machine.

```bash
git version 2.48.1
```

If Git is already installed, feel free to skip to the next section of [setting up Github](./learning-lab/setup#github).
::::

::::tab{key=installation header="Installation"}
Follow the installation steps for your [operating system (OS) here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

:::callout{.info}
If you are using Windows, use [Git Bash](https://git-scm.com/downloads) or [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) as Git Mastery only works with Bash.
:::

To ensure that everything is working, run the following commands:

```bash
git version
```

You should see text like this:

```bash
git version 2.48.1
```

::::

::::tab{key=configuration header="Configuration"}
Because we use Git with Github, we highly recommend that you perform the following configurations:

The following command sets the name that will be associated with your Git commits. This name will be visible in any future commits pushed to Github from the command line. You can use any text if you wish to keep your real name private. For more information, refer to the [Github documentation](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git).

```bash
git config --global user.name "<your name>"
```

The next command is used to set the email to be associated with your Git commits. Similar to setting your name, if you wish to keep your real email private, you can do so using a Github-provided `noreply` email as [described here](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github).

```bash
git config --global user.email "<your email>"
```

::::
:::::

## Github

:::callout{.info}
We strongly encourage the use of SSH for Github as that is the most hassle-free setup.
:::

Create a [new Github account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) _if you don’t have an account_

:::callout{.info}
The following instructions are taken from the [official Github documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
:::

Check if you already have an existing SSH key:

```bash
ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```

If you have an existing SSH key, it might have one of the following names:

- `id_rsa.pub`
- `id_ecdsa.pub`
- `id_ed25519.pub`

If you already have an existing SSH key, you can skip the next two steps.

Create a new SSH key:

```bash
ssh-keygen -t ed25519 -C "your email"
```

:::callout{.info}
You can press **Enter** to accept all of the defaults (including using an empty passphrase).
:::

Add the private SSH key to the `ssh-agent`:

```bash
ssh-add ~/.ssh/id_ed25519
```

:::callout{.warning}
This step can vary between operating systems. Please refer [to this page](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=mac#adding-your-ssh-key-to-the-ssh-agent) and select your operating system to ensure that you are using the right steps.
:::

Once done, you can add the SSH key to Github.

Copy the public SSH key (ending with `.pub`) to your clipboard:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

Then, in Github, go to your settings > "Access" > SSH and GPG keys > New SSH key.

Give it a readable name and paste the contents of your public SSH key.

To verify that Github is working, run the following command:

```bash
ssh -T git@github.com
```

Verify that the fingerprint in the message matches [Github's public key fingerprint](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) and if it does, type `yes`.

You should see a message containing your username.

## Github CLI

Git Mastery uses Github CLI to streamline and automate the download and submission processes.

Follow the [installation instructions here](https://github.com/cli/cli#installation) for your operating system.

After you have installed Github CLI, run the following command to login to your preferred Github account:

```bash
gh auth login
```

:::callout{.warning}
You should have setup SSH for Github from the step above. If so, you should select the option for using SSH for Github CLI.
:::

You can verify that it worked by running the following:

```bash
gh auth status
```

## Setting up Git Mastery

Git Mastery provides a script that sets up your local environment for you. Run the following command in a suitable folder and follow the prompts accordingly:

```bash
curl -O https://raw.githubusercontent.com/git-mastery/scripts/refs/heads/main/setup.sh \
  && bash setup.sh
```

Navigate to <https://github.com/git-mastery/diagnostic/pulls> and find **[Your Github username] [diagnostic] Submission**.

If you see the following message, you have setup Git Mastery for your local environment successfully!

<div style="text-align:center">
  <img src="success.png" />
</div>
