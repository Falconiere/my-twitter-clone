import {Button, Input, View, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';

export function DateOfBirth() {
  const navigation = useNavigation();
  return (
    <>
      <NavigationHeader headerCenter="DateOfBirth" />
      <View bg="background.default" flex={1} p={6}>
        <VStack space={2}>
          <Input placeholder="DateOfBirth" />
          <Button onPress={() => navigation.navigate('Password')}>Next</Button>
        </VStack>
      </View>
    </>
  );
}
