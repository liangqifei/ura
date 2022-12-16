import { Layout } from "ant-design-vue";
import { cloneDeep } from "lodash-es";
import { defineComponent, reactive } from "vue";
import draggable from "vuedraggable";
import { getRegisterComponents } from "../core/use-register";
import { editComdata } from "../right/use-right";
import "./index.less";
import { useContentHooks } from "./use-content";
// import { changeThemeHooks } from "../../layout/hooks/use-theme";
const LayoutContent = Layout.Content;
import { useEditStore } from '../../store/module/edit'
import { watch } from "fs";
export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    const editStore = useEditStore();
    console.log(editStore.getCurrentPage)
    const stateJson = reactive({
      pageObj: editStore.getCurrentPage,
    });
    watch(() => stateJson.pageObj, () => {

    })
    console.log(editStore.getCurrentPage)
    const NestedDraggableItem = ({ element, index }) => {
      const { render, preview } = getRegisterComponents(element.componentsKey);
      const RenderCom = render;
      const comProps = element.props;

      console.log(element.props);
      return (
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              background: "rgba(0,0,0,0.1)",
            }}
          >
            {preview.text}
          </div>
          <RenderCom
            onClick={(e) => {
              e.stopPropagation();
              editStore.setCurrentComponents(element)
              // editComdata.value = element;
              //当前的数据和key传递给右侧
            }}
            {...comProps}
            v-slots={{
              default: () => {
                return (
                  element.type !== "normal" &&
                  NestedDraggable22(element.childrens)
                );
              },
            }}
          >
          </RenderCom>
        </div>
      );
    };

    const NestedDraggable22 = (list) => {
      return (
        <draggable
          class="dragArea"
          list={list}
          group={{ name: "g1" }}
          // item-key="uid"

          v-slots={{
            item: (listItem) => {
              return NestedDraggableItem(listItem);
            },
          }}
        ></draggable>
      );
    };

    return () => {
      return (
        <Layout>
          <LayoutContent class="edit-content-main">
            {stateJson.pageObj && NestedDraggable22(stateJson.pageObj.childrens)}
            {JSON.stringify(stateJson)}
          </LayoutContent>
        </Layout>
      );
    };
  },
});
