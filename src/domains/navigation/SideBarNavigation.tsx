import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  SidebarContent,
  SidebarContentItem,
} from 'domains/navigation/components/SidebarContent';

import {MainBottomNavigation} from './MainBottomNavigation';

const Drawer = createDrawerNavigator();

const routes = [
  {
    label: 'Home',
    routeName: 'PostForm',
  },
] as SidebarContentItem[];

export function SideBarNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={() => <SidebarContent routes={routes} />}>
      <Drawer.Screen
        name="MainBottomNavigation"
        component={MainBottomNavigation}
      />
    </Drawer.Navigator>
  );
}
