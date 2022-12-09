import { ButtonShape, ButtonType } from "ant-design-vue/es/button";
import { ButtonHTMLType } from "ant-design-vue/es/button/buttonTypes";
import { SizeType } from "ant-design-vue/es/config-provider";
import buttonProps from "ant-design-vue/lib/button/buttonTypes";
import { PropType } from "vue";

export type UraButtonProps = {
  prefixCls: StringConstructor;
  type: PropType<ButtonType>;
  htmlType: {
    type: PropType<ButtonHTMLType>;
    default: string;
  };
  shape: {
    type: PropType<ButtonShape>;
  };
  size: {
    type: PropType<SizeType>;
  };
  loading: {
    type: PropType<
      | boolean
      | {
          delay?: number;
        }
    >;
    default: () =>
      | boolean
      | {
          delay?: number;
        };
  };
  disabled: {
    type: BooleanConstructor;
    default: any;
  };
  ghost: {
    type: BooleanConstructor;
    default: any;
  };
  block: {
    type: BooleanConstructor;
    default: any;
  };
  danger: {
    type: BooleanConstructor;
    default: any;
  };
  icon: import("vue-types").VueTypeValidableDef<any>;
  href: StringConstructor;
  target: StringConstructor;
  title: StringConstructor;
  onClick: {
    type: PropType<(event: MouseEvent) => void>;
  };
  onMousedown: {
    type: PropType<(event: MouseEvent) => void>;
  };
};

export const uraButtonProps = {
  ...buttonProps(),
} as UraButtonProps;

export const uraButtonPropsFn = () => uraButtonProps;
