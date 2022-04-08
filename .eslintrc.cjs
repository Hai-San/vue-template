module.exports = {
	root: true,
	extends: [ 'plugin:vue/vue3-recommended' ],
	plugins: [ "vue" ],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-console': [
			'error',
			{
				allow: [ 'error' ],
			},
		],
		"vue/multi-word-component-names": false
	}
};
