'use strict';

module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
		},
		'sourceType': 'module'
	},
	'rules': {
		'valid-jsdoc': 'warn',
		'consistent-return': 'warn',
		'default-case': 'warn',
		'no-else-return': 'warn',
		'yoda': [
			'error',
			'never'
		],
		'strict': [
			'error',
			'function'
		],
		'brace-style': [
			'error',
			'1tbs'
		],
		'camelcase': [
			'error',
			{ 'properties': 'always' }
		],
		'capitalized-comments': [
			'error',
			'always'
		],
		'comma-style': 'error',
		'func-style': [
			'error',
			'declaration'
		],
		'indent': [
			'error',
			'tab',
		],
		'no-trailing-spaces': [
			'error',
			{ 'skipBlankLines': false }
		],
		'no-useless-return': 'warn',
		'one-var': [
			'warn',
			'always'
		],
		'one-var-declaration-per-line': [
			'error',
			'always'
		],
		'padded-blocks': [
			'error',
			'always'
		],
		'quote-props': [
			'warn',
			'as-needed'
		],
		'quotes': [
			'error',
			'single'
		],
		'require-jsdoc': [
			'error',
			{
				'require': {
					'FunctionDeclaration': true,
					'MethodDefinition': false,
					'ClassDeclaration': false,
					'ArrowFunctionExpression': true,
					'FunctionExpression': true
				}
			}
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'always'
		],
		'spaced-comment': [
			'error',
			'always'
		]
	}
};
