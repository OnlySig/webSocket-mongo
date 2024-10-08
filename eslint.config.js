import globals from "globals";
import pluginJs from "@eslint/js";
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"], // Alterado para aspas simples
      semi: ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];