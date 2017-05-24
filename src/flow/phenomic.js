/* @flow */

declare module 'phenomic/lib/enhance-collection' {
  declare module.exports: $Exports<'phenomic/lib/enhance-collection/index'>;
}

declare module 'phenomic/lib/redux/modules' {
  declare module.exports: $Exports<'phenomic/lib/redux/modules/index'>;
}

declare module 'phenomic/lib/redux/createStore' {
  declare module.exports: $Exports<'phenomic/lib/redux/createStore/index'>;
}

declare type PhenomicPagePropsType = {|
  __filename?: string,
  __url?: string,
  head: {
    title: ?string,
    layout: string,
  } & {+[key: string]: $FlowFixMe},
|};
