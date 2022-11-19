import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostForm} from 'domains/timeline/screens/PostForm';
import {MainBottomNavigation} from './MainBottomNavigation';

const {Navigator, Screen, Group} = createNativeStackNavigator();

export function PrivateNavigation() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="MainBottomNavigation" component={MainBottomNavigation} />
      <Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Screen name="PostForm" component={PostForm} />
      </Group>
    </Navigator>
  );
}
