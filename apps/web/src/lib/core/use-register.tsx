import { UraButton } from "ui";

const registerMaps = new Map<string, ComponentsItem>();
const registerList: ListComponents[] = [];

type ListComponents = [string, ComponentsItem];
export const registerComponents = (config: ComponentsItem) => {
  if (!registerMaps.has(config.componentsKey)) {
    registerList.push([config.componentsKey, config]);
    registerMaps.set(config.componentsKey, config);
  }
};

export const getRegisterComponents = (
  componentsKey: ComponentsItem["componentsKey"]
) => {
  if (registerMaps.has(componentsKey)) {
    registerMaps.get(componentsKey);
  }
};

export const getRegisterComponentsList = () => {
  return registerList;
};

type ComponentsItem = {
  componentsKey: string;
  render: (props?: any) => JSX.Element;
  preview: PreviewOptions;
};
type PreviewOptions = {
  text?: string;
  options?: any;
  render?: () => JSX.Element;
};

registerComponents({
  componentsKey: "ura-button",
  render: () => <UraButton></UraButton>,
  preview: {
    text: "按钮组件",
    render: () => (
      <UraButton type="primary" danger>
        1111
      </UraButton>
    ),
  },
});
