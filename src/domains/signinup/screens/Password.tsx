import {Button, Input, View, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';

export function Password() {
  const navigation = useNavigation();
  return (
    <>
      <NavigationHeader headerCenter="Password" />
      <View bg="background.default" flex={1} p={6}>
        <VStack space={2}>
          <Input placeholder="Password" />
          <Button onPress={() => navigation.navigate('PrivateNavigation')}>
            Next
          </Button>
        </VStack>
      </View>
    </>
  );
}
