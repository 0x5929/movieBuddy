/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    'prettier/prettier': [
      // 'prettier/prettier' rule from 'eslint-plugin-prettier'
      'error', // violation of the rule will cause an error
      {
        singleQuote: true, // option that sets single quotes as the valid quotes,
        endOfLine: 'off'
      },
      
    ]
  }
};
