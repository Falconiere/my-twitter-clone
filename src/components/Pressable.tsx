import {Stack} from 'tamagui';
import {Pressable as PressableRN, PressableProps} from 'react-native';

function Pressable({children, ...rest}: PressableProps) {
  return (
    <PressableRN {...rest}>
      <Stack>{children}</Stack>
    </PressableRN>
  );
}

export {Pressable};
