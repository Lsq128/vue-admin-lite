import { defineConfig } from "vite";
import * as path from "node:path";
import vue from "@vitejs/plugin-vue";

export default defineConfig((configEnv) => {
  console.log(configEnv);
  return {
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/scss/global.scss";',
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "./"),
      },
    },
  };
});
