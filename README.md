# jspm-mocha-example

[![Build Status](https://travis-ci.org/curran/jspm-mocha-example.svg)](https://travis-ci.org/curran/jspm-mocha-example)

This is an example project that tests out a specific combination of JavaScript tools.

The technologies embraced by this starter project are:

 * [JSPM](http://jspm.io/) Package manager
 * [SystemJS](https://github.com/systemjs/systemjs) Module loader
 * [ES2015 Syntax](http://babeljs.io/docs/learn-es2015/)
 * [Mocha](http://mochajs.org/) Testing framework
 * [Chai](http://chaijs.com/) Assertion library

## Project Layout

 * [`lib`](./lib) contains the JavaScript source files for the project (which is a "library", so this directory is "lib"). These are authored using AMD syntax. The location of the main module exported in the project package is declared in `package.json` as the `main` property under `jspm`.

 * [`test`](./test) contains unit tests. These are also authored using ES2015 syntax. Unit test source files can assume that Mocha globals such as `describe` and `it`.

 * [`package.json`](./package.json) and [`config.js`](./config.js) are files used by JSPM. These define project dependencies and how SystemJS should try to load them. To understand these files, take a look at:

   * [Configuring Packages for jspm](https://github.com/jspm/registry/wiki/Configuring-Packages-for-jspm)
   * [SystemJS Configuration Options](https://github.com/systemjs/systemjs/wiki/Configuration-Options)

## Installing this package using JSPM

```
jspm install jspm-mocha-example=github:curran/jspm-mocha-example
```

After doing this, you can use SystemJS to load the module like this:

```javascript
System.import("jspm-mocha-example").then(function (myModule){
  console.log(myModule["defaults"]); // Prints "myModule works!"
});
```

For more details, see the [gh-pages branch](https://github.com/curran/jspm-mocha-example/tree/gh-pages), which contains a full project that uses the jspm-mocha-example package via JSPM.

## Using the Project

To set up your development environment for this project, you'll need to install:

 * [Git](http://git-scm.com/)
 * [Node.js](https://nodejs.org/)
 * [JSPM](https://github.com/jspm/jspm-cli/wiki/Getting-Started)

To use this project as a starting point, you'll need to fork it in GitHub, then clone it to your local machine using the following command (replacing "curran" with your user name):

`git clone git@github.com:curran/jspm-mocha-example.git`

To install project dependencies, use the following commands:

```
cd jspm-mocha-example
npm install
jspm install
```

You should then see something like this:

```
$ jspm install

    Looking up npm:babel-core
    Looking up npm:babel-runtime
    Looking up npm:chai
    Looking up npm:core-js
    Looking up npm:mocha
    Updating registry cache...
    Looking up npm:deep-eql
    Looking up npm:type-detect
    Looking up npm:assertion-error
ok   Installed babel as npm:babel-core@^5.8.22 (5.8.22)
ok   Installed npm:assertion-error@^1.0.1 (1.0.1)
ok   Installed npm:deep-eql@^0.1.3 (0.1.3)
ok   Installed npm:type-detect@^1.0.0 (1.0.0)
    Looking up github:systemjs/plugin-json
    Looking up github:jspm/nodelibs-process
    Looking up github:jspm/nodelibs-buffer
    Looking up github:systemjs/plugin-css
ok   Installed npm:type-detect@0.1.1 (0.1.1)
ok   Installed github:systemjs/plugin-json@^0.1.0 (0.1.0)
ok   Installed github:systemjs/plugin-css (0.1.14)
ok   Installed mocha as npm:mocha@^2.2.5 (2.2.5)
ok   Installed github:jspm/nodelibs-process@^0.1.0 (0.1.1)
    Looking up npm:process
ok   Installed github:jspm/nodelibs-buffer@^0.1.0 (0.1.0)
    Looking up npm:buffer
ok   Installed npm:process@^0.10.0 (0.10.1)
ok   Installed babel-runtime as npm:babel-runtime@^5.8.20 (5.8.20)
ok   Installed npm:buffer@^3.0.1 (3.4.3)
    Looking up npm:base64-js
    Looking up npm:ieee754
    Looking up npm:is-array
ok   Installed npm:is-array@^1.0.1 (1.0.1)
ok   Installed npm:base64-js@0.0.8 (0.0.8)
ok   Installed npm:ieee754@^1.1.4 (1.1.6)
ok   Installed chai as npm:chai@^3.2.0 (3.2.0)
    Looking up github:jspm/nodelibs-fs
ok   Installed github:jspm/nodelibs-fs@^0.1.0 (0.1.2)
ok   Installed core-js as npm:core-js@^1.1.1 (1.1.1)
    Installed Forks

               npm:type-detect 0.1.1 1.0.0

    To inspect individual package constraints, use jspm inspect registry:name.

    Looking up loader files...
      system.js
      system-csp-production.js
      system.js.map
      system-polyfills.js
      system.src.js
      system-csp-production.js.map
      system-polyfills.src.js
      system-polyfills.js.map
      system-csp-production.src.js

    Using loader versions:
      systemjs@0.18.14
ok   Loader files downloaded successfully

ok   Install complete.
```

Running `jspm install` populates the `jspm_packages` directory, which is where SystemJS will look for modules to load. Note that the `jspm_packages` is not included in the Git repository, because it is listed in the `.gitignore` file. This means that this directory will not be added to the Git repository, even if you run `git add .`. One core idea of JSPM is that installations are reproducible, eliminating the need to check in dependencies to a project repository.

## Running the Unit Tests

Run the unit tests by running Mocha from the command line.

```
cd jspm-mocha-example
./node_modules/.bin/mocha --compilers js:babel/register test/tests
```

For convenience, the above command has been added as the `test` script in `package.json`, so you can run the tests this way also:

```
npm test
```

At this point you should see this super shiny Mocha unit test runner:

```sh
  myModule
    Module Loading
     ✓ should load
    Sinon Mocks and Spies
     ✓ should mock lodash

  2 passing (353ms)
```

## Continuous Integration

Continuous Integration services monitor repositories for changes, then automatically run unit tests on your behalf, typically in a containerized environment. To test that this setup works in a continuous integration environment, an integration was done with [Travis CI](https://travis-ci.org/). According to the [Travis Node.js Documentation](http://docs.travis-ci.com/user/languages/javascript-with-nodejs/), Travis automatically runs `npm install` and `npm test`. The only additional thing I had to add to the Travis configuration was to run `jspm install` before running the tests. The working Travis config looks like this:

```yml
language: node_js
node_js:
  - "0.12"
before_script:
  - jspm install
```

Here's the [Travis build page for this project](https://travis-ci.org/curran/jspm-mocha-example), which shows the tests passing.

Another tricky thing about JSPM is that you will run into GitHub rate limiting. Every time JSPM installs a package from the GitHub registry, it uses up a portion of some bandwidth quota imposed by GitHub. This limit is not present if you are an authenticated GitHub user, but when running `jspm install` in a container environment like Travis, you need to do some special things to get around the GitHub rate limit. These are described in this page [JSPM Registries - Travis CI](https://github.com/jspm/jspm-cli/wiki/Registries#travis-ci).

Here are the steps I took to get Travis working with GitHub authentication, which solved the rate limit issue:

 * Go into GitHub account settings and create a new "Personal access token", giving it the scope "public_repo" only.
 * Run the command `jspm registry config github`
 * Paste the personal access token into the prompt.
 * Run the command `jspm registry export github`
 * Copy the string that comes after `jspm config registries.github.auth`
 * Go into the Travis settings for the repository
 * Add a Travis environment variable called `JSPM_GITHUB_AUTH_TOKEN`
 * Paste the string as the value for this token. Note that this token is NOT the same as the GitHub access token, this is a token generated by JSPM based on the original GitHub access token.
 * Modify the `.travis.yml` file to look like this:

```yml
language: node_js
node_js:
  - "0.12"
before_script:
  - jspm install
  - jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
```
