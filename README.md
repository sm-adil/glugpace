# GLUG PACE Website

GLUG PACE is a group of people who works for FOSS. This project is the Official website for the GLUG PACE Community.
Find out more information at [glugpace](https://elmentrix.github.io/glugpace/).

##### What's Being Used?

* [React](http://facebook.github.io/react/) for managing the presentation logic of your application.
* [Babel](https://babeljs.io/) for compiling ES2015+ down to ES5 compatible code.  Additionally, this project is set up to support type checking using [Flow](http://flowtype.org/) syntax.
* [WebPack](http://webpack.github.io/) for bundling code down to a single file and enabling hot module reloading.

## Getting Started
In order to get started developing, you'll need to do a few things first.

1. Make sure you have installed node and git in your system, clone this repository and cd to that folder.

```
git clone https://github.com/elmentrix/glugpace.git
```
2. Install all of the `node_modules` required for the package. Depending on your computer's configuration, you may need to prefix this command with a `sudo`.

```
npm install
```

3. Run the start command to get the project off the ground. This command will not only build your JS files using the Webpack `dev-server`.

```
npm start
```

4. Head over to [http://localhost:3000/glugpace/](http://localhost:3000/glugpace/) to see your app live!

5. Run the build command to build the project.

```
npm build
```

6. Commit all the changes to the project which you feel necessary and send in a pull request to us!

```
git add -A  
git commit -m "Fixed something!"
git push --set-upstream origin master
```

##### Happy hacking!
