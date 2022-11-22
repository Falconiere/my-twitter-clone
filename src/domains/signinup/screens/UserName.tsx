import {Button, Input, View, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';

export function UserName() {
  const navigation = useNavigation();
  return (
    <>
      <NavigationHeader headerCenter="Username" />
      <View bg="background.default" flex={1} p={6}>
        <VStack space={2}>
          <Input placeholder="username" />
          <Button onPress={() => navigation.navigate('Email')}>Next</Button>
        </VStack>
      </View>
    </>
  );
}
