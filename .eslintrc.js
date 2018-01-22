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
	'rules': {}
};
