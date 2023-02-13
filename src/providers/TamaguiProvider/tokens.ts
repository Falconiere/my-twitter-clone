import {tokens as baseTokens} from '@tamagui/theme-base';
import shorthands from '@tamagui/shorthands';
import {createTokens} from '@tamagui/core';
import {colors} from './colors';
import {fonts} from './fonts';

const tokens = createTokens({
  ...baseTokens,
  color: colors,
  font: fonts,
  shorthands,
});

export {tokens};
