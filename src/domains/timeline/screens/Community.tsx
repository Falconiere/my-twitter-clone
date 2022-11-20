import {NavigationHeader} from 'components/NavigationHeader';
import {avatarUrl} from 'mocks/twitters';
import {Avatar, Text, View} from 'native-base';

export function Community() {
  return (
    <>
      <NavigationHeader
        safeAreaTop
        headerLeft={<Avatar source={{uri: avatarUrl}} size="xs" />}
        headerCenter={
          <Text color="white" fontWeight="bold">
            Community
          </Text>
        }
      />
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="background.default">
        <Text color="white">Community</Text>
      </View>
    </>
  );
}
