import type { ConfigEnv, PluginOption } from "vite";
import vue from "./vue";
import html from "./html";
import windicss from "./windicss";
import mock from "./mock";
import visualizer from "./visualizer";

export function setupVitePlugins(
  configEnv: ConfigEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [vue, html(configEnv), windicss, mock];

  if (configEnv.command === "build") {
    plugins.push(visualizer);
  }

  return plugins;
}
