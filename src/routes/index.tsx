import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrivateNavigation} from 'domains/navigation/PrivateNavigation';

import {QueryClientProvider} from 'providers/QueryClient';

import {ThemeProvider} from 'providers/Theme';

const {Navigator, Screen} = createNativeStackNavigator();
export function Routes() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Navigator screenOptions={{headerShown: false}}>
            <Screen name="PrivateNavigation" component={PrivateNavigation} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
