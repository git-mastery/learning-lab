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

## Bash

:::callout{.info.minimal}
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

:::callout{.info.info}
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

:::callout{.warning.minimal}
**Take note!**

You may have interacted with Git through GUIs like Github Desktop, GitKraken, and SourceTree. However, please use only the terminal for all of git-mastery. Doing so will allow you to build an intuition for how Git commands work.
:::

:::::steps
::::step{title="Verification"}

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

::::step{title="Installation"}

Follow the installation steps for your [operating system (OS) here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

To ensure that everything is working, run the following commands:

```bash
git version
```

You should see text like this:

```bash
git version 2.48.1
```

::::

:::::

## Github

:::callout{.info.minimal}
git-mastery uses Github to validate your submissions and provide feedback on your submission. Even if you already have a Github account created, you should still verify that you have setup SSH.
:::

:::::::steps
::::::step{title="New account"}
Create a [new Github account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) _if you don’t have an account_
::::::

::::::step{title="Verification"}
Verify if you already have SSH setup for Github:

```bash
ssh -T git@github.com
```

If you have already set it up, you should see a message containing your username. If so, feel free to skip to installing [Github CLI](/learning-lab/setup#github-cli).
::::::

::::::step{title="SSH setup"}

:::::callout{.info.minimal}
The following instructions are taken from the [official Github documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
:::::

Check if you already have an existing SSH key. The following command lists the files in your `~/.ssh/` folder (including hidden files).

```bash
ls -al ~/.ssh
```

If you have an existing SSH key, you might see one of the following entries:

- `id_rsa.pub`
- `id_ecdsa.pub`
- `id_ed25519.pub`

If you already have an existing SSH key, you can skip the next two steps.

Create a new SSH key:

```bash
ssh-keygen -t ed25519 -C "your email"
```

:::::callout{.info.minimal}
You can press **Enter** to accept all of the defaults (including using an empty passphrase).
:::::

Add the private SSH key to the `ssh-agent`. For more information about each step, refer to the [Github documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=mac#adding-your-ssh-key-to-the-ssh-agent).

:::::tabs{key=os-all}
::::tab{key=macos header="MacOS"}

Start the `ssh-agent` in the background.

```bash
eval "$(ssh-agent -s)"
```

You should see something like:

```bash
> Agent pid ...
```

Then, if you are using macOS Sierra 10.12.2 or later, you will need to modify your `~/.ssh/config` to automatically load keys into the `ssh-agent`.

To do so, verify that you have `~/.ssh/config` on your machine, otherwise, run the following command to create the file:

```bash
touch ~/.ssh/config
```

Then, edit the file to include the following:

```bash
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

Finally, you can add your SSH private key to the `ssh-agent`:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

::::

::::tab{key=windows header="Windows"}

:::callout{.warning.minimal}
This will be the only time that you will open Powershell and run Powershell commands on Windows. For every other command, please use Bash instead.
:::

In an admin elevated PowerShell window, start the `ssh-agent`:

```powershell
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
```

Add your SSH private key to the `ssh-agent`:

```bash
ssh-add ~/.ssh/id_ed25519
```

::::

::::tab{key=linux header="Linux"}

Start the `ssh-agent` in the background.

```bash
eval "$(ssh-agent -s)"
```

You should see something like:

```bash
> Agent pid ...
```

Add your SSH private key to the `ssh-agent`:

```bash
ssh-add ~/.ssh/id_ed25519
```

::::

:::::

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
::::::

::::::step{title="Configurations"}

Because we use Git with Github, we highly recommend that you perform the following configurations:

The following command sets the name that will be associated with your Git commits. This name will be visible in any future commits pushed to Github from the command line. You can use any text if you wish to keep your real name private. For more information, refer to the [Github documentation](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git).

```bash
git config --global user.name "<your name>"
```

The next command is used to set the email to be associated with your Git commits. Similar to setting your name, if you wish to keep your real email private, you can do so using a Github-provided `noreply` email as [described here](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github).

```bash
git config --global user.email "<your email>"
```

::::::
:::::::

## Github CLI

:::callout{.info.minimal}
git-mastery uses Github CLI to streamline and automate the download and submission processes.
:::

Follow the [installation instructions here](https://github.com/cli/cli#installation) for your operating system.

After you have installed Github CLI, run the following command to login to your preferred Github account:

```bash
gh auth login
```

:::callout{.warning.minimal}
You should have setup SSH for Github from the step above. If so, you should select the option for using SSH for Github CLI.
:::

You can verify that it worked by running the following:

```bash
gh auth status
```

You should see something similar to the following:

```bash
github.com
  ✓ Logged in to github.com account woojiahao (keyring)
  - Active account: true
  - Git operations protocol: ssh
  - Token: gho_************************************
  - Token scopes: 'admin:public_key', 'gist', 'read:org', 'repo'
```

## Setting up git-mastery

Now that you have setup all the necessary tools for git-mastery, it's time to setup git-mastery itself.

Git Mastery provides a script that sets up your local environment for you.

Run the following command in a suitable folder and follow the prompts accordingly:

```bash
curl -O https://raw.githubusercontent.com/git-mastery/scripts/refs/heads/main/setup.sh \
  && bash setup.sh
```

Once done, navigate to <https://github.com/git-mastery/diagnostic/pulls> and find **[Your Github username] [diagnostic] Submission**.

If you see the following message, you have setup Git Mastery for your local environment successfully!

<div style="display: flex; justify-content: center;">
  <img width=500 src="/learning-lab/images/setup/success.png" />
</div>
