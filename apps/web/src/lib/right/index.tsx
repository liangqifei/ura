import { defineComponent } from "vue";
import { editComdata } from "../right/use-right";
import { ButtonConfig } from "./button";
import "./index.less";

export default defineComponent({
  name: "buttonRightPan",
  setup() {
    return () => (
      <div class="edit-right-section">
        {editComdata.value.componentsKey}
        <div>
          {editComdata.value.componentsKey == "ura-button" && <ButtonConfig />}
        </div>
      </div>
    );
  },
});
