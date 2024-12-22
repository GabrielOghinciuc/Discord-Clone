import globals from "globals";
import pluginJs from "@eslint/js";
import * as prettier from 'eslint-plugin-prettier';
import tseslint from "@typescript-eslint/eslint-plugin";
import angularEslintPlugin from "@angular-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Include JS, MJS, CJS, and TS files
    languageOptions: {
      globals: globals.browser, // Global browser variables for linting
    },
  },
  pluginJs.configs.recommended, // Basic JavaScript linting rules
  ...tseslint.configs.recommended, // TypeScript linting rules
  angularEslintPlugin.configs.recommended, // Angular linting rules
  {
    files: ["*.ts"],
    rules: {
      // Custom Angular and TypeScript rules
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-inferrable-types": "off", // Allow inferred types
      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn and console.error
    },
  },
  {
    files: ["*.html"],
    extends: ["plugin:@angular-eslint/template/recommended"], // Linting Angular templates
  },
  {
    files: ["*.ts"],
    extends: ["prettier"], 
    rules: {
      "prettier/prettier": ["error", { singleQuote: true }], 
    },
  },
];
