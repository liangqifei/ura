import { computed, reactive, ref } from "vue";
import { ComponentsItem } from "../core/use-register";
const editComdataObj = reactive({
  data: {} as ComponentsItem
});

export const editComdata = computed({
  get() {
    return editComdataObj.data
  },
  set(value) {
    editComdataObj.data = value
  }
})
