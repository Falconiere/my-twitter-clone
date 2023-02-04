import {config as configBase} from '@tamagui/config-base';
import {createTamagui} from '@tamagui/core';
import {tokens} from './tokens';

const appConfig = createTamagui({
  ...configBase,
  tokens,
});

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
