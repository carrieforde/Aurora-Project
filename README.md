# Aurora
Aurora is a clean, modern, design-system focused project boilerplate that's both Sass and ES6-ready. It comes packed with tools that help developers work better together, including built-in linting and documentation support.


## Features
This project features a several goodies that will help improve your development workflow, so you can spend time on what you do best--developing websites--instead of configuring tools.

- Webpack support
- Sass
  * Sensible configuration
  * SMACSS-based architecture
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
- Versioning
- Deployment to Github
- [KSS Node](https://github.com/kss-node/kss-node) for easy styleguide creation
- Lightweight CSS Normalization with [Sanitize.css](https://github.com/jonathantneal/sanitize.css)

**Coming Soon**
- Test-driven development features


## Requirements
- [Node](http://node.js/) / [NPM](https://www.npmjs.com/)
- [Grunt CLI](http://gruntjs.com/) - `npm install -g grunt-cli`

### Recommended
- [BrowserSync](https://browsersync.io/)
- [ES Lint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Sassdoc](http://sassdoc.com/)
- [Stylelint](https://stylelint.io/)

To globally install all the required & recommended packages in one go, use this command:

```sh
npm install -g eslint jsdoc prettier sassdoc stylelint
```

*Note: you will still need to install packages locally to the project per the Getting Started instructions below*


## Getting Started
To get started, clone this repo to your computer:

```sh
git clone https://github.com/carrieforde/Aurora.git /path/to/project
```
Once you have cloned the project, move into the project directory and install all the Node dependencies:

```sh
cd /path/to/project
npm install
```


## Project Structure
```
aurora/
├── docs/
│   ├── jsdoc
│   ├── sassdoc
│   ├── styleguide
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── sass/
│   │   ├── scripts/
│   ├── app.js
│   ├── index.html
│   ├── main.css
├── .babelrc
├── .eslint.js
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── Gruntfile.js
├── kss-config.json
├── package-lock.json
├── package.json
├── README.md
```


## Tasks & Bundling
Once you have run `npm install`, you're ready to start using Aurora's taskrunning features. Aurora includes several `node` tasks, and bundling with Webpack.

### `npm run build`
Generates bundled files with `webpack`.

### `npm run dev`
Uses `webpack` to spin up a development server at `http://localhost:9000`, and initiates `webpack --watch`. Changes to files in `./src` will be bundled automatically, and the site will be reloaded.

### `npm run jsdoc`
Looks through JavaScript files and generates API documentation based on [JSDoc comments](http://usejsdoc.org/about-getting-started.html#adding-documentation-comments-to-your-code).

### `npm run jsdocwatch`
Watches for changes to JavaScript files and automatically runs `npm run jsdoc`.

### `npm run kss`
Looks through Sass files and compiles a KSS styleguide based on Sass comments.

###  `npm run watch`
Similar to `grunt watch`. Watches for changes to `.scss` files and runs `npm run kss` automatically.

### `npm run sassdoc`
Generates Sassdoc documentation based on [Sassdoc annotations](http://sassdoc.com/annotations/) in all `.sass` and `.scss` files.

### `npm run sassdocwatch`
Watches for changes to Sass files and automatically runs `npm run sassdoc`.

### `npm run alldocs`
Generates JS API documentation, KSS styleguide, and Sassdoc documentation in one go.


## Linting
Aurora includes Sass and JavaScript linting by default using Stylelint and ES Lint, respectively.

### Stylelint

#### Customizing Rules
https://stylelint.io/user-guide/configuration/#configuration

#### Disabling Rules
https://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css

### ESLint

#### Customizing Rules
https://eslint.org/docs/user-guide/configuring

#### Disabling Rules
https://eslint.org/docs/user-guide/configuring
