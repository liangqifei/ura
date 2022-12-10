import { reactive } from "vue";

export const editComdata = reactive({
  data: {},
});

export const initRightData = (data, index) => {
  editComdata.data = data;
};
