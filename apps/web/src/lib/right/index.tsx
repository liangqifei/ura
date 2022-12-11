import { defineComponent, ref } from "vue";
import { editComdata } from "../right/use-right";
import { ButtonConfig } from "./button";
import "./index.less";
// @ts-ignore
import { onClickOutside } from '@vueuse/core'
export default defineComponent({
  name: "buttonRightPan",
  setup() {
    const target = ref(null)
    onClickOutside(target, (event) => {
      editComdata.value = {}
    })
    return () => (
      <div class="edit-right-section" ref={target}>
        {JSON.stringify(editComdata.value)}
        <div>
          {editComdata.value.componentsKey == "ura-button" && <ButtonConfig />}
        </div>
      </div>
    );
  },
});
