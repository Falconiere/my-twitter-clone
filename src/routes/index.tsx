import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrivateNavigation} from 'domains/navigation/PrivateNavigation';
import {RootStackParamList} from 'domains/navigation/types';
import {Login} from 'domains/signinup/screens/Login';

import {QueryClientProvider} from 'providers/QueryClient';
import {ThemeProvider} from 'providers/Theme';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();
export function Routes() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Navigator screenOptions={{headerShown: false}}>
            <Screen name="PrivateNavigation" component={PrivateNavigation} />
            <Screen name="Login" component={Login} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
