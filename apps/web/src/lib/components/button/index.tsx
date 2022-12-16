import { Button } from "ant-design-vue";
import buttonProps from "ant-design-vue/lib/button/buttonTypes";
import { defineComponent } from "vue";
export const UraButton = defineComponent({
  props: {
    text: {},
    ...buttonProps(),
  },
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    console.log(slots);
    return () => {
      return (
        <Button {...props} {...attrs} v-slots={
          {
            default: props.text,
            icon: props.icon?.()
          }
        }>
        </Button>
      );
    };
  },
});