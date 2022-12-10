import { ref } from "vue";

const pager = ref([]);
const clear = () => {
  pager.value = [];
};

export const useContentHooks = () => {
  return [pager, { clear }];
};
