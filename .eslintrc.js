module.exports = {
    extends: ['airbnb-typescript/base', 'prettier'],
    env: {
      node: true,
      jest: true,
      es6: true,
    },
    rules: {
      'prettier/prettier': ['error', {'endOfLine': 'auto'}],
      'eslint/no-unused-vars': 'off',
      'max-len': ['error', 150],
    },
    plugins: ['prettier', "import"],
    parserOptions: {
      project: './tsconfig.json',
    }
  };