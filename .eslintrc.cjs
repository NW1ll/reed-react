module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/lines-between-class-members": ["error"],
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-namespace": ["off"],
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        "before": false,
        "after": true,
        "overrides": {
          "arrow": { "before": true, "after": true }
        }
      }
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowedNames": ["self"]
      }
    ],
    "react/display-name": 0,
    "react/prop-types": 0,
    "semi": 2,
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "block-spacing": [2, "always"],
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "object-curly-spacing": ["error", "always"]
  },
}
