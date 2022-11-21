import {Avatar, Column, Row, ScrollView, Text} from 'native-base';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {Pressable} from './Pressable';
import {Routes} from 'domains/navigation/types';
import {avatarUrl} from 'mocks/twitters';

export type DrawerContentItem = {
  label: string;
  routeName: keyof Routes;
};

type DrawerContentProps = {
  routes: Array<DrawerContentItem>;
};

export function DrawerContent(props: DrawerContentProps) {
  const {routes} = props;
  const navigation = useNavigation();
  const handleNavigation = (route: keyof Routes) => {
    navigation.navigate(route);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <ScrollView bg="brand.black" p="4">
      <Row safeAreaTop space={2}>
        <Avatar source={{uri: avatarUrl}} />
        <Column>
          <Text color="white" fontWeight="bold">
            Falconiere Barbosa
          </Text>
          <Text color="white" fontWeight="bold">
            @falconiererb
          </Text>
        </Column>
      </Row>
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
