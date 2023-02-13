import {config as baseConfig, createGenericFont} from '@tamagui/config-base';
import {createTamagui} from '@tamagui/core';
import {tokens} from './tokens';
import {themes} from './themes';

const config = createTamagui({
  ...baseConfig,
  tokens,
  themes,
  fonts: {
    heading: createGenericFont('Open Sans'),
    body: createGenericFont('Open Sans'),
  },
  defaultProps: {
    TextArea: {
      borderBottomStyle: undefined,
    },
  },
});

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`
  type TamaguiCustomConfig = typeof config;

  type ThemeFallbackValue = {};
}

export default config;
