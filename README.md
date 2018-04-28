# Aurora Project
Aurora Project is a clean, modern, design-system focused project boilerplate that's both Sass and ES6-ready. It comes packed with tools that help developers work better together, including built-in linting and documentation support.


## Features
This project features a several goodies that will help improve your development workflow, so you can spend time on what you do best--developing websites--instead of configuring tools.

- Webpack support
- Sass
  * Sensible configuration
  * Flexible architecture
  * Linting with [Stylelint](https://stylelint.io/)
  * Compilation
  * Minification
- JavaScript
  * Focused on Vanilla JS, but ready for anything
  * Supports ES Next with Babel
  * Linting with [ESLint](https://eslint.org/)
  * Concatenation
  * Uglification / minification
- Icon (SVG) concatenation & minification
- Image minification
- [KSS Node](https://github.com/kss-node/kss-node) for easy styleguide creation
- Lightweight CSS Normalization with [Sanitize.css](https://github.com/jonathantneal/sanitize.css)

**Coming Soon**
- Test-driven development features
- Type-checking
- Project CLI


## Requirements
- [Node](http://node.js/) / [NPM](https://www.npmjs.com/)


## Getting Started
To get started, clone this repo to your computer:

```sh
git clone https://github.com/carrieforde/Aurora-Project.git /path/to/project
```
Once you have cloned the project, move into the project directory and install all the Node dependencies:

```sh
cd /path/to/project
npm install
```


## Project Structure
```
aurora/
├── src/
│   ├── sass
│   │   ├── main.scss
│   │   ├── _config.scss
│   │   ├── _base.scss
│   ├── index.js
│   ├── index.html
│   ├── main.css
├── .babelrc
├── .eslint.json
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
Generates bundled, production-ready files with `webpack`.

### `npm run dev`
Uses `webpack` to spin up a development server at `http://localhost:9000`, and initiates `webpack --watch`. Changes to files in `./src` will be bundled automatically, and the site will be reloaded.

### `npm eslint`
Runs ESLint against all JavaScript files in the `/src` directory. Only errors will be displayed in the console.

#### `npm eslint:fix`
A subtask for ESLint that not only checks for JavaScript linting errors, but also auto-fixes any fixable issues.

### `npm format`
Keep formatting consistent between developers with Prettier. Enforces whether to use tabs or spaces, the number of spaces to use, single vs. double quotes, etc. Automatically fixes JS, JSX, and SCSS files.

### `npm run jsdoc`
Looks through JavaScript files and generates API documentation based on [JSDoc comments](http://usejsdoc.org/about-getting-started.html#adding-documentation-comments-to-your-code).

### `npm run kss`
Looks through Sass files and compiles a KSS styleguide based on Sass comments.

#### `npm run kss:watch`
Automatically watches Sass files for changes and rebuilds KSS styleguide.

### `npm run sassdoc`
Generates Sassdoc documentation based on [Sassdoc annotations](http://sassdoc.com/annotations/) in all `.sass` and `.scss` files.

### `npm run stylelint`
Runs Stylelint to enforce rules for style files (.css, .scss, etc.) in the `/src` directory. Flags errors in the console.

#### `npm run stylelint:fix`
A subtask for Stylelint that not only checks against style rules, but automatically fixes fixable issues.

## Linting
Aurora Project includes Sass and JavaScript linting by default using Stylelint and ES Lint, respectively.

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
