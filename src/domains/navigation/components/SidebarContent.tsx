import {Avatar, Column, Row, ScrollView, Text} from 'native-base';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {Pressable} from '../../../components/Pressable';
import {Routes} from 'domains/navigation/types';
import {avatarUrl} from 'mocks/twitters';
import {SidebarHeader} from './SidebarHeader';

export type SidebarContentItem = {
  label: string;
  routeName: keyof Routes;
};

type SidebarContentProps = {
  routes: Array<SidebarContentItem>;
};

export function SidebarContent(props: SidebarContentProps) {
  const {routes} = props;
  const navigation = useNavigation();
  const handleNavigation = (route: keyof Routes) => {
    navigation.navigate(route);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <ScrollView bg="brand.black" p="4">
      <SidebarHeader />
      {routes.map(({label, routeName}) => (
        <Pressable
          onPress={() => handleNavigation(routeName)}
          key={`drawer-key-${routeName}`}>
          <Text color="white">{label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
