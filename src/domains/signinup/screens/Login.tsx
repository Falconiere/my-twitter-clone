import {useNavigation} from '@react-navigation/native';
import {Button, Input, ScrollView, Text, VStack} from 'native-base';

export function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <VStack space={4} m="auto" w="100%">
        <Text color="white" textAlign="center" fontSize="3xl">
          My Twitter Clone
        </Text>
        <Input placeholder="username or email" />
        <Input placeholder="password" />
        <Button onPress={() => navigation.navigate('PrivateNavigation')}>
          Login
        </Button>
      </VStack>
    </ScrollView>
  );
}
