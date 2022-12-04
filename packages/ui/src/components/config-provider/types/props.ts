import { configProviderProps } from "ant-design-vue/es/config-provider/context";
import type { ExtractPropTypes } from "vue";
// import { DEFAULT_COMPONENT_PREFIX } from "../../../tokens";
export const uraConfigProviderProps = () => configProviderProps();
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
