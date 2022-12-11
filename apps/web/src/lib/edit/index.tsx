import { Layout } from "ant-design-vue";
import { defineComponent } from "vue";
import CenterSection from "../content";
// import { changeThemeHooks } from "../../layout/hooks/use-theme";
import LeftSection from "../left";
import RightSection from "../right";
import '../core'
const LayoutSider = Layout.Sider;


export default defineComponent({
  setup() {
    return () => {
      // const { changeTheme, themes } = changeThemeHooks();
      return (
        <Layout>
          <LayoutSider>
            <LeftSection></LeftSection>
          </LayoutSider>
          <CenterSection></CenterSection>
          <RightSection></RightSection>
        </Layout>
      );
    };
  },
});
