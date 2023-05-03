# aws-cli-default-profile-switcher

Switch AWS CLI `~/.aws/credentials` → `[default]` profile via command line.

## Contents

- [Quick Start](#quick-start)
- [Usage](#usage)
- [Tips](#tips)

## Quick Start

- Clone repository
- Navigate to repository directory
- Ensure [AWS CLI](https://aws.amazon.com/cli) installed:<br>`$ aws --version` >= `2.11.*`
- Ensure [Node](https://nodejs.org/en/download) running:<br>`$ node -v` >= `18.16*`
- Install dependencies:<br>
  `$ npm ci`
- To use [with a GUI](#with-gui):
  - Ensure [fzf](https://formulae.brew.sh/formula/fzf) installed:<br>
    `$ which fzf`
  - Run:<br>
    `$ npm run switch-aws-profile`
- To use [without a GUI](#without-gui):
  - Run:<br>
    `$ node scripts/switch-aws-profile "<PROFILE NAME>"`

## Usage

- [With GUI](#with-gui)
- [Without GUI](#without-gui)

### With GUI

To select from existing profiles via GUI:

```console
$ npm run switch
```

> **Note**: Requires `fzf` command (install via [brew](https://brew.sh/)).

### Without GUI

To pass an existing profile name directly:

```console
$ node . "<PROFILE NAME>"
```

## Tips

Add the following code block to your `~/.bash_profile` file:

```bash
# ----------------
# AWS CLI Default Profile Switcher
# ----------------
# See: https://github.com/furey/aws-cli-default-profile-switcher
# ----------------

_switchAwsProfile() {
    if [[ $# -eq 0 ]] ; then
        npm --prefix <PATH TO REPO> run switch-aws-profile
    else
        node <PATH TO REPO>/scripts/switch-aws-profile $1
    fi
}

alias switch-aws-profile=_switchAwsProfile
```

> **Note**: Replace `<PATH TO REPO>` with the local path to this repository.

Run the alias to switch profiles from anywhere:

```console
$ switch-aws-profile

or

$ switch-aws-profile "<PROFILE NAME>"
```
