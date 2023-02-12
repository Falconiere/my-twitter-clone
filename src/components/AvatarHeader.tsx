import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Avatar} from 'tamagui';

import {Pressable} from './Pressable';

export function AvatarHeader() {
  const navigation = useNavigation();
  const toggleSideBar = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Pressable onPress={toggleSideBar}>
      <Avatar circular size="$2">
        <Avatar.Image src="http://placekitten.com/200/300" />
        <Avatar.Fallback bc="grey" />
      </Avatar>
    </Pressable>
  );
}
