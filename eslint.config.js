import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
// import fn from "eslint-plugin-functional";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist", "**/*.d.ts"],
    files: ["src/**/*.ts", "vite.config.mts"],

    languageOptions: {
      //      ecmaVersion: 2020,
      //      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // project: "./tsconfig.json", // 型情報を提供するためにプロジェクトを指定
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      //    "@functional": fn,
      // "react-hooks": reactHooks,
      // "react-refresh": reactRefresh,
    },
    rules: {
      // ESLintの推奨ルールセットを手動で適用
      //"no-undef": "error",
      //      "no-console": "warn",
      eqeqeq: "error",
      curly: "error",

      // 純粋関数強制Rule
      //      "@functional/no-return-void": "warn",
      //      "@functional/no-let": "error",
      //
      // その他のルール
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
      "spaced-comment": "error",
      // "react-refresh/only-export-components": [
      //   "warn",
      //   { allowConstantExport: true },
      // ],
    },
  },
];
