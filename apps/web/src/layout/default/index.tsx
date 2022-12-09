import {
  UraButton,
  UraLayout,
  UraLayoutContent,
  UraLayoutFooter,
  UraLayoutHeader,
} from "ui";
import "ui/src/components/button/style";
import "ui/src/components/layout/style";
import { defineComponent, ref } from "vue";
import { changeThemeHooks } from '../hooks/use-theme'
// const UraLayoutHeader = UraLayout.Header;
// "@setCustomTheme" from themePreprocessorPlugin,Color is essential in setCustomTheme method.
export default defineComponent({
  setup() {
    return () => {
      const { changeTheme, themes } = changeThemeHooks()
      return (
        <UraLayout>
          {/* <UraLayoutSider></UraLayoutSider> */}
          <div onClick={() => { changeTheme(themes.default) }}>
            且ussssssss换
          </div>
          <UraLayoutHeader>
            <div >HeaderHeaderHeader</div>
          </UraLayoutHeader>
          <UraLayoutContent>
            <div>sksksks</div>
            <UraButton></UraButton>
          </UraLayoutContent>
          <UraLayoutFooter>Footer</UraLayoutFooter>
        </UraLayout>
      );
    };
  },
});
