import { Button } from "ant-design-vue";
import { defineComponent } from "vue";
import "./style/index.ts"; // 加载 LESS
import { UraButtonProps, uraButtonProps } from "./types/props";
export default defineComponent({
  props: uraButtonProps as UraButtonProps,
  setup(props, { slots, attrs }) {
    return () => <Button v-slots={slots} {...props} {...attrs}></Button>;
  },
});
