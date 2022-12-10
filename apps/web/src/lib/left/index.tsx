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
          {headerList.map((config, index) => {
            return (
              <div class="left-edit-card">
                <div class="title">{config.preview.text}</div>
                <div class="content">
                  <draggable
                    list={[config]}
                    sort={false}
                    group={{ name: "g1", pull: "clone", put: false }}
                    item-key="index"
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
