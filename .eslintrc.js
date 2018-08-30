// Configuration for EsLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  extends: [
    'plugin:vue/recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/standard',
    'jsdoc-essential',
  ],
  plugins: ['prettier', 'compat', 'json'],

  rules: {
    // jsx
    'jsx-quotes': ['error', 'prefer-single'],

    // rules for vue components
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'prettier/prettier': 'error',
  },

  settings: {
    // providing polyfills for `eslint-plugin-compat` plugin, see:
    // https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills
    polyfills: [],
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
}
