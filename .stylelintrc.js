module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-recommended-scss'],
  rules: {
    'selector-pseudo-element-colon-notation': 'double',
    'scss/selector-no-union-class-name': true,
    'string-quotes': 'single',
  },
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
}
