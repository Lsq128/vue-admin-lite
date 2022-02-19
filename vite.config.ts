import { defineConfig, loadEnv } from "vite";
import { setupVitePlugins, define } from "./build/vite";
import * as path from "node:path";

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`);

  return {
    base: viteEnv.BASE_URL,
    define,
    plugins: setupVitePlugins(configEnv),
    // plugins: [
    //   vue(),
    //   WindiCSS(),
    //   createHtmlPlugin({
    //     minify: true,
    //     inject: {
    //       data: {
    //         appName: "lite Admin",
    //         appTitle: "lite Admin",
    //       },
    //     },
    //   }),
    // ],
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
