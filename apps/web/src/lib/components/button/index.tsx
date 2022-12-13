import { Button } from "ant-design-vue";
import buttonProps from "ant-design-vue/lib/button/buttonTypes";
import { defineComponent } from "vue";
export const UraButton = defineComponent({
  props: {
    text: {},
    ...buttonProps(),
  },
  inheritAttrs: false,
  setup(props, { attrs }) {
    console.log(props);
    return () => {
      return (
        <Button {...props} {...attrs}>
          {props.text}
        </Button>
      );
    };
  },
});