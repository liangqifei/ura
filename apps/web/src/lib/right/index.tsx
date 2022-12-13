import { defineComponent, ref } from "vue";
import { editComdata } from "../right/use-right";
import { ButtonConfig } from "./button";
import { InputConfig } from "./input";

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
          {editComdata.value.componentsKey == "ura-form-item" && <ButtonConfig />}
          {editComdata.value.componentsKey == "ura-input" && <InputConfig />}

        </div>
      </div>
    );
  },
});
