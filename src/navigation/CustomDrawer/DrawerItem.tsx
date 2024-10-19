import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import useTypeSafeNavigation from './useTypeSafeNavigation';
import { LOADED_SHOW_CUSTOM_DRAWER } from '../../stores/actions/types';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../../../src/constants';
import { useNavigation } from '@react-navigation/native';

const DrawerItem = ({item, showCustomDrawer}: any) => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch<any>();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch({
          type:LOADED_SHOW_CUSTOM_DRAWER ,
          payload: false,
        });

        navigation.navigate(item.navigate)
      }}>
      <Image source={item.icon} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:15
    
  },
  image: {
    width: 26,
    height: 26,
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: 15,
    marginLeft:9
  },
});