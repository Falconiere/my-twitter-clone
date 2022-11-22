import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {ScrollView, Text, View} from 'native-base';

export function Profile() {
  return (
    <>
      <NavigationHeader />
      <ScrollView _contentContainerStyle={{flex: 1}} bg="background.default">
        <View flex={1} alignItems="center">
          <Text color="white" m="auto">
            Profile
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
