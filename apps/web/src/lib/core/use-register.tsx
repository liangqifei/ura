import { Component } from "vue";

type ComponentsType = "pager" | "block" | "normal";
const registerMaps = {} as { [k: string]: ComponentsItem };
const registerList: ComponentsListItem[] = [];

export const registerComponents = (config: ComponentsItem) => {
  if (!registerMaps[config.componentsKey]) {
    registerList.push({
      componentsKey: config.componentsKey,
      props: config.props || {},
      type: config.type,
      childrens: config.childrens || [],
    });
    registerMaps[config.componentsKey] = config;
  }
};

export const getRegisterComponents = (
  componentsKey: ComponentsItem["componentsKey"]
): ComponentsItem => {
  return registerMaps[componentsKey];

  // return new Error(componentsKey + "没有该组件");
};

export const getRegisterComponentsList = () => {
  return registerList;
};

export type ComponentsItem = {
  componentsKey: string;
  render?: Component;
  type?: ComponentsType;
  preview: PreviewOptions;
  props?: any;
  childrens?: ComponentsItem[];
};

export type ComponentsListItem = {
  componentsKey: string;
  type?: ComponentsType;
  props: any;
  childrens?: ComponentsItem[];
};

type PreviewOptions = {
  text?: string;
  [k: string]: any
  // render?: () => unknown;
};
