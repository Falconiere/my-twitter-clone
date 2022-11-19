import {Theme} from 'native-base';
import {InterfaceButtonProps} from 'native-base/lib/typescript/components/primitives/Button/types';
import {Component, Variant} from './types';

export const components: CustomComponents = {
  Button: {
    variants: {
      primary: {
        backgroundColor: 'primary',
        borderColor: 'primary',
        _text: {
          color: 'white',
        },
      },
    },
    defaultProps: {
      variant: 'primary',
    },
  },
};

type NativeBaseComponents = {
  [key in keyof Theme['components']]: Theme['components'][key];
};

interface CustomComponents {
  Button: Component<
    InterfaceButtonProps,
    {
      primary: Variant<InterfaceButtonProps>;
    }
  >;
}

export type Components = CustomComponents &
  Omit<NativeBaseComponents, keyof CustomComponents>;
