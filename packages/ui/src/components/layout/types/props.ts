import { ExtractPropTypes } from "vue";

export type UraLayoutType = {
  Layout: import("vue").DefineComponent<
    {
      prefixCls: StringConstructor;
      hasSider: {
        type: BooleanConstructor;
        default: any;
      };
      tagName: StringConstructor;
    },
    () => JSX.Element,
    unknown,
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    // eslint-disable-next-line @typescript-eslint/ban-types
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
          type: BooleanConstructor;
          default: any;
        };
        tagName: StringConstructor;
      }>
    >,
    {
      hasSider: boolean;
    }
  >;
  Header: import("vue").DefineComponent<
    {
      prefixCls: StringConstructor;
      hasSider: {
        type: BooleanConstructor;
        default: any;
      };
      tagName: StringConstructor;
    },
    () => JSX.Element,
    unknown,
    import("vue").ComponentOptionsMixin,
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
          type: BooleanConstructor;
          default: any;
        };
        tagName: StringConstructor;
      }>
    >,
    {
      hasSider: boolean;
    }
  >;
  Content: import("vue").DefineComponent<
    {
      prefixCls: StringConstructor;
      hasSider: {
        type: BooleanConstructor;
        default: any;
      };
      tagName: StringConstructor;
    },
    () => JSX.Element,
    unknown,
    import("vue").ComponentOptionsMixin,
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
          type: BooleanConstructor;
          default: any;
        };
        tagName: StringConstructor;
      }>
    >,
    {
      hasSider: boolean;
    }
  >;
  Footer: import("vue").DefineComponent<
    {
      prefixCls: StringConstructor;
      hasSider: {
        type: BooleanConstructor;
        default: any;
      };
      tagName: StringConstructor;
    },
    () => JSX.Element,
    unknown,
    import("vue").ComponentOptionsMixin,
    string,
    import("vue").VNodeProps &
      import("vue").AllowedComponentProps &
      import("vue").ComponentCustomProps,
    Readonly<
      ExtractPropTypes<{
        prefixCls: StringConstructor;
        hasSider: {
          type: BooleanConstructor;
          default: any;
        };
        tagName: StringConstructor;
      }>
    >,
    {
      hasSider: boolean;
    }
  >;
};
