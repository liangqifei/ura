// stores/counter.js
import { defineStore } from 'pinia'
import { ComponentsItem } from '../../lib'
export const useEditStore = defineStore('editConfig', {
  state: () => {
    const data = localStorage.getItem('edit_store')
    return {
      currentComponents: {} as ComponentsItem,
      currentPageConfig: data ? JSON.parse(data)?.currentPageConfig : {
        type: "pager",
        childrens: [],
      }
    }
  },
  persist: {
    enabled: true,
    // 自定义持久化参数
    strategies: [
      {
        // 自定义key
        key: 'edit_store',
        // 自定义存储方式，默认sessionStorage
        storage: localStorage,
      }
    ]
  },
  getters: {
    getCurrentComponentsProps(state) {
      return state.currentComponents.props
    },
    getCurrentComponentsKey(state) {
      return state.currentComponents.componentsKey
    },
    getCurrentPage(state) {
      return state.currentPageConfig
    }
  },
  actions: {
    setCurrentComponents(component: ComponentsItem) {
      this.currentComponents = component
    },
    setPageConfig(config: ComponentsItem) {
      this.currentPageConfig = config
    },
  },
})

