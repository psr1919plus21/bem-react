module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'react'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    __DEV__: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    useJSXTextNode: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
  rules: {
    // see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L122
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      },
    ],

    semi: [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'wrap-iife': [2, 'inside'],
    'no-use-before-define': [2, { functions: true, classes: true, variables: true }],
    'no-caller': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-new': 2,
    'no-sparse-arrays': 2,
    'no-undef': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unused-vars': [
      2,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],

    strict: 2,
    'max-params': [2, 5],
    'max-depth': [1, 4],
    'no-eq-null': 0,
    'no-unused-expressions': 0,
    'dot-notation': 2,
    'use-isnan': 2,

    // Best practices
    'block-scoped-var': 2,
    complexity: [0, 11],
    curly: [2, 'multi-line'],
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'no-else-return': 2,
    'no-extra-bind': 2,
    'no-implicit-coercion': 2,
    'no-return-assign': 0,
    'no-sequences': 2,
    yoda: 2,

    // Variables
    'no-restricted-globals': [2, 'fdescribe', 'fit'],
    'no-var': 1,

    // Codestyle
    'arrow-parens': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': [2, { before: false, after: true }],
    'eol-last': 2,
    'func-call-spacing': [2, 'never'],
    'block-spacing': 2,
    'keyword-spacing': [2, { before: true, after: true }],
    'max-len': [
      2,
      {
        code: 100,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: 'require',
      },
    ],
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'no-nested-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var-declaration-per-line': [2, 'initializations'],
    'one-var': [2, { let: 'never', const: 'never' }],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed', { numbers: true }],
    quotes: [2, 'single', { avoidEscape: true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [
      2,
      {
        asyncArrow: 'always',
        anonymous: 'never',
        named: 'never',
      },
    ],
    'space-in-parens': 2,
    'no-console': [2, { allow: ['assert', 'error', 'warn'] }],
    'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict' }],
    'space-infix-ops': 2,

    // REACT
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-boolean-value': 2,
    'react/display-name': 0,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': [2, { beforeClosing: 'never', beforeSelfClosing: 'always' }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-find-dom-node': 2,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/react-in-jsx-scope': 2,
    'react/require-optimization': 0,
    'react/self-closing-comp': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],

    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 1, // Checks effect dependencies
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.js'],
      rules: {
        strict: 0,
      },
    },
  ],
}
