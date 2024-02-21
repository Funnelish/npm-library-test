import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },

  build: {
    cssCodeSplit: true,
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ComponentLibTest",
      fileName: "npm-library-test",
    },

    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
