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

## bash

::::::::steps

:::::::step{title="Verification"}

Verify that you have [`bash`](https://www.gnu.org/software/bash/) installed on your machine.

::::::tabs{key=os}

:::::tab{key=unix header="Linux/MacOS"}
`bash` is usually installed on most Linux/MacOS machines.

Open a terminal (search your applications for "Terminal") and type the following:

```bash
bash --version
```

If you have Bash installed, you should see a similar output:

```bash
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin23)
Copyright (C) 2007 Free Software Foundation, Inc.
```

:::::

:::::tab{key=windows header="Windows"}

::::steps
:::step{title="Look for Git Bash or WSL"}
Check if you have Git Bash or Windows Subsystem for Linux (WSL) installed. You can search for any existing applications with those names.
:::

:::step{title="Verify bash"}
Check if you have Git Bash or Windows Subsystem for Linux (WSL) installed. You can search for any existing applications with those names.

With Git Bash or WSL open, type the following command:

```bash
bash --version
```

If you have Bash installed, you should see a similar output:

```bash
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin23)
Copyright (C) 2007 Free Software Foundation, Inc.
```

:::
::::

:::::

::::::

If you already have `bash` installed, then you are free to skip ahead to the [Git](learning-lab/setup#git) section.

:::::::

:::::::step{title="Installation"}

Skip this if you have already verified that `bash` is installed from above.

::::::tabs{key="os-all"}
:::::tab{key="macos" header="MacOS"}
::::steps
:::step{title="Install Homebrew"}

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Taken from <https://brew.sh/>.

:::

:::step{title="Install bash"}

```bash
brew install bash
```

:::

::::

Verify that the installation has worked by going through the section above.
:::::

:::::tab{key="windows" header="Windows"}

If you do not have Git Bash installed, you will be able to install it with Git below.

:::::

:::::tab{key="linux" header="Linux"}

For Debian and Ubuntu systems:

```bash
sudo apt-get install bash
```

For CentOS and other RPM-based systems:

```bash
sudo yum install bash
```

Verify that the installation has worked by going through the section above.

:::::
::::::

:::::::

::::::::

Keep your terminal open, we will be using it for the rest of the setup.

## Git

:::callout{.warning.minimal}
**Take note!**

You may have interacted with Git through GUIs like Github Desktop, GitKraken, and SourceTree. However, git-mastery prefers the use of the Git CLI as you are usually able to perform more complex commands directly through the CLI.
:::

::::::::steps
:::::::step{title="Verification"}

Run the following command in your terminal:

```bash
git version
```

The following text confirms that Git is installed.

```bash
git version 2.48.1
```

If Git is already installed, feel free to skip to the next section of [setting up Github](./learning-lab/setup#github).
:::::::

:::::::step{title="Installation"}

::::::tabs{key="os-all"}
:::::tab{key="macos" header="MacOS"}

::::steps
:::step{title="Install homebrew"}

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Taken from <https://brew.sh/>.
:::

:::step{title="Install git"}

```bash
brew install git
```

:::

::::

:::::

:::::tab{key="windows" header="Windows"}

Download the appropriate installer for your machine from [the Git website](https://git-scm.com/downloads/win).

::::callout{.warning.minimal}
**Take note!**

When prompted if you wish to install Git Bash, select "Yes", or select the option that installs Git Bash.
::::

:::::

:::::tab{key="linux" header="Linux"}
For Debian and Ubuntu systems:

```bash
sudo apt-get install git
```

For CentOS and other RPM-based systems:

```bash
sudo yum install git
```

:::::
::::::

Verify the installation using the above step.

:::::::

::::::::

## Github

::::::::steps

:::::::step{title="New account"}
Create a [new Github account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) _if you don’t have an account_
:::::::

:::::::step{title="Verification"}
Verify if you already have SSH setup for Github:

```bash
ssh -T git@github.com
```

If you have already set it up, you should see a message containing your username. If so, feel free to skip to installing [Github CLI](/learning-lab/setup#github-cli).
:::::::

:::::::step{title="SSH setup"}

::::::steps
:::::step{title="Verify existing SSH key"}
Run the following command to list the files in your `~/.ssh/` folder (including hidden files).

```bash
ls -al ~/.ssh
```

If you have an existing SSH key, you will see one of the following entries:

- `id_rsa.pub`
- `id_ecdsa.pub`
- `id_ed25519.pub`

If you already have an existing SSH key, you can skip the next two steps.
:::::

:::::step{title="Create an SSH key"}
Create a new SSH key:

```bash
ssh-keygen -t ed25519 -C "your email"
```

::::callout{.info.minimal}
You can press **Enter** to accept all of the defaults (including using an empty passphrase).
::::

:::::

:::::step{title="Add SSH key to ssh-agent"}

Add the private SSH key to the `ssh-agent`.

For more information about each step, refer to the [Github documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=mac#adding-your-ssh-key-to-the-ssh-agent).

::::tabs{key=os-all}
:::tab{key=macos header="MacOS"}

Start the `ssh-agent` in the background.

```bash
eval "$(ssh-agent -s)"
```

You should get the following output.

```bash
> Agent pid ...
```

If you are using macOS Sierra 10.12.2 or later, modify your `~/.ssh/config` to automatically load keys into the `ssh-agent`.

Check if that you have `~/.ssh/config` on your machine:

```bash
cat ~/.ssh/config
```

If you see the following error, run the next command:

```bash
cat: ~/.ssh/config: No such file or directory
```

```bash
touch ~/.ssh/config
```

Edit the file to include the following at the end of the file:

```bash
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

Add your SSH private key to the `ssh-agent`:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

:::

:::tab{key=windows header="Windows"}

In an admin elevated PowerShell window, start the `ssh-agent`:

```powershell
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
```

Add your SSH private key to the `ssh-agent`:

```bash
ssh-add ~/.ssh/id_ed25519
```

:::

:::tab{key=linux header="Linux"}

Start the `ssh-agent` in the background.

```bash
eval "$(ssh-agent -s)"
```

You should get the following output.

```bash
> Agent pid ...
```

Add your SSH private key to the `ssh-agent`:

```bash
ssh-add ~/.ssh/id_ed25519
```

:::

::::

:::::

:::::step{title="Add SSH key to Github"}

Once done, you can add the SSH key to Github.

Copy the public SSH key (ending with `.pub`) to your clipboard:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

In Github, go to **your settings > "Access" > SSH and GPG keys > New SSH key**.

Give it a readable name and paste the contents of your public SSH key.

:::::

:::::step{title="Verify Github SSH"}

```bash
ssh -T git@github.com
```

Verify that the fingerprint in the message matches [Github's public key fingerprint](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) and if it does, type `yes`.

You should see a message containing your username:

```bash
Hi <your username>! You've successfully authenticated, but GitHub does not pr
ovide shell access.
```

:::::

:::::::

:::::::step{title="Configurations"}

To use Git with Github, you will require the following configurations:

::::::steps

:::::step{title="Configuring name"}
Set the name associated with your Git commits.

This name will be visible in any future commits pushed to Github from the command line.

You can use any text if you wish to keep your real name private.

For more information, refer to the [Github documentation](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git).

```bash
git config --global user.name "<your name>"
```

:::::

:::::step{title="Configuring email"}
Set the email to be associated with your Git commits.

Similar to setting your name, if you wish to keep your real email private, you can do so using a Github-provided `noreply` email as [described here](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github).

```bash
git config --global user.email "<your email>"
```

:::::

::::::

:::::::
::::::::

## Github CLI

::::::::steps
:::::::step{title="Installation"}
::::::tabs{key="os-all"}
:::::tab{key="macos" header="MacOS"}
::::steps
:::step{title="Install homebrew"}

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Taken from <https://brew.sh/>.
:::

:::step{title="Install Github CLI"}

```bash
brew install gh
```

:::
::::
:::::

:::::tab{key="windows" header="Windows"}
We recommend using the `.msi` for installing Github CLI found [here](https://github.com/cli/cli/releases/tag/v2.68.1).
:::::

:::::tab{key="linux" header="Linux"}
There are different installation steps for various Linux distributions, refer to this [installation guide](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) for more information.
:::::
::::::
:::::::

:::::::step{title="Authentication"}

After you have installed Github CLI, run the following command to login to your preferred Github account:

```bash
gh auth login
```

:::callout{.warning.minimal}
You should have setup SSH for Github from the step above. If so, you should select the option for using SSH for Github CLI.
:::
:::::::

:::::::step{title="Verification"}

You can verify that the setup for the Github CLI worked by running the following:

```bash
gh auth status
```

You should see something similar to the following:

```bash
github.com
  ✓ Logged in to github.com account <your username> (keyring)
  - Active account: true
  - Git operations protocol: ssh
  - Token: gho_************************************
  - Token scopes: 'admin:public_key', 'gist', 'read:org', 'repo'
```

:::::::
::::::::

## git-mastery

::::steps
:::step{title="Navigate to parent folder"}
git-mastery creates a subfolder for all problem sets, so navigate to a parent folder.
:::

:::step{title="Setup"}

```bash
curl -O https://raw.githubusercontent.com/git-mastery/scripts/refs/heads/main/setup.sh \
  && bash setup.sh
```

:::

:::step{title="Verification"}
Go to <https://github.com/git-mastery/diagnostic/pulls>.

Look for an entry titled **[Your Github username] [diagnostic] Submission** and go into it.

If you see the following message, you have setup Git Mastery for your local environment successfully!

<div style="display: flex; justify-content: center;">
  <img width=500 src="/learning-lab/images/setup/success.png" />
</div>
:::
::::
