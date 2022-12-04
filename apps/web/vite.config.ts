import vue from "@vitejs/plugin-vue";
// @ts-ignore
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
// import { createProxy } from "../../packages/web-vite-build/index";
export function pathResolve(path: string, dir: string) {
  return resolve(path, ".", dir);
}
// createProxy([]);
const root = process.cwd();
const aliasPathSrc = pathResolve(root, "src") + "/";
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const { VITE_PUBLIC_PATH, VITE_PROXY } = loadEnv(
    mode,
    process.cwd(),
    "VITE_"
  );
  const proxyList = JSON.parse(VITE_PROXY);
  return {
    root,
    base: VITE_PUBLIC_PATH,
    mode,
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: aliasPathSrc,
        },
      ],
    },
    // extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    css: {
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
        hashPrefix: "prefix",
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            "@ant-prefix": "ura",
          },
        },
      },
    },
    server: {
      port: "8888",
      // proxy: createProxy(proxyList),
    },
    plugins: [vue(), vueJsx()],
  };
});
