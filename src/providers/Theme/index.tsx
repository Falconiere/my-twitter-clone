import {ReactNode} from 'react';
import {NativeBaseProvider, extendTheme, v33xTheme} from 'native-base';
import {Colors, colors} from './colors';
import {Components, components} from './components';

const theme = extendTheme(v33xTheme as any, {
  colors,
  components,
});

declare module 'native-base' {
  interface ICustomTheme {
    colors: Colors;
    components: Components;
  }
}

export function ThemeProvider({children}: {children: ReactNode}) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
