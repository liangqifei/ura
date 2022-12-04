import ConfigProvider from "ant-design-vue/es/config-provider";
import { defineComponent } from "vue";
import { uraConfigProviderProps } from "./types/props";
// import { provideGlobalConfig, useNamespace } from "../../hooks";
// const ns = useNamespace("config-provider");

const UraConfigProvider = defineComponent({
  name: "ura-config-provider",
  props: uraConfigProviderProps(),
  setup(props, { slots }) {
    console.log(slots);
    return () => (
      <ConfigProvider
        {...props}
        v-slots={{
          default: () => <>{slots && slots.default && slots.default()}</>,
        }}
      ></ConfigProvider>
    );
  },
});
export default UraConfigProvider;

export const config = ConfigProvider.config;
