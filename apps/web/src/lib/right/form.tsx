import { Button, Form, Input, Radio, RadioGroup } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import { useEditStore } from "../../store/module/edit";

export const FormConfig = defineComponent({
  name: "FormConfig",

  setup: (props) => {
    const editStore = useEditStore()
    const state = reactive({
      componentsProps: editStore.getCurrentComponentsProps,
    });
    return () => {
      return (
        <div>
          <Form layout="vertical">
            <Form.Item label="layout">
              <RadioGroup vModel={[state.componentsProps.layout, "value"]}>
                <Radio value="horizontal">horizontal</Radio>
                <Radio value="vertical">vertical</Radio>
                <Radio value="inline">inline</Radio>
              </RadioGroup>
            </Form.Item>
            <Form.Item label="name">
              <Input
                v-model:value={state.componentsProps.name}
              ></Input>
            </Form.Item>
            <Form.Item label="model">
              {/* <Input
                v-model:value={state.componentsProps.formModel}
              ></Input> */}
              {JSON.stringify(state.componentsProps.formModel)}
            </Form.Item>
          </Form>
          <Button>确定</Button>
        </div>
      );
    };
  },
});
