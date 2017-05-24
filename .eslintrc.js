module.exports = {
  extends: ['anvilabs', 'anvilabs/flowtype', 'anvilabs/react'],
  rules: {
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'no-use-before-define': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
