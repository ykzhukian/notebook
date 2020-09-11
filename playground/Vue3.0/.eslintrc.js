module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'no-var': 'error',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
  },
};
