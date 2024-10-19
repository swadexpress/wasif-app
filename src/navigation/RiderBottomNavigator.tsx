

/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';


import { COLORS, SIZES, icons } from '../constants';

import LinearGradient from 'react-native-linear-gradient';
import ProfileScreen from '../screens/ProfileScreen';
import RiderInventoryScreen from '../screens/RiderInventoryScreen';
import RiderTruckAreaMapScreen from '../screens/RiderTruckAreaMapScreen';
import UserChatScreen from '../screens/UserChatScreen';
import UserNotificationsScreen from '../screens/UserNotificationsScreen';
import UserOrdersScreen from '../screens/UserOrdersScreen';
import TabButton from './TabButton';
const TabArr = [
  {
    route: 'RiderTruckAreaMapScreen',
    label: 'RiderTruckAreaMapScreen',
    activeIcon: icons.map,
    inActiveIcon: icons.map,
    component: RiderTruckAreaMapScreen,
  },
  {
    route: 'RiderInventoryScreen',
    label: 'RiderInventoryScreen',
    activeIcon: icons.transaction,
    inActiveIcon: icons.transaction,
    component: RiderInventoryScreen,
  },
  {
    route: 'TripeScreen',
    label: 'TripeScreen',
    activeIcon: icons.delivery,
    inActiveIcon: icons.delivery,
    component: UserOrdersScreen,
  },

  {
    route: 'UserNotificationsScreen',
    label: 'UserNotificationsScreen',
    activeIcon: icons.notification,
    inActiveIcon: icons.notification,
    component: UserNotificationsScreen,
  },
  {
    route: 'UserChatScreen',
    label: 'UserChatScreen',
    activeIcon: icons.chat,
    inActiveIcon: icons.chat,
    component: UserChatScreen,
  },
  {
    route: 'ProfileScreen',
    label: 'ProfileScreen',
    activeIcon: icons.profile,
    inActiveIcon: icons.profile,
    component: ProfileScreen,
  },
];

const Tab = createBottomTabNavigator();

export default function AnimTab1() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => {
          return (
            <View style={{ flex: 1 }}>
              <LinearGradient
                style={{

                  width: '100%',
                  height: SIZES.responsiveScreenWidth(9.7),
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
                locations={[0.2, 1]}
                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={280} />



            </View>
          );
        },
        tabBarStyle: {
          height: SIZES.responsiveScreenWidth(8.8),
          position: 'absolute',
          bottom: 9,
          right: 10,
          left: 10,
          borderRadius: 5
        },

      }}>
      {TabArr &&
        TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,

                tabBarButton: props => <TabButton
                  {...props}
                  item={item}
                />,
              }}
            />
          );
        })}
    </Tab.Navigator>

  );
}









