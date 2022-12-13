import { Input } from "ant-design-vue";
import inputProps from "ant-design-vue/lib/input/inputProps";
import { defineComponent, } from "vue";
export const UraInput = defineComponent({
  props: {
    ...inputProps(),
    modelValue:{}
  },
  inheritAttrs: false,
  setup(props, { attrs,emit }) {
    return () => {
      console.log(props,attrs)
      return (
        <Input {...props}  {...attrs} onModelValue={[props.modelValue,'value']}>
        </Input>
      );
    };
  },
});