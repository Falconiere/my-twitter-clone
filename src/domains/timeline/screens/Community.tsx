import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {Text, YStack} from 'tamagui';

export function Community() {
  return (
    <>
      <NavigationHeader
        headerLeft={<AvatarHeader />}
        headerCenter="Community"
      />
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="$background">
        <Text color="$white">Community</Text>
      </YStack>
    </>
  );
}
