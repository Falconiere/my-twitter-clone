import {Text, View} from 'native-base';
import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'components/NavigationHeader';

export function Messages() {
  return (
    <>
      <NavigationHeader
        safeAreaTop
        headerLeft={<AvatarHeader />}
        headerCenter={
          <Text color="white" fontWeight="bold">
            Messages
          </Text>
        }
      />
      <View
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="background.default">
        <Text color={'white'}>Messages</Text>
      </View>
    </>
  );
}
