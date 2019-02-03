module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },
  extends: 'airbnb',
  env: {
    node: true,
    es6: true,
    browser: true
  },
  plugins: [
    "babel"
  ],
  rules: {
    semi: 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
  }
}