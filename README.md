# Boilerplate ♨️
A design-system focused boilerplate that's Sass-ready and focused on Vanilla JavaScript. Heavily influenced by [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/) and [Atomic Design](http://atomicdesign.bradfrost.com/).


## Requirements
- [Node](http://node.js/) / [NPM](https://www.npmjs.com/)
- [Grunt CLI](http://gruntjs.com/) - `npm install -g grunt-cli`


## Getting Started
To get started, clone this repo to your computer:

```sh
git clone https://github.com/carrieforde/boilerplate.git boilerplate
```
Once you have cloned the project, move into the project directory and install all the Node dependencies:

```sh
cd boilerplate
npm install
```


## Features
This project features a several goodies that will help improve your development workflow, so you can spend time on what you do best--developing websites--instead of configuring tools.

- Sass
  * Sensible configuration
  * SMACSS-based architecture
  * Includes [Bourbon](http://bourbon.io/) for handy mixins
  * Linting with [Stylelint](https://stylelint.io/)
  * Compilation
  * Minification
- JavaScript
  * Focused on Vanilla JS, but ready for anything
  * Supports ES6 with Babel
  * Linting with [ESLint](https://eslint.org/)
  * Concatenation
  * Uglification / minification
- Icon (SVG) concatenation & minification
- Image minification
- [BrowserSync](https://www.browsersync.io/)
- Testing with Jasmine
- Versioning
- Deployment to Github
- [KSS Node](https://github.com/kss-node/kss-node) for easy styleguide creation
- Lightweight resets with [Sanitize.css](https://github.com/jonathantneal/sanitize.css)


## Project Structure


## Tasks
Once you have run `npm install`, you're ready to start using Boilerplate's taskrunning features. Boilerplate ♨️ includes several `grunt` tasks and one `NPM` task for working with `KSS`.

### Grunt
#### `grunt`
This default task kicks off BrowserSync and `grunt watch`.

#### `grunt watch`
On file save:
- Lints, compiles, and runs PostCSS on styles
- Concatenates, transpiles, and minifies JavaScript files
- Minifies and concatenates SVG files

This task does not use BrowserSync. Use the default [`grunt`](#grunt) task instead.

#### `grunt styles`
This tasks lints files using Stylelint, compiles the Sass, 
This task lints files using Stylelint, which outputs warnings and errors to the console, compiles the Sass into `src/style.css`, and processes `style.css` with PostCSS (autoprefixing and Media Query sorting).

#### `grunt scripts`
This task concatenates all scripts in `src/assets/scripts`, transpiles any ES2015 (ES6) or newer JavaScript through Babel, and lints files agains the .eslintrc.js.

#### `grunt icons`
Minify individual SVG icon files and concatenate the SVG into a single SVG sprite.

#### `grunt lint`
Lints Sass and preprocessed JavaScript files against Stylelint and ES Lint, respectively.

#### `grunt minify` & `grunt minify:true`
Minifies styles, scripts, and icons, outputting to the root `src` directory. Passing true to the task will also minify images.

#### `grunt build`
This tasks runs `styles`, `scripts`, `icons`, and `minify:full`. It's meant primarily as a pre-deployment step.

#### `grunt deploy`
Runs `build`, and uses [Semver](https://semver.org/) to update the application version. Defaults to `patch` when no option is passed. Also accepts: `grunt deploy:major` and `grunt deploy:minor`.

### NPM
#### `npm run kss`
Looks through Sass files and compiles a KSS styleguide based on Sass comments.

####  `npm run watch`
Similar to `grunt watch`. Watches for changes to `.scss` files and runs `npm run kss` automatically.
