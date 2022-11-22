import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostForm} from 'domains/timeline/screens/PostForm';
import {Profile} from 'domains/user/screens/Profile';
import {PrivateNavigationList} from 'routes/types';

import {SideBarNavigation} from './SideBarNavigation';

const Stack = createNativeStackNavigator<PrivateNavigationList>();

export function PrivateNavigation() {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SideBarNavigation" component={SideBarNavigation} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="PostForm" component={PostForm} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
}
