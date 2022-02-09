module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "src/**/*.{ts,tsx}": "eslint --cache --fix",
  "src/**/*.css": "stylelint --cache --fix",
};
