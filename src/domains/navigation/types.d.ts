import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {DrawerNavigationProp} from '@react-navigation/drawer';

export type MainBottomNavigationList = BottomTabNavigationProp<{
  Home: undefined;
  Community: undefined;
  Explorer: undefined;
  Notifications: undefined;
  Messages: undefined;
}>;

export type PrivateNavigationList = DrawerNavigationProp<{
  MainBottomNavigationList;
}>;

export interface RootStackParamList {
  PrivateNavigation: PrivateNavigationList;
  PostForm: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
