import { Button, Form, Radio, RadioGroup, Switch, Input } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import { useEditStore } from "../../store/module/edit";
import { editComdata } from "../right/use-right";

export const InputConfig = defineComponent({
  name: "InputConfig",

  setup: (props) => {
    const editStore = useEditStore()
    const state = reactive({
      componentsProps: editStore.getCurrentComponentsProps,
    });

    return () => {
      return (
        <div>
          {JSON.stringify(state.componentsProps)}
          <Form layout="vertical">
            <Form.Item label="bordered">
              <Switch v-model:checked={state.componentsProps.bordered}></Switch>
            </Form.Item>
            <Form.Item label="allowClear">
              <Switch
                v-model:checked={state.componentsProps.allowClear}
              ></Switch>
            </Form.Item>
            <Form.Item label="disabled">
              <Switch v-model:checked={state.componentsProps.disabled}></Switch>
            </Form.Item>
            <Form.Item label="maxlength">
              <Input v-model:value={state.componentsProps.maxlength}></Input>
            </Form.Item>
            <Form.Item label="hasFormItem">
              <Switch v-model:checked={state.componentsProps.hasFormItem}></Switch>
            </Form.Item>
            {state.componentsProps.hasFormItem && <Form.Item label="FormItemLabel" >
              <Input
                v-model:value={state.componentsProps.formItemProps.label}
              ></Input>
            </Form.Item>}
            <Form.Item label="FormItemLabel" >
              <Input
                v-model:value={state.componentsProps.modelName}
              ></Input>
            </Form.Item>

            <Form.Item label="size">
              <RadioGroup vModel={[state.componentsProps.size, "value"]}>
                <Radio value="large">large</Radio>
                <Radio value="default">default</Radio>
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
