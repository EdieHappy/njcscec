module.exports = {
    root: true,
    env: {
      node: true,
      jquery: true
    }, 
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'space-before-function-paren': ['error', 'never'],
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }