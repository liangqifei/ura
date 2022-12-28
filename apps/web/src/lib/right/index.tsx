import { computed, defineComponent, ref, unref } from "vue";
import { editComdata } from "../right/use-right";
import { ButtonConfig } from "./button";
import { InputConfig } from "./input";
import { FormConfig } from "./form";

import { useEditStore } from '../../store/module/edit'

import "./index.less";
// @ts-ignore
import { onClickOutside } from '@vueuse/core'
export default defineComponent({
  name: "buttonRightPan",
  setup() {
    const target = ref(null)
    const editStore = useEditStore()
    onClickOutside(target, (event) => {
      editStore.setCurrentComponents({})
    })

    const componentsKey = computed(() => {
      return editStore.getCurrentComponentsKey
    })
    return () => (
      <div class="edit-right-section" ref={target}>
        <div>
          {unref(componentsKey) == "ura-button" && <ButtonConfig />}
          {unref(componentsKey) == "ura-form-item" && <ButtonConfig />}
          {unref(componentsKey) == "ura-input" && <InputConfig />}
          {unref(componentsKey) == "ura-form" && <FormConfig />}
        </div>
      </div>
    );
  },
});
