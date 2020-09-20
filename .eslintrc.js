module.exports = {
  extends: 'airbnb-base',
  plugins: ['jest'],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    document: true,
  },
  rules: {
    semi: 0,
    'no-console': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
  },
}
