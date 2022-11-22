import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {DrawerNavigationProp} from '@react-navigation/drawer';

export type MainBottomNavigationList = BottomTabNavigationProp<
  Pick<
    RootStackParamList,
    'Home' | 'Explorer' | 'Community' | 'Notifications' | 'Messages'
  >
>;

export type PrivateNavigationList = DrawerNavigationProp<{
  MainBottomNavigationList: MainBottomNavigationList;
}>;

export type RootStackParamList = {
  Home: undefined;
  Explorer: undefined;
  Community: undefined;
  Notifications: undefined;
  Messages: undefined;
  PostForm: undefined;
  Login: undefined;
  Profile: undefined;
  Settings: undefined;
  PrivateNavigation: PrivateNavigationList | undefined;
};

export type Routes = {
  [key in keyof Omit<RootStackParamList, 'PrivateNavigation'>]: key;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
