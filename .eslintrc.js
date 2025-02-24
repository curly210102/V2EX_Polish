const { resolve } = require('path')

const { TYPESCRIPT_FILES } = require('prefer-code-style/constants')

module.exports = {
  root: true,

  env: {
    browser: true,
    webextensions: true,
    jquery: true,
  },

  extends: [
    require.resolve('prefer-code-style/eslint/browser'),
    require.resolve('prefer-code-style/eslint/node'),
    require.resolve('prefer-code-style/eslint/typescript'),
  ],

  ignorePatterns: ['dist/**/*', 'extension/scripts/**/*.min.js', 'src/user-scripts/style.ts'],

  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parserOptions: {
        project: resolve(__dirname, 'tsconfig.json'),
      },
      extends: [require.resolve('prefer-code-style/eslint/rules/typescript-prefer-strict')],
      rules: {
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
      },
    },
  ],
}
