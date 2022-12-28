import { Button, Form, Input, Row } from "ant-design-vue";
import { UraButton } from "../components/button";
import { UraInput } from '../components/input'
import { registerComponents } from "./use-register";


registerComponents({
  componentsKey: "ura-button",
  render: UraButton,
  type: "block",
  props: {
    type: "primary",
    text: "primaryprimaryprimary",
  },
  preview: {
    text: "按钮组件",
  },
});

registerComponents({
  componentsKey: "ura-input",
  render: UraInput,
  type: "normal",
  props: {
    hasFormItem: false,
    formItemProps: {
      label: 'xxxx',
    },
    modelName: 'aaaa'
  },
  preview: {
    text: "输入框组件",
  },
});

registerComponents({
  componentsKey: "ura-row",
  type: "block",
  render: Row,
  childrens: [],
  props: {

  },
  preview: {
    text: "Row容器组件",
  },
});

registerComponents({
  componentsKey: "ura-form",
  type: "block",
  props: {
    name: '表单名称',
    formModel: {},
    layout: 'vertical',
    labelWrap: true,
    labelAlign: 'right'
  },
  render: Form,
  childrens: [],
  preview: {
    text: "Form容器组件",
  },
});

