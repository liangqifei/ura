import { Layout } from "ant-design-vue";
import { cloneDeep } from "lodash-es";
import { defineComponent, reactive } from "vue";
import draggable from "vuedraggable";
import { editComdata } from "../right/use-right";
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
      pageObj: {
        type: "pager",
        childrens: [],
      },
    });

    const NestedDraggableItem = ({ element, index }) => {
      const propsaa = element.props;
      const RenderCom = element.render();
      console.log(element.props);
      return (
        <div style="padding:10px;solid 1px red ">
          <RenderCom
            onClick={(e) => {
              e.stopPropagation();
              editComdata.value = element;
              //当前的数据和key传递给右侧
            }}
            {...element.props}
            v-slots={{
              default: () => {
                return (
                  element.type !== "normal" &&
                  NestedDraggable22(element.childrens)
                );
              },
            }}
          ></RenderCom>
          {/* {element.type !== "block" && NestedDraggable22(element.childrens)} */}
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
          onSort={() => {
            console.log(stateJson.pageObj);
            const data = cloneDeep(stateJson.pageObj);
            stateJson.pageObj = data;
            console.log(stateJson.pageObj);
          }}
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
            {NestedDraggable22(stateJson.pageObj.childrens)}
            {console.log(JSON.stringify(stateJson))}
          </LayoutContent>
        </Layout>
      );
    };
  },
});
