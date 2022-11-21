import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrivateNavigation} from 'domains/navigation/PrivateNavigation';
import {RootStackParamList} from 'domains/navigation/types';

import {QueryClientProvider} from 'providers/QueryClient';

import {ThemeProvider} from 'providers/Theme';

const RootStack = createNativeStackNavigator<RootStackParamList>();
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
