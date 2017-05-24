/* @flow */

type ClassComponentType<D, P, S> = Class<React$Component<D, P, S>>;
type StatelessComponentType<P> = (props: P) => ?React$Element<any>;
type ComponentType<D, P> =
  | StatelessComponentType<P>
  | ClassComponentType<D, P, any>;
type HocType<OP, P, D = *> = (
  component: ComponentType<D, P>,
) => ClassComponentType<D, OP, void>;

declare module 'recompact' {
  /* HOCs */
  declare function onlyUpdateForKeys<P>(
    propKeys: Array<$Keys<$Shape<P>>>,
  ): HocType<P, P>;
  declare function pure<D, OP>(
    component: ComponentType<D, OP>,
  ): ClassComponentType<D, OP, void>;

  /* Utilities */
  declare function compose<A, B>(
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => B;
  declare function compose<A, B, C>(
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => C;
  declare function compose<A, B, C, D>(
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => D;
  declare function compose<A, B, C, D, E>(
    de: (d: D) => E,
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => E;
  declare function compose<A, B, C, D, E, F>(
    ef: (e: E) => F,
    de: (d: D) => E,
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => F;
  declare function compose<A, B, C, D, E, F, G>(
    fg: (f: F) => G,
    ef: (e: E) => F,
    de: (d: D) => E,
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => G;
  declare function createEagerElement<P>(
    type: ComponentType<any, P> | string,
    props: ?P,
    children?: ?(React$Element<any> | Array<React$Element<any>>),
  ): React$Element<any>;
  declare function hoistStatics<H: HocType<any, any>>(hoc: H): H;
  declare function wrapDisplayName(
    C: ComponentType<any, any>,
    wrapperName: string,
  ): string;
}

/* Global helper types */
declare type EnhancedComponentType<P, D = void> = ClassComponentType<
  D,
  P,
  void,
>;
