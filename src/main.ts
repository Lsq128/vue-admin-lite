import { createApp } from "vue";
import { setupAssets, setupNaiveUI } from "@/plugins";
import App from "./App.vue";

function setupApp() {
  const app = createApp(App);
  // 引入静态资源
  setupAssets();
  // NaiveUi
  setupNaiveUI(app);
  app.mount("#app");
}
setupApp();
