module.exports = {
  root: true,
  extends: "@react-native-community",
  ignorePatterns: ["node_modules/"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      "warn",
      {
        singleQuote: true,
      },
    ],
    "react-native/no-inline-styles": "off",
    "no-undef": "off",
    "no-alert": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "off",
    eqeqeq: "off",
    curly: "off",
  },
};
