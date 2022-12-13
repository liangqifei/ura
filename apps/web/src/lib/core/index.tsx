import { Button, Form, Input, Row } from "ant-design-vue";
import { UraButton } from "../components/button";
import {UraInput} from '../components/input'
import { registerComponents } from "./use-register";


registerComponents({
  componentsKey: "ura-button",
  render: () => <UraButton></UraButton>,
  type: "block",
  props: {
    type: "primary",
    text: "primaryprimaryprimary",
  },
  preview: {
    text: "按钮组件",
    render: () => (
      <Button type="primary" danger>
        普通按钮组件
      </Button>
    ),
  },
});

registerComponents({
  componentsKey: "ura-input",
  render: () => <Input></Input>,
  type: "normal",
  props: {
  },
  preview: {
    text: "输入框组件",
    render: () => <Input disabled={true} defaultValue="基础组件"></Input>,
  },
});

registerComponents({
  componentsKey: "ura-row",
  type: "block",
  render: () => <Row></Row>,
  childrens: [],
  props: {},

  preview: {
    text: "Dragger容器组件",
    render: () => <div>Row组件，只能拖动到该容器组件</div>,
  },
});

registerComponents({
  componentsKey: "ura-form",
  type: "block",
  props: {},
  render: () => <Form></Form>,
  childrens: [],
  preview: {
    text: "Form容器组件",
    render: () => <div>Row组件，只能拖动到该容器组件</div>,
  },
});

registerComponents({
  componentsKey: "ura-form-item",
  type: "block",
  render: () => <Form.Item></Form.Item>,
  childrens: [],
  props: {},
  preview: {
    text: "FormItem容器组件",
    render: () => <div>Row组件，只能拖动到该容器组件</div>,
  },
});
