import {Row, ScrollView, Text} from 'native-base';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {Pressable} from 'components/Pressable';
import {Routes} from 'routes/types';
import {SidebarHeader} from './SidebarHeader';

import {Icon} from 'components/Icon';

export type SidebarContentItem = {
  label: string;
  routeName: keyof Routes;
  RouteIcon: () => JSX.Element;
};

const routes = [
  {
    label: 'Profile',
    routeName: 'Profile',
    RouteIcon: () => (
      <Icon name="user" family="Feather" color="white" size={20} />
    ),
  },
  {
    label: 'Topics',
    routeName: 'Profile',
    RouteIcon: () => (
      <Icon name="topic" family="MaterialIcons" color="white" size={20} />
    ),
  },
  {
    label: 'Bookmarks',
    routeName: 'Profile',
    RouteIcon: () => (
      <Icon name="bookmark" family="Feather" color="white" size={20} />
    ),
  },
  {
    label: 'Lists',
    routeName: 'Profile',
    RouteIcon: () => (
      <Icon name="list" family="Feather" color="white" size={20} />
    ),
  },
  {
    label: 'Settings',
    routeName: 'Settings',
    RouteIcon: () => (
      <Icon name="settings" family="Feather" color="white" size={20} />
    ),
  },
] as SidebarContentItem[];

export function SidebarContent() {
  const navigation = useNavigation();
  const handleNavigation = (route: keyof Routes) => {
    navigation.navigate(route);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <ScrollView bg="brand.black" p="4">
      <SidebarHeader />
      {routes.map(({label, RouteIcon, routeName}, idx) => (
        <Pressable
          onPress={() => handleNavigation(routeName)}
          key={`drawer-key-${idx}-${routeName}`}
          py={2}>
          <Row space={4} alignItems="center">
            <RouteIcon />
            <Text color="white" fontSize="xl">
              {label}
            </Text>
          </Row>
        </Pressable>
      ))}
    </ScrollView>
  );
}
