import {tokens as baseTokens} from '@tamagui/theme-base';
import {createTokens} from 'tamagui';
import {colors} from './colors';

const tokens = createTokens({
  ...baseTokens,
  color: colors,
});

export {tokens};
