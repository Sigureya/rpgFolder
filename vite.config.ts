import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

import { middleware } from "./src/examples/server/devServer";

const viewBuild = (): UserConfig => ({
  plugins: [
    react(),
    {
      name: "api",
      configureServer: (server) => {
        server.middlewares.use(middleware);
      },
    },
  ],
  resolve: {
    alias: {
      "@lib/nodeLib": path.resolve(__dirname, "src/libs/nodeLib"),
      "@constants": path.resolve(__dirname, "src/libs/constants"),
    },
  },
});

const libName = "rpg-folder" as const;
const libBuild = (): UserConfig => ({
  build: {
    outDir: "libDist",

    lib: {
      entry: "src/libs/index.ts",
      name: libName,
      fileName: (format) => `${libName}.${format}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    rollupOptions: {
      external: (id) =>
        id.endsWith(".test.ts") || ["@sigureya/rpgtypes"].includes(id),
    },
  },
  resolve: {
    alias: {
      "@lib/nodeLib": path.resolve(__dirname, "src/libs/nodeLib"),
      "@constants": path.resolve(__dirname, "src/libs/constants"),
    },
  },
  plugins: [
    dts({
      tsconfigPath: "./src/libs/tsconfig.json",
      outDir: "libDist/types",
      exclude: ["./**/*.test.ts"],
      //insertTypesEntry: true, // package.json に "types" フィールドを自動追加
      //  rollupTypes: true, // ロールアップされた型情報を生成
    }),
  ],
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return mode === "lib" ? libBuild() : viewBuild();
});
