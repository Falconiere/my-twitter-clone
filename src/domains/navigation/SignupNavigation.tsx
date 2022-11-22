import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DateOfBirth} from 'domains/signinup/screens/DateOfBirth';
import {Email} from 'domains/signinup/screens/Email';
import {Password} from 'domains/signinup/screens/Password';
import {UserName} from 'domains/signinup/screens/UserName';
import {SignupNavigationList} from 'domains/navigation/types';

const {Navigator, Screen} = createNativeStackNavigator<SignupNavigationList>();

export function SignupNavigation() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="UserName" component={UserName} />
      <Screen name="Email" component={Email} />
      <Screen name="DateOfBirth" component={DateOfBirth} />
      <Screen name="Password" component={Password} />
    </Navigator>
  );
}
