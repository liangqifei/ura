import {
  Button,
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  LayoutSider,
} from "ant-design-vue";
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
        <Layout>
          <LayoutSider>
            <LeftSection></LeftSection>
          </LayoutSider>
          {/* <div
            onClick={() => {
              changeTheme(themes.mauve);
            }}
          >
            且ussssssss换
          </div> */}
          <Layout>
            <LayoutHeader>
              <div>HeaderHeaderHeader</div>
            </LayoutHeader>
            <LayoutContent>
              <div>sksksks</div>
              <Button></Button>
            </LayoutContent>
            <LayoutFooter>Footer</LayoutFooter>
          </Layout>
        </Layout>
      );
    };
  },
});
