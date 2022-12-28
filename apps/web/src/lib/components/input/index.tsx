import { Form, Input } from "ant-design-vue";
import inputProps from "ant-design-vue/lib/input/inputProps";
import { defineComponent, } from "vue";
export const UraInput = defineComponent({
  props: {
    ...inputProps(),
    hasFormItem: {
      type: Boolean,
      default: true
    },
    formItemProps: {
      type: Object,
      default: () => { }
    },
    formModel: {
      type: Object,
      default: () => { }
    },
    modelName: {
      type: String,
      default: ''
    },
  },
  inheritAttrs: false,
  setup(props, { attrs, emit, slots }) {

    return () => {
      return props.hasFormItem ? <div>
        <Form.Item {...props.formItemProps}>
          <Input {...props}  {...attrs} v-slots={slots} v-model:value={props.formModel[props.modelName]}>
          </Input>
        </Form.Item>
      </div> :
        <Input {...props}  {...attrs} v-slots={slots}>
        </Input>
    };
  },
});