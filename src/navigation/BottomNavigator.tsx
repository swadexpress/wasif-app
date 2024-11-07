/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';


import { COLORS, SIZES, icons } from '../constants';

import LinearGradient from 'react-native-linear-gradient';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabButton from './TabButton';
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: icons.home,
    inActiveIcon: icons.home,
    component: HomeScreen,
  },

  {
    route: 'CartScreen',
    label: 'CartScreen',
    activeIcon: icons.cart,
    inActiveIcon: icons.cart,
    component: CartScreen,
  },

  {
    route: 'ProfileScreen',
    label: 'ProfileScreen',
    activeIcon: icons.edit,
    inActiveIcon: icons.edit,
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

