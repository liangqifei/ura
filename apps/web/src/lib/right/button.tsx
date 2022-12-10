import { Button, Form, Input, Radio, RadioGroup } from "ant-design-vue";
import { defineComponent, reactive, watch } from "vue";
import { editComdata } from "../right/use-right";

export const ButtonConfig = defineComponent({
  name: "ButtonConfig",

  setup: (props) => {
    const state = reactive({
      props: editComdata.data.props,
    });

    watch(
      () => editComdata.data,
      (oldValue, newValue) => {
        console.log("change1111");
        state.props = newValue.props;
      },
      {
        deep: true,
      }
    );

    return () => {
      return (
        <div>
          {JSON.stringify(state.props)}
          <Form layout="vertical">
            <Form.Item label="文本内容">
              <Input vModel={[state.props.text, "value"]}></Input>
            </Form.Item>
            <Form.Item label="type">
              <RadioGroup vModel={[state.props.type, "value"]}>
                <Radio value="primary">primary</Radio>
                <Radio value="ghost">ghost</Radio>
                <Radio value="dashed">dashed</Radio>
                <Radio value="default">default</Radio>
                <Radio value="link">link</Radio>
                <Radio value="text">text</Radio>
              </RadioGroup>
            </Form.Item>
            <Form.Item label="size">
              <RadioGroup vModel={[state.props.size, "value"]}>
                <Radio value="large">large</Radio>
                <Radio value="middle">middle</Radio>
                <Radio value="small">small</Radio>
              </RadioGroup>
            </Form.Item>
            <Form.Item label="shape">
              <RadioGroup vModel={[state.props.shape, "value"]}>
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
