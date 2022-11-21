import {Button, Input, ScrollView, View, VStack} from 'native-base';

export function Login() {
  return (
    <ScrollView bg="background.dark" p="4">
      <View>
        <VStack safeAreaTop space={4}>
          <Input placeholder="username or email" />
          <Input placeholder="password" />
          <Button>Login</Button>
        </VStack>
      </View>
    </ScrollView>
  );
}
