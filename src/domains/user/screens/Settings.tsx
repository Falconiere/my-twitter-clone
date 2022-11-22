import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {ScrollView, Text, View} from 'native-base';

export function Settings() {
  return (
    <>
      <NavigationHeader safeAreaTop />
      <ScrollView _contentContainerStyle={{flex: 1}} bg="background.default">
        <View flex={1} alignItems="center">
          <Text color="white" m="auto">
            Settings
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
