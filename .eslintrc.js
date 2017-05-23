module.exports = {
  extends: [
    'anvilabs',
    'anvilabs/lodash',
    'anvilabs/react',
    'anvilabs/flowtype',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-unused-disable': 0,
  },
};
