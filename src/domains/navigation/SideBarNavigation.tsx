import {createDrawerNavigator} from '@react-navigation/drawer';
import {SidebarContent} from 'domains/navigation/components/SidebarContent';

import {MainBottomNavigation} from './MainBottomNavigation';

const Drawer = createDrawerNavigator();

export function SideBarNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={() => <SidebarContent />}>
      <Drawer.Screen
        name="MainBottomNavigation"
        component={MainBottomNavigation}
      />
    </Drawer.Navigator>
  );
}
