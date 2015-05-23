This branch contains an example project that uses the jspm-mocha-example package via JSPM.

The full content of `jspm_packages` is included so it can be served through GitHub Pages at [http://curran.github.io/jspm-mocha-example](http://curran.github.io/jspm-mocha-example).

The following commands were used to create this project:

```bash
# Create the GitHub Pages branch
git checkout --orphan gh-pages
rm -r -f *

# Set up the JSPM project
jspm init
jspm install jspm-mocha-example=github:curran/jspm-mocha-example

# Write code
vim index.html 

# Remove Traceur
vim package.json 
vim config.js 
jspm clean

# Push to GitHub
git add . -A
git commit -m "Added gh-pages example project"
git push
```

The self-executing bundle `build.js` is built with the following command:

```bash
jspm bundle-sfx dist/main -m
```

<sub>Curran Kelleher May 2015</sub>
