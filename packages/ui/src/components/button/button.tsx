import Button from "ant-design-vue/es/button";
import { defineComponent } from "vue";
import "./style/index.ts"; // 加载 LESS
export default defineComponent({
  setup() {
    return () => {
      return <Button type="primary">1111</Button>;
    };
  },
});
