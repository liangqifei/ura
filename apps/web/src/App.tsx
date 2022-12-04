import { UraButton, UraConfigProvider, UraLayout } from "ui";
import "ui/src/components/button/style";
import "ui/src/components/layout/style";
import { defineComponent } from "vue";
const UraLayoutHeader = UraLayout.Header;
const UraLayoutContent = UraLayout.Content;
const UraLayoutFooter = UraLayout.Footer;

export default defineComponent({
  setup() {
    return () => {
      return (
        <UraConfigProvider prefixCls="ura">
          <UraLayout>
            <UraLayoutHeader>Header</UraLayoutHeader>
            <UraLayoutContent>
              <div>sksksks</div>
              <UraButton></UraButton>
            </UraLayoutContent>
            <UraLayoutFooter>Footer</UraLayoutFooter>
          </UraLayout>
        </UraConfigProvider>
      );
    };
  },
});
