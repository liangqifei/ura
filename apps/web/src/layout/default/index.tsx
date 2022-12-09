import {
  UraButton,
  UraLayout,
  UraLayoutContent,
  UraLayoutFooter,
  UraLayoutHeader,
  UraLayoutSider,
} from "ui";
import "ui/src/components/button/style";
import "ui/src/components/layout/style";
import { defineComponent } from "vue";
import LeftSection from "../../lib/left";
// import { changeThemeHooks } from "../hooks/use-theme";
// const UraLayoutHeader = UraLayout.Header;
// "@setCustomTheme" from themePreprocessorPlugin,Color is essential in setCustomTheme method.
export default defineComponent({
  setup() {
    return () => {
      // const { changeTheme, themes } = changeThemeHooks();
      return (
        <UraLayout>
          <UraLayoutSider>
            <LeftSection></LeftSection>
          </UraLayoutSider>
          {/* <div
            onClick={() => {
              changeTheme(themes.mauve);
            }}
          >
            且ussssssss换
          </div> */}
          <UraLayout>
            <UraLayoutHeader>
              <div>HeaderHeaderHeader</div>
            </UraLayoutHeader>
            <UraLayoutContent>
              <div>sksksks</div>
              <UraButton></UraButton>
            </UraLayoutContent>
            <UraLayoutFooter>Footer</UraLayoutFooter>
          </UraLayout>
        </UraLayout>
      );
    };
  },
});
