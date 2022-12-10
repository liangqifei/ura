import { defineComponent } from "vue";
import draggable from "vuedraggable";
import { getRegisterComponentsList } from "../core/use-register";
import "./index.less";
export default defineComponent({
  name: "left-components-section",
  components: { draggable },
  setup() {
    const headerList = getRegisterComponentsList();
    return () => {
      return (
        <div>
          {/* {NestedDraggable22(headerList)} */}
          {headerList.map((config) => {
            return (
              <div class="left-edit-card">
                <div class="title">{config.preview.text}</div>
                <div class="content">
                  <div class="handle">1111111</div>
                  <draggable
                    list={[config]}
                    sort={false}
                    group={{ name: "g1", pull: "clone", put: false }}
                    item-key="componentsKey"
                    onClone={(aaa) => {
                      console.log(aaa);
                    }}
                    v-slots={{
                      item: ({ element }) => {
                        const config = element;
                        return config.preview.render && config.preview.render();
                      },
                    }}
                  ></draggable>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  },
});
