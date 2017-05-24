/* @flow */

declare type React$ComposableComponent =
  | Class<React$Component<any, any, any>>
  | ((props: any) => ?React$Element<any>);
