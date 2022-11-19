import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type MainBottomNavigationList = BottomTabNavigationProp<{
  Home: undefined;
  Community: undefined;
  Explorer: undefined;
  Notifications: undefined;
  Messages: undefined;
}>;

export type PrivateNavigationList = CompositeNavigationProp<{
  MainBottomNavigation: MainBottomNavigationList;
  PostForm: undefined;
}>;

export type RouteList = {
  PrivateNavigation: PrivateNavigationList;
  PostForm: undefined;
};
export interface RootStackParamList extends RouteList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
