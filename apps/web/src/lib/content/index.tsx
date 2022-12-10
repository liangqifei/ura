import { Layout } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import draggable from "vuedraggable";
import { getRegisterComponents } from "../core/use-register";
import { initRightData } from "../right/use-right";
import { useContentHooks } from "./use-content";

// import { changeThemeHooks } from "../../layout/hooks/use-theme";
const LayoutContent = Layout.Content;
export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    const [pager] = useContentHooks();
    const stateJson = reactive({
      type: "pager",
      childrens: [],
    });

    const NestedDraggableItem = ({ element, index }) => {
      const Com = getRegisterComponents(element.componentsKey);
      const RenderCom = Com.render(Com.props);
      return (
        <div>
          <RenderCom
            onClick={(e) => {
              e.stopPropagation();
              initRightData(Com);
              //当前的数据和key传递给右侧
            }}
          />
          {Com?.type == "normal" ? "" : NestedDraggable22(element.childrens)}
        </div>
      );
    };

    const NestedDraggable22 = (list) => {
      return (
        <draggable
          class="dragArea"
          style="border:solid 1px #000;padding:10px"
          list={list}
          group={{ name: "g1" }}
          item-key="uid"
          v-slots={{
            item: (listItem) => NestedDraggableItem(listItem),
          }}
        ></draggable>
      );
    };

    return () => {
      return (
        <Layout>
          <LayoutContent>
            {NestedDraggable22(stateJson.childrens)}
            {JSON.stringify(stateJson)}
          </LayoutContent>
        </Layout>
      );
    };
  },
});
