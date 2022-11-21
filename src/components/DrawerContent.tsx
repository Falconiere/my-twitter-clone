import {ScrollView} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {Pressable} from './Pressable';
import {Routes} from 'domains/navigation/types';

export type DrawerContentItem = {
  label: string;
  route: keyof Routes;
};

type DrawerContentProps = {
  routes: Array<DrawerContentItem>;
};

export function DrawerContent(props: DrawerContentProps) {
  const {routes} = props;
  const navigation = useNavigation();

  return (
    <ScrollView bg="brand.black">
      {routes.map(route => (
        <Pressable
          onPress={() => navigation.navigate(route.route)}
          key={`drawer-key-${route.route}`}>
          {route.label}
        </Pressable>
      ))}
    </ScrollView>
  );
}
