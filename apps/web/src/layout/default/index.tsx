import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
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

// const UraLayoutHeader = UraLayout.Header;
// "@setCustomTheme" from themePreprocessorPlugin,Color is essential in setCustomTheme method.
export default defineComponent({
  setup() {
    return () => {
      const aaa = ref("theme-default");
      const changeTheme = () => {
        if (aaa.value == "theme-mauve") {
          aaa.value = "theme-default";
          toggleTheme({
            scopeName: "theme-default",
          });
        } else {
          aaa.value = "theme-mauve";
          toggleTheme({
            scopeName: "theme-mauve",
          });
        }
      };
      return (
        <UraLayout>
          {/* <UraLayoutSider></UraLayoutSider> */}
          <div onClick={changeTheme}>
            且ussssssss换
            <div style={{ background: "#fff" }}>HeaderHeaderHeader</div>
            <div style={{ background: "#fff" }}>HeaderHeaderHeader</div>
          </div>
          <UraLayoutHeader>
            <div style={{ background: "#fff" }}>HeaderHeaderHeader</div>
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
