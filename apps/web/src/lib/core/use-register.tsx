type ComponentsType = "pager" | "block" | "normal";
const registerMaps = {} as { [k: string]: ComponentsItem };
const registerList: ComponentsItem[] = [];

export const registerComponents = (config: ComponentsItem) => {
  if (!registerMaps[config.componentsKey]) {
    registerList.push(config);
    registerMaps[config.componentsKey] = config;
  }
};

export const getRegisterComponents = (
  componentsKey: ComponentsItem["componentsKey"]
) => {
  if (registerMaps[componentsKey]) {
    return registerMaps[componentsKey];
  }
  console.error(componentsKey + "没有该组件");
  return null;
  // return new Error(componentsKey + "没有该组件");
};

export const getRegisterComponentsList = () => {
  return registerList;
};

export type ComponentsItem = {
  componentsKey: string;
  render: (props?: any) => JSX.Element;
  type: ComponentsType;
  preview: PreviewOptions;
  props?: any;
  childrens?: ComponentsItem[];
};
type PreviewOptions = {
  text?: string;
  options?: any;
  render?: () => JSX.Element;
};
