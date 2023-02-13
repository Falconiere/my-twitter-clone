import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {Text, YStack} from 'tamagui';

export function Explorer() {
  return (
    <>
      <NavigationHeader headerLeft={<AvatarHeader />} headerCenter="Explorer" />
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="$background">
        <Text color="$white">Explorer</Text>
      </YStack>
    </>
  );
}
