import { UraConfigProvider } from "ui";
import { defineComponent } from "vue";
import LayoutCom from "./layout/default";
export default defineComponent({
  setup() {
    return () => {
      return (
        <UraConfigProvider prefixCls="ura">
          <LayoutCom></LayoutCom>
        </UraConfigProvider>
      );
    };
  },
});
