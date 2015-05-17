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
jspm install --dev
```

You should then see something like this:

```
$ jspm install --dev

     Looking up github:jmcriffey/bower-traceur
     Looking up github:jmcriffey/bower-traceur-runtime
     Looking up github:mochajs/mocha
     Looking up github:chaijs/chai

warn Using local override for github:chaijs/chai@2.3.0
     Updating registry cache...
ok   Installed traceur-runtime as github:jmcriffey/bower-traceur-runtime@0.0.88 (0.0.88)
ok   Installed chai as github:chaijs/chai@^2.3.0 (2.3.0)
ok   Installed traceur as github:jmcriffey/bower-traceur@0.0.88 (0.0.88)
ok   Installed mocha as github:mochajs/mocha@^2.2.5 (2.2.5)
ok   Install tree has no forks.
     Looking up loader files...
       es6-module-loader.js
       es6-module-loader.js.map
       system.js
       es6-module-loader.src.js
       system.js.map
       system.src.js
     
     Using loader versions:
       es6-module-loader@0.16.6
       systemjs@0.16.11
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

At this point you should see this super shiny Mocha unit test runner:

![](http://curran.github.io/images/jspm-mocha-example/jspmMocha.png)

If you see the following, then perhaps you didn't run `jspm install --dev`.

![](http://curran.github.io/images/jspm-mocha-example/fail.png)

It turns out that the [`--dev` option is required to install the `devDependencies` listed in package.json](https://github.com/jspm/jspm-cli/issues/747). We want Mocha and Chai to be devDependencies, not dependencies, because other projects that declare this project as a dependency should not need to install them, they are only for use during development.

One convenient trick is to run the HTTP server as a background process in your terminal, rather than opening a new terminal tab or window for it, using the following command:

`http-server > /dev/null &`

Now you can edit your code, save the files, then refresh the page to get into the flow of development.

To stop this server, execute the command `fg` to bring the process to the foreground, then hit CTRL-C to terminate it.
