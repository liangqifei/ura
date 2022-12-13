import { Button, Form, Input, Radio, RadioGroup } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import { editComdata } from "../right/use-right";

export const ButtonConfig = defineComponent({
  name: "ButtonConfig",

  setup: (props) => {
    const state = reactive({
      componentsProps: editComdata.value.props,
    });

    return () => {
      return (
        <div>
          <Form layout="vertical">
            <Form.Item label="文本内容">
              <Input vModel={[state.componentsProps.text, "value"]}></Input>
            </Form.Item>
            <Form.Item label="type">
              <RadioGroup vModel={[state.componentsProps.type, "value"]}>
                <Radio value="primary">primary</Radio>
                <Radio value="ghost">ghost</Radio>
                <Radio value="dashed">dashed</Radio>
                <Radio value="default">default</Radio>
                <Radio value="link">link</Radio>
                <Radio value="text">text</Radio>
              </RadioGroup>
            </Form.Item>
            <Form.Item label="size">
              <RadioGroup vModel={[state.componentsProps.size, "value"]}>
                <Radio value="large">large</Radio>
                <Radio value="middle">middle</Radio>
                <Radio value="small">small</Radio>
              </RadioGroup>
            </Form.Item>
            <Form.Item label="shape">
              <RadioGroup vModel={[state.componentsProps.shape, "value"]}>
                <Radio value="default">default</Radio>
                <Radio value="circle">circle</Radio>
                <Radio value="round">round</Radio>
              </RadioGroup>
            </Form.Item>
          </Form>
          <Button>确定</Button>
        </div>
      );
    };
  },
});
