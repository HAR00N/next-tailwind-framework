import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "./prettier.config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "plugin:prettier/recommended", "plugin:tailwindcss/recommended"),
  {
    files: ["**/*.{js,mjs,jsx,json,css,scss}"],

    plugins: {
      prettier,
      react,
      reactHooks,
      tailwindcss,
    },

    rules: {
      "react-hooks/rules-of-hooks": "error",
      "prettier/prettier": ["error", prettierConfig],
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "off",
    },
  },
  {
    ignores: ["node_modules/", "public/", "dist/", ".next/"],
  },
];

export default eslintConfig;
