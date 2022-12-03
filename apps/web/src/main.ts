import { Header } from "ui";
import { createApp } from "vue";

// 从一个单文件组件中导入根组件
import App from "./App";

const app = createApp(App);
Header({ title: "111" });
app.mount("#app");
