import type {ITheme} from 'native-base';

export type Variant<P extends Record<string, any>> =
  | P
  | ((props: P) => P | string);

export type BaseStyle<P> = P | ((props: P & ITheme) => P);

export type Component<
  P extends Record<string, any>,
  V extends Record<string, any> | false = false,
> = {
  defaultProps?: P;
  baseStyle?: BaseStyle<P>;
  sizes?: Partial<{[key in 'sm' | 'md' | 'lg' | 'xl']: P}>;
} & (V extends false ? {} : {variants: V});
