import { defineComponent } from "vue";
import draggable from "vuedraggable";
import {
  getRegisterComponents,
  getRegisterComponentsList,
} from "../core/use-register";
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
            const { preview } = getRegisterComponents(config.componentsKey);
            return (
              <div class="left-edit-card">
                <div class="title">{preview.text}</div>
                <div class="content">
                  <draggable
                    list={[config]}
                    sort={false}
                    group={{ name: "g1", pull: "clone", put: false }}
                    item-key="index"
                    v-slots={{
                      item: ({ element }) => {
                        return preview.render(element.props);
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
