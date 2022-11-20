import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainBottomNavigation} from './MainBottomNavigation';

const Drawer = createDrawerNavigator();
export function SideBarNavigation() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="MainBottomNavigation"
        component={MainBottomNavigation}
      />
    </Drawer.Navigator>
  );
}
