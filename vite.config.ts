import { defineConfig } from "vite";
import * as path from "node:path";
import vue from "@vitejs/plugin-vue";

export default defineConfig((configEnv) => {
  console.log(configEnv);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "./"),
      },
    },
  };
});
