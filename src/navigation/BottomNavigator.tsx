/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';


import { COLORS, SIZES, icons } from '../constants';

import LinearGradient from 'react-native-linear-gradient';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import UserChatScreen from '../screens/UserChatScreen';
import UserNotificationsScreen from '../screens/UserNotificationsScreen';
import TabButton from './TabButton';
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: icons.restaurant,
    inActiveIcon: icons.restaurant,
    component: HomeScreen,
  },
  {
    route: 'SearchScreen',
    label: 'SearchScreen',
    activeIcon: icons.search,
    inActiveIcon: icons.search,
    component: SearchScreen,
  },
  {
    route: 'CartScreen',
    label: 'CartScreen',
    activeIcon: icons.cart,
    inActiveIcon: icons.cart,
    component: CartScreen,
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
                locations={[0.2,1]}
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

