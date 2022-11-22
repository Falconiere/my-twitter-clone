import {Button, Input, View, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';

export function Email() {
  const navigation = useNavigation();
  return (
    <>
      <NavigationHeader headerCenter="Email" />
      <View bg="background.default" flex={1} p={6}>
        <VStack space={2}>
          <Input placeholder="Email" />
          <Button onPress={() => navigation.navigate('DateOfBirth')}>
            Next
          </Button>
        </VStack>
      </View>
    </>
  );
}
