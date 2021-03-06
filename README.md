# SWHacks-React

## Install Atom
Great IDE with plenty of helpful addons for usability:

https://atom.io/

Atom should be usable from iterm, if it is not, try running this symlink command:
```bash
ln -s /Applications/Atom.app/Contents/Resources/app/atom.sh /usr/local/bin/atom
```

## Install Iterm2
Improved terminal with windowing and much, much more:

https://www.iterm2.com/

## Install Homebrew
Better installer for mac:

https://brew.sh/
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
```

## Install NPM and Node.js
```bash
brew install node
```

## Install React.js and Create New Project
```bash
npm install -g create-react-app
create-react-app MY_APP_NAME
cd MY_APP_NAME
npm start
```

## Create Git Repo
Create a repo on your github:
```bash
git init
git remote add origin https://github.com/user/repo.git
git pull origin master
```
Upload your react app to your github repo:
```bash
git add .
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git commit -m "first commit"
git push --set-upstream origin master
```

## Install Jquery
```bash
npm install --save jquery
```

## Install Surge.js and build your React app to display it on the web
```bash
npm install --global surge
npm run build
surge
```

# Other suggested Installs, React Add-Ons, and General Software Development Tools
## React-Router
Declarative routing for React: 

https://github.com/ReactTraining/react-router/tree/master/packages/react-router

## Express.js 

Common web frame work for web apps:

https://expressjs.com/

## Shiftit for Mac
Simple, easy-to-use window-mover:

https://github.com/onsi/shiftit

## Slack
Great team-communication tool:

https://slack.com/



