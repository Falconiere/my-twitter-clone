import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PostForm} from 'domains/timeline/screens/PostForm';

import {SideBarNavigation} from './SideBarNavigation';

const Stack = createNativeStackNavigator();

export function PrivateNavigation() {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SideBarNavigation" component={SideBarNavigation} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="PostForm" component={PostForm} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
}
