import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Icon} from 'components/Icon';
import {Community} from 'domains/timeline/screens/Community';
import {Explorer} from 'domains/timeline/screens/Explorer';
import {Home} from 'domains/timeline/screens/Home';
import {Messages} from 'domains/timeline/screens/Messages';
import {Notifications} from 'domains/timeline/screens/Notifications';
import {colors} from 'providers/Theme/colors';

const Tab = createMaterialBottomTabNavigator();
export const MainBottomNavigation = () => (
  <Tab.Navigator
    barStyle={{backgroundColor: colors.brand.black}}
    inactiveColor={colors.brand.gray}
    activeColor={colors.brand.white}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="home" family="Feather" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Explorer"
      component={Explorer}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="search" family="Feather" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Community"
      component={Community}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="users" family="Feather" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="bell" family="Feather" color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={Messages}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="message-square" family="Feather" color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
