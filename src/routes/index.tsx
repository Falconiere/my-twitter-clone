import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {PrivateNavigation} from 'domains/navigation/PrivateNavigation';

import {QueryClientProvider} from 'providers/QueryClient';

import {ThemeProvider} from 'providers/Theme';

const RootStack = createStackNavigator();
export function Routes() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen
              name="PrivateNavigation"
              component={PrivateNavigation}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
