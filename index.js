module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "semi": ["error", "never", { 
      "beforeStatementContinuationChars": "always" 
    }],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "prettier/prettier": 
      [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
          semi: false,
        }
      ],
    "import/no-unresolved": "off",
    "import/extensions": [2, "never", { "mjs": "always"}],
    "import/prefer-default-export": "off",
    "func-names": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}
