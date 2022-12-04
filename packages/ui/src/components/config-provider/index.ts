import { withInstall } from "../../utils";
import ConfigProvider from "./config-provider";

export * from "./config-provider";
export * from "./types/props";
export const UraConfigProvider = withInstall(ConfigProvider);

export default UraConfigProvider;
