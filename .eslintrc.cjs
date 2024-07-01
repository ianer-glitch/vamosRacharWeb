/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2
        },
        multiline: {
          max: 1
        }
      }
    ],

    'vue/html-end-tags': ['error'],
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: true
      }
    ],

    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],

    'vue/custom-event-name-casing': [
      'error',
      'camelCase',
      {
        ignores: []
      }
    ],

    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2
      }
    ],

    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],

    'vue/padding-line-between-blocks': ['error', 'always'],

    'vue/require-valid-default-prop': 'error',

    'vue/component-api-style': ['error', ['composition', 'script-setup']],

    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
