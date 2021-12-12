module.exports = {
  "**/*": "prettier --write --ignore-unknown",
  "*.{ts,tsx}": "ts-standard --fix",
  "*.css": "stylelint --cache --fix",
};
