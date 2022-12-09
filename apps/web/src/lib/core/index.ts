import { Component, ref, unref } from "vue"

const componentMap = new Map<ComponentItemConfig['componentKey'], Component>()

export interface ComponentItem {
  init: () => void;
  name: string; // map上key名
  display: string; //显示名称
  resize: boolean;
  needPosition: boolean; //是否要使用拖拽的点
  initData: Partial<IBlockType>; //初始值
  props: Record<string, CreateOptionsResAll[]>; // 配置属性
  render: (data: IBlockType, context: any, store: Store, config: UserConfig) => JSX.Element;
  destroy: () => void;
  remoteConfig: Record<string, any>;
}

class ComponentsPluginMap {
  constructor() {
    this.componentMap = new Map<ComponentItemConfig['componentKey'], Component>()
  }
}

export const registerComponents = (config: ComponentItemConfig) => {
  if (!unref(componentMap).has(config.componentKey)) {
    unref(componentMap).set(config.componentKey, config)
  }
}

export const getComponents

export type ComponentItemConfig = {
  componentKey: string;
  render: () => Component;
  preview: PreviewOptions
}

export type PreviewOptions = {
  text: string,
  display: () => Component,
  team?: string;
  group?: string;
}