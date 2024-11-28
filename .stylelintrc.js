module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
    'stylelint-config-recommended-scss',
  ],
  plugins: ['stylelint-prettier'],
  rules: ['prettier/prettier'],
};
