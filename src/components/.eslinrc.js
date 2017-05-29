const baseConfig = require('../.eslintrc');

const noInternalModulesRuleOptions =
  baseConfig.rules['import/no-internal-modules'][1];

module.exports = {
  rules: {
    'no-restricted-imports': [
      2, // eslint-disable-line no-magic-numbers
      {
        paths: ['components'],
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-internal-modules': [
      2, // eslint-disable-line no-magic-numbers
      {
        allow: [
          ...noInternalModulesRuleOptions.allow,
          'components/*',
          'components/*/*',
        ],
      },
    ],
  },
};
