import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

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
});

const libName = "rpg-folder" as const;
const libBuild = (): UserConfig => ({
  build: {
    outDir: "dist",

    lib: {
      entry: "src/libs/index.ts",
      name: libName,
      fileName: (format) => `${libName}.${format}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    rollupOptions: {
      external: (id) => id.endsWith(".test.ts"),
    },
  },
});

// https://vite.dev/config/
export default defineConfig(() => viewBuild());
