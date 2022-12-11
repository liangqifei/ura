import { Button, Input, Row } from "ant-design-vue";
import { registerComponents } from "./use-register";

registerComponents({
  componentsKey: "ura-button",
  render: (props) => <Button {...props}>{props.text}</Button>,
  type: "normal",
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
  preview: {
    text: "Dragger容器组件",
    render: () => <div>Row组件，只能拖动到该容器组件</div>,
  },
});
