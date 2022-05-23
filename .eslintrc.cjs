module.exports = {
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    root: true,
    rules: {
        'array-bracket-newline': [
            'error',
            {
                'minItems': 1
            }
        ],
        'array-bracket-spacing': [
            'error',
            'always'
        ],
        'array-element-newline': [
            'error',
            'always'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'indent': [
            'error',
            4,
            {
                'CallExpression': {
                    'arguments': 'first'
                },
                'flatTernaryExpressions': true,
                'FunctionDeclaration': {
                    'parameters': 'first'
                },
                'FunctionExpression': {
                    'parameters': 'first'
                },
                'MemberExpression': 1,
                'ObjectExpression': 1,
                'offsetTernaryExpressions': true,
                'SwitchCase': 1,
                'VariableDeclarator': 'first'
            }
        ],
        'no-console': [
            'error',
            {
                allow: [
                    'error'
                ]
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'vue/html-indent': [
            'error',
            4
        ],
        'vue/multi-word-component-names': 'off'
    }
}
