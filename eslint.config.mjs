import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

import htmlPlugin from "eslint-plugin-html"; 
// import htmlPlugin from "@html-eslint/eslint-plugin";
// import htmlParser from "@html-eslint/parser";

export default defineConfig([
  // JS 設定
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  }
])