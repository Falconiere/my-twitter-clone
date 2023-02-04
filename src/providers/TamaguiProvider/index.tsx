import {ReactNode} from 'react';
import {TamaguiProvider as Provider} from 'tamagui';

import config from './config';

export function TamaguiProvider({children}: {children: ReactNode}) {
  return <Provider config={config}>{children}</Provider>;
}
