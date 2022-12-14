import {Text, View} from 'native-base';
import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';

export function Explorer() {
  return (
    <>
      <NavigationHeader headerLeft={<AvatarHeader />} headerCenter="Explorer" />
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="background.default">
        <Text color={'white'}>Explorer</Text>
      </View>
    </>
  );
}
