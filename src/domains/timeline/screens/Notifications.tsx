import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {Text, YStack} from 'tamagui';

export function Notifications() {
  return (
    <>
      <NavigationHeader
        headerLeft={<AvatarHeader />}
        headerCenter="Notifications"
      />
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="$background">
        <Text color="$white">Notifications</Text>
      </YStack>
    </>
  );
}
