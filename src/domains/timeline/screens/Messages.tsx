import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {Text, YStack} from 'tamagui';

export function Messages() {
  return (
    <>
      <NavigationHeader headerLeft={<AvatarHeader />} headerCenter="Messages" />
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="$background">
        <Text color="$white">Messages</Text>
      </YStack>
    </>
  );
}
