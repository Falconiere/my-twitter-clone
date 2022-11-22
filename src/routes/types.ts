export type MainBottomNavigationList = Pick<
  RootStackParamList,
  'Home' | 'Explorer' | 'Community' | 'Notifications' | 'Messages'
>;

export type SignupNavigationList = Pick<
  RootStackParamList,
  'UserName' | 'Email' | 'DateOfBirth' | 'Password'
>;
export type SideBarNavigationList = Pick<
  RootStackParamList,
  'MainBottomNavigation'
>;

export type PrivateNavigationList = Pick<
  RootStackParamList,
  | 'PrivateNavigation'
  | 'SideBarNavigation'
  | 'PostForm'
  | 'SignupNavigation'
  | 'Profile'
>;

export type RootStackParamList = {
  Home: undefined;
  Explorer: undefined;
  Community: undefined;
  Notifications: undefined;
  Messages: undefined;
  PostForm: undefined;

  Login: undefined;
  UserName: undefined;
  Email: undefined;
  DateOfBirth: undefined;
  Password: undefined;
  RecoverPassword: undefined;

  Profile: undefined;
  Settings: undefined;

  // STACK NAVIGATION
  PrivateNavigation: PrivateNavigationList | undefined;
  SignupNavigation: SignupNavigationList | undefined;
  MainBottomNavigation: MainBottomNavigationList | undefined;
  SideBarNavigation: SideBarNavigationList | undefined;
};

export type Routes = {
  [key in keyof Omit<RootStackParamList, 'PrivateNavigation'>]: key;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
