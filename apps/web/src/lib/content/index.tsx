import { Layout } from "ant-design-vue";
import { defineComponent, reactive } from "vue";
import draggable from "vuedraggable";
import { getRegisterComponents } from "../core/use-register";
import "./index.less";
// import { changeThemeHooks } from "../../layout/hooks/use-theme";
const LayoutContent = Layout.Content;
import { useEditStore } from '../../store/module/edit'
export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    const editStore = useEditStore();
    const stateJson = reactive({
      pageObj: editStore.getCurrentPage,
    });

    const NestedDraggableItem = ({ element, index }, formValue) => {
      const { render, preview } = getRegisterComponents(element.componentsKey);
      const comProps = element.props;
      const formModel = element.props.formModel || formValue
      const RenderCom = render;
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
            }}
            {...comProps}
            formModel={formModel}
            v-slots={{
              default: () => {
                return (
                  element.type !== "normal" ?
                    NestedDraggable22(element.childrens, formModel) : ''
                );
              },
            }}
          >
          </RenderCom>
        </div>
      );
    };

    const NestedDraggable22 = (list, formModel) => {
      return (
        <draggable
          class="dragArea"
          list={list}
          group={{ name: "g1" }}
          item-key="uid"
          onSort={() => {
            editStore.setPageConfig(stateJson.pageObj)
          }}
          v-slots={{
            item: (listItem) => {
              return NestedDraggableItem(listItem, formModel);
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
            {JSON.stringify(stateJson.pageObj)}
          </LayoutContent>
        </Layout>
      );
    };
  },
});
