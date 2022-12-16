import { Button, Form, Input, Row } from "ant-design-vue";
import { UraButton } from "../components/button";
import { UraInput } from '../components/input'
import { registerComponents } from "./use-register";


registerComponents({
  componentsKey: "ura-button",
  render: <UraButton></UraButton>,
  type: "block",
  props: {
    type: "primary",
    text: "primaryprimaryprimary",
  },
  preview: {
    text: "按钮组件",
    type: "primary",
  },
});

registerComponents({
  componentsKey: "ura-input",
  render: <UraInput />,
  type: "normal",
  props: {
  },
  preview: {
    text: "输入框组件",
    disabled: true
  },
});

registerComponents({
  componentsKey: "ura-row",
  type: "block",
  render: <Row />,
  childrens: [],
  props: {},

  preview: {
    text: "Dragger容器组件",
  },
});

registerComponents({
  componentsKey: "ura-form",
  type: "block",
  props: {},
  render: <Form />,
  childrens: [],
  preview: {
    text: "Form容器组件",
  },
});

