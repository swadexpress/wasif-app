import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import DrawerItem from './DrawerItem';
import {SharedValue} from 'react-native-reanimated';
import { icons } from '../../../../src/screens/shop/constants';
import { COLORS, images } from '../../constants';
 const drawerList= [
  {
    name: 'My Profile',
    icon: icons.profile,
    navigate: 'MyCard',
  },
  {
    name: 'UserOrdersScreen',
    icon: icons.profile,
    navigate: 'UserOrdersScreen',
  },
  {
    name: 'UserNotificationsScreen',
    icon: icons.profile,
    navigate: 'UserNotificationsScreen',
  },
 
  {
    name: 'FavoriteAndWishScreen',
    icon: icons.profile,
    navigate: 'FavoriteAndWishScreen',
  },
  {
    name: 'SallerOrdersScreen',
    icon: icons.profile,
    navigate: 'SallerOrdersScreen',
  },
  {
    name: 'SallerNotificationsScreen',
    icon: icons.profile,
    navigate: 'SallerNotificationsScreen',
  },
  {
    name: 'SallerProfileScreen',
    icon: icons.profile,
    navigate: 'SallerProfileScreen',
  },
 
  {
    name: 'SallerSaleScreen',
    icon: icons.profile,
    navigate: 'SallerSaleScreen',
  },
  {
    name: 'SallerPaymentScreen',
    icon: icons.profile,
    navigate: 'SallerPaymentScreen',
  },
  // {
  //   name: 'RiderTruckWorkAreaMapScreen',
  //   icon: icons.profile,
  //   navigate: 'RiderTruckWorkAreaMapScreen',
  // },
 
  {
    name: 'RiderTruckAreaMapScreen',
    icon: icons.profile,
    navigate: 'RiderTruckAreaMapScreen',
  },
 
];









const Drawer = ({showCustomDrawer}: any) => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerProfile}>
          <Image
            source={images.profile}
            style={styles.imageProfile}
          />
          <Text style={styles.textName}>Kawsar Khan</Text>
        </View>





        <View style={styles.containerItem}>
          {drawerList.map((item, index) => {
            return(
                <DrawerItem item={item} key={index} showCustomDrawer={showCustomDrawer} />

            )

            
          })}
        </View>
      </View>
    </View>
    </>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.primary,
    // backgroundColor: '#353E54',
    zIndex: -9999,
  },
  contentContainer: {
    marginTop: '10%',
    marginLeft: 15,
    maxWidth: 190,
  },
  containerProfile: {
    gap: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems:'center',
    justifyContent:'center'
  },
  imageProfile: {
    width: 55,
    height: 55,
    borderRadius:150,
  },
  textName: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: 17,
  },
  containerItem: {
    marginTop: 5,
  },
});