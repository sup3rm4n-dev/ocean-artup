// These settings are used by a git pre-commit hook in src/utils/gitHooks
// ensuring eslint compliance before allowing a commit to go through.

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'backtick', { avoidEscape: true }],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    globalThis: false, // false means it is not writeable.
    // See https://github.com/eslint/eslint/issues/11553.
  },
}
