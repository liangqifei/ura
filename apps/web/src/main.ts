import "ant-design-vue/dist/antd.less";
import { createApp } from "vue";
import "./app.less";
// 从一个单文件组件中导入根组件
import App from "./App";
const app = createApp(App);
app.mount("#app");
