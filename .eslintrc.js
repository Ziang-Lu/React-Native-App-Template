module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  plugins: ['prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'object-shorthand': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/no-did-mount-set-state': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
