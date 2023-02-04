import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {avatarUrl} from 'mocks/twitters';
import {Avatar, Text, View} from 'native-base';

export function Notifications() {
  return (
    <>
      <NavigationHeader
        headerLeft={<Avatar source={{uri: avatarUrl}} size="xs" />}
        headerCenter="Notifications"
        safeAreaTop
      />
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="background.default">
        <Text color={'white'}>Notifications</Text>
      </View>
    </>
  );
}
