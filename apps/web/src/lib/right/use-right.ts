import { ref } from "vue";

export const editComdata = ref({});

export const initRightData = (data) => {
  console.log(data);
  editComdata.value = data;
};
