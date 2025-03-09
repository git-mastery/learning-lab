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
Git Mastery relies on the following tools to be properly setup:

1. Git
2. Github
3. Github CLI

It is very important that these steps are done correctly to ensure that you can follow along.
:::

## Git

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

To verify that you have access to Bash, try to run the following command:

```bash
pwd
```

If you are using Bash, you should see the current directory displayed.

Once Git is setup on your local machine, do some initial configuration:

```bash
git config --global user.email "<your email>"
```

```bash
git config --global user.name "<your name>"
```

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
