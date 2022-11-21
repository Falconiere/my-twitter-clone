import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent, DrawerContentItem} from 'components/DrawerContent';

import {MainBottomNavigation} from './MainBottomNavigation';

const Drawer = createDrawerNavigator();

const routes = [
  {
    label: 'Home',
    routeName: 'PostForm',
  },
] as DrawerContentItem[];

export function SideBarNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={() => <DrawerContent routes={routes} />}>
      <Drawer.Screen
        name="MainBottomNavigation"
        component={MainBottomNavigation}
      />
    </Drawer.Navigator>
  );
}
