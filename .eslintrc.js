module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'typescript-airbnb-base',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'class-methods-use-this': 'off',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'func-names': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'no-useless-constructor': 'off',
    'object-shorthand': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/no-did-mount-set-state': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
};
