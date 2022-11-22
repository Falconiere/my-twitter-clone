import {Theme} from 'native-base';
import {InterfaceFlatListProps} from 'native-base/lib/typescript/components/basic/FlatList/types';
import {InterfaceScrollViewProps} from 'native-base/lib/typescript/components/basic/ScrollView/types';
import {InterfaceDividerProps} from 'native-base/lib/typescript/components/composites/Divider/types';
import {InterfaceButtonProps} from 'native-base/lib/typescript/components/primitives/Button/types';
import {InterfaceInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';
import {Component, Variant} from './types';

export const components: CustomComponents = {
  Button: {
    variants: {
      primary: {
        backgroundColor: 'primary',
        borderColor: 'primary',
        borderWidth: 1,
        _text: {
          color: 'white',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        borderColor: 'brand.lightGray',
        borderWidth: 1,
        _text: {
          color: 'white',
        },
      },
    },
    defaultProps: {
      variant: 'primary',
    },
    baseStyle: {
      _pressed: {
        opacity: 0.7,
      },
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
  Divider: {
    baseStyle: {
      // TODO: fix typescript error
      //@ts-ignore
      borderColor: 'brand.lightGray',
      borderWidth: 0.5,
      _text: {
        color: 'white',
      },
    },
  },
  Text: {
    baseStyle: {
      color: 'white',
    },
  },
  FlatList: {
    // TODO: fix typescript error
    //@ts-ignore
    baseStyle: {
      bg: 'background.default',
      py: 2,
      _contentContainerStyle: {
        flex: 1,
      },
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
      secondary: Variant<InterfaceButtonProps>;
    }
  >;
  ScrollView: Component<InterfaceScrollViewProps>;
  Input: Component<InterfaceInputProps>;
  Divider: Component<InterfaceDividerProps>;
  FlatList: Component<InterfaceFlatListProps<{}>>;
  Text: Component<InterfaceTextProps<{}>>;
}

export type Components = CustomComponents &
  Omit<NativeBaseComponents, keyof CustomComponents>;
