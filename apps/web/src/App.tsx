import { ConfigProvider } from "ant-design-vue";
import { defineComponent } from "vue";
import EditorPage from "./lib/edit";

export default defineComponent({
  setup() {
    return () => {
      return (
        <ConfigProvider>
          <EditorPage></EditorPage>
        </ConfigProvider>
      );
    };
  },
});
