import { Button, } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import { getRegisterComponents } from "../core/use-register";
import { editComdata } from "./use-right"


export const InputConfig = defineComponent({
  name: "InputConfig",

  setup: (props) => {

    const state = reactive({
      componentsProps: editComdata.value.props,
      scheams:[{
        "componentsKey": "ura-form",
        "props": {
  
        },
        "childrens":
          [{
            "componentsKey": "ura-form-item",
            "props": {
              label:"1111"
            },
            "childrens": [
              {
                "componentsKey": "ura-input",
                "props": {
                  'v-model':editComdata.value.props.size, //[,'value']
                },
                "childrens": []
              }]
          }]
      }]
    });

   

    const renderItem = (config) => {

      console.log(config)
      const { componentsKey, props, childrens } = config
      const { render, type } = getRegisterComponents(componentsKey);
      const RenderCom = render();

      return (
        <>
          <RenderCom
          {...props}
            v-slots={{
              default: () => {
                return (
                  type !== "normal" &&
                  renderList(childrens)
                );
              },
            }}
          >
          </RenderCom>
        </>
      );
    };

    const renderList = (list) => {
      return list && list.map(item => {
        return renderItem(item)
      })
    }

    return () => {
      return (
        <div>
          {renderList(state.scheams)}
          <Button>确定</Button>
        </div>
      );
    };
  },
});
