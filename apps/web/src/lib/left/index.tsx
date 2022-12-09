import { defineComponent } from "vue";
import { getRegisterComponentsList } from "../core/use-register";
export default defineComponent({
  name: "left-components-section",
  setup() {
    const headerList = getRegisterComponentsList();
    console.log(headerList);

    return () => {
      return (
        <div>
          {headerList.map(([name, config]) => {
            console.log(config.preview.render);
            return (
              <div>
                <div>{config.preview.text}</div>
                <div>{config.preview.render && config.preview.render()}</div>
              </div>
            );
          })}
        </div>
      );
    };
    // return () => {
    //   return (
    //     <div>
    //       {headerList.forEach((item) => {
    //         console.log(item);
    //         return "11111";
    //         // return (
    //         //   <div>
    //         //     {name}111
    //         //     {config.render(config.options)}
    //         //   </div>
    //         // );
    //       })}
    //     </div>
    //   );
    // };
  },
});
