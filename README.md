# Setting up a development environment

We're going to intsall and setup the following applications to get started with developing a web app.

* VS Code
* npm
* Nodejs
* Git
* Create-react-app

## 1. Installing VS Code

* **Windows and MacOS**: Download the [official package](https://code.visualstudio.com/) from the website and install.
* **Linux**: follow along this [guide](https://code.visualstudio.com/docs/setup/linux).

## 2. Installing npm and Nodejs

Installation using the Node installer is not recommended since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally.

Instead use a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to install both Node.js and npm. 

* **Windows**: download the `nvm-setup.exe` installer from [the releases page](https://github.com/coreybutler/nvm-windows/releases).
* **MacOS or Linux**: run this install script in your terminal to install both Node and npm.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

## 3. Installing Git

### Windows: 

Download the [installer](https://git-scm.com/download/win).

### MacOS:
* If you have homebrew installed:
```
$ brew install git
```

* Or download the [installer](https://sourceforge.net/projects/git-osx-installer/).

### Linux: 
Download from your distro's official repositories:

#### Debian / Ubuntu (apt-get) 
```
$ sudo apt-get update
$ sudo apt-get install git
```

#### RedHat / Fedora (dnf/yum)

```
$ sudo dnf install git
```

or 

```
$ sudo yum install git
```

#### Arch Based Distros

```
$ sudo pacman -Syu git
```

## 4. Installing create-react-app

Finally install create-react-app using npm. We will use this package to generate a boilerplate react project in our next session.

```
$ npm install -g create-react-app
```

We're now ready to start developing our first website!
