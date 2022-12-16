import { Form, Input } from "ant-design-vue";
import inputProps from "ant-design-vue/lib/input/inputProps";
import { defineComponent, } from "vue";
export const UraInput = defineComponent({
  props: {
    ...inputProps(),
    hasFormItem: {
      type: Boolean,
      default: true
    }
  },
  inheritAttrs: false,
  setup(props, { attrs, emit, slots }) {
    return () => {
      return props.hasFormItem ? <Form.Item>
        <Input {...props}  {...attrs} v-slots={slots}>
        </Input>
      </Form.Item> :
        <Input {...props}  {...attrs} v-slots={slots}>
        </Input>
    };
  },
});