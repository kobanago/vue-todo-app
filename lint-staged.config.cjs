module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '*.{js,ts,vue}': [
    "eslint src/ --fix --ignore-path .gitignore",
    "prettier --write src/ --ignore-path .gitignore"
  ],
};
