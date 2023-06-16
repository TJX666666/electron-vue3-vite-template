import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import * as path from "path";
import electron from "vite-plugin-electron";
import electronRenderer from "vite-plugin-electron/renderer";
import polyfillExports from "vite-plugin-electron/polyfill-exports";
import renderer from 'vite-plugin-electron-renderer'

export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: path.join(__dirname, "./electron/main/index.ts"), // 主进程文件
      },
      // 打包时preload一直报错，待解决
      preload: {
        input: path.join(__dirname, "./electron/preload/index.ts"), // 预加载文件
      },
    }),
    // Use Node.js API in the Renderer-process
    renderer({
      nodeIntegration: true,
    }),
    electronRenderer(),
    polyfillExports(),
  ],
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
  },
});
