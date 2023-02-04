import {Avatar} from 'native-base';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {avatarUrl} from 'mocks/twitters';

import {Pressable} from './Pressable';

export function AvatarHeader() {
  const navigation = useNavigation();
  const toggleSideBar = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Pressable onPress={toggleSideBar}>
      <Avatar source={{uri: avatarUrl}} size="xs" color="brand.darkBlue" />
    </Pressable>
  );
}
