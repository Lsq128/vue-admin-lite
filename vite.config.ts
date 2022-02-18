import { defineConfig } from "vite";
import * as path from "node:path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig((configEnv) => {
  console.log(configEnv);
  return {
    plugins: [
      vue(),
      WindiCSS(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            appName: "vue-admin-lite",
            appTitle: "vue-admin-lite",
          },
        },
      }),
    ],
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
