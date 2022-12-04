import { UraButton, UraConfigProvider } from "ui";
import "ui/src/components/button/style";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => {
      return (
        <UraConfigProvider prefixCls="ura">
          <UraButton></UraButton>
        </UraConfigProvider>
      );
    };
  },
});
