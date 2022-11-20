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
    inactiveColor={colors.brand.lightGray}
    activeColor={colors.brand.white}
    shifting={false}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: '',
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="home" family="Feather" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Explorer"
      component={Explorer}
      options={{
        title: '',
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="search" family="Feather" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Community"
      component={Community}
      options={{
        title: '',
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="users" family="Feather" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        title: '',
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name="bell" family="Feather" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={Messages}
      options={{
        title: '',
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon
            name="message-square"
            family="Feather"
            color={color}
            size={25}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
