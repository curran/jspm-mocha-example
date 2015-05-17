This is an example starter project that you can clone and modify.

The technologies embraced by this starter project are:

 * [JSPM](http://jspm.io/) Package manager
 * [SystemJS](https://github.com/systemjs/systemjs) Module loader
 * [Asynchronous Module Definition](http://requirejs.org/docs/whyamd.html) (AMD) module format
 * [Mocha](http://mochajs.org/) Testing framework
 * [Chai](http://chaijs.com/) Assertion library

## Using the Project

To set up your development environment for this project, you'll need to install the following command line tools:

 * [Git](http://git-scm.com/)
 * [Node.js](https://nodejs.org/).
 * [JSPM](https://github.com/jspm/jspm-cli/wiki/Getting-Started)
 * [http-server](https://www.npmjs.com/package/http-server)

To use this project as a starting point, you'll need to fork it in GitHub, then clone it to your local machine using the following command (replacing "curran" with your user name):

`git clone git@github.com:curran/jspm-mocha-example.git`

To install project dependencies, use the following commands:

```
cd jspm-mocha-example
jspm install
```

You should then see something like this:

```
$ jspm install
ok   Install tree has no forks.
     Looking up loader files...
       es6-module-loader.js
       es6-module-loader.src.js
       es6-module-loader.js.map
       system.js
       system.src.js
       system.js.map
     
     Using loader versions:
       es6-module-loader@0.16.6
       systemjs@0.16.11
     Looking up github:jmcriffey/bower-traceur
     Looking up github:jmcriffey/bower-traceur-runtime
     Updating registry cache...
ok   Installed traceur-runtime as github:jmcriffey/bower-traceur-runtime@0.0.88 (0.0.88)
ok   Installed traceur as github:jmcriffey/bower-traceur@0.0.88 (0.0.88)
ok   Loader files downloaded successfully

ok   Install complete.
```

Running `jspm install` populates the `jspm_packages` directory, which is where SystemJS will look for modules to load. Note that the `jspm_packages` is not included in the Git repository, because it is listed in the `.gitignore` file. This means that this directory will not be added to the Git repository, even if you run `git add .`. One core idea of JSPM is that installations are reproducible, eliminating the need to check in dependencies to a project repository.

## Project Layout

[`src`](./src), and are authored using AMD syntax. The location of the main module for the package is declared in `package.json` as the `main` property under `jspm`.

[`package.json`](./package.json) and [`config.js`](./config.js) are files used by JSPM. These define project dependencies and how SystemJS should try to load them. To understand these files, take a look at:

 * [Configuring Packages for jspm](https://github.com/jspm/registry/wiki/Configuring-Packages-for-jspm)
 * [SystemJS Configuration Options](https://github.com/systemjs/systemjs/wiki/Configuration-Options)

`[index.html](./index.html)` contains the [Browser version of the Mocha test runner](http://mochajs.org/#browser-support), modified to load unit tests via SystemJS. This setup allows unit tests to require project modules using AMD syntax.

Unit tests go under `test`, and are also authored using AMD syntax. Unit test source files can assume that Mocha globals such as `describe` and `it`, because Mocha.js is loaded via a script tag in `index.html`, the unit test runner.

## Running the Unit Tests

Run the unit tests by running a local HTTP server, then navigating to [http://localhost:8080](http://localhost:8080). If you have installed [Node http-server](https://www.npmjs.com/package/http-server), you can run it with the command `http-server`.

One convenient trick is to run the HTTP server as a background process in your terminal, rather than opening a new terminal tab or window for it, using the following command:

`http-server > /dev/null &`

Now you can edit your code, save the files, then refresh the page to get into the flow of development.

To stop this server, execute the command `fg` to bring the process to the foreground, then hit CTRL-C to terminate it.
