import "ant-design-vue/dist/antd.less";
import { createApp } from "vue";

import "./app.less";
// 从一个单文件组件中导入根组件
import App from "./App";
import { setupStore } from "./store";
const app = createApp(App);
setupStore(app)
app.mount("#app");
