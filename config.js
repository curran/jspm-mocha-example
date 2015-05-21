System.config({
  "baseURL": "/jspm-mocha-example",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "jspm-mocha-example": "github:curran/jspm-mocha-example@master"
  }
});

