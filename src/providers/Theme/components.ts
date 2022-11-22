import {Theme} from 'native-base';
import {InterfaceScrollViewProps} from 'native-base/lib/typescript/components/basic/ScrollView/types';
import {InterfaceButtonProps} from 'native-base/lib/typescript/components/primitives/Button/types';
import {InterfaceInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';
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
  ScrollView: {
    baseStyle: {
      bg: 'background.dark',
      p: 6,
      _contentContainerStyle: {
        flex: 1,
      },
    },
  },
  Input: {
    baseStyle: {
      minH: 45,
      fontSize: 'lg',
      color: 'white',
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
  ScrollView: Component<InterfaceScrollViewProps>;
  Input: Component<InterfaceInputProps>;
}

export type Components = CustomComponents &
  Omit<NativeBaseComponents, keyof CustomComponents>;
