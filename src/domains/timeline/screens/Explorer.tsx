import {Text, View} from 'native-base';
import {AvatarHeader} from 'components/AvatarHeader';
import {NavigationHeader} from 'components/NavigationHeader';

export function Explorer() {
  return (
    <>
      <NavigationHeader
        safeAreaTop
        headerLeft={<AvatarHeader />}
        headerCenter={
          <Text color="white" fontWeight="bold">
            Explorer
          </Text>
        }
      />
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
