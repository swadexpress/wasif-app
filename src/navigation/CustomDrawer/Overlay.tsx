import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { LOADED_SHOW_CUSTOM_DRAWER } from '../../stores/actions/types';


const Overlay = ({showCustomDrawer}: any) => {
  const dispatch = useDispatch<any>();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      display:showCustomDrawer ? 'flex' : 'none',
    };
  });
  

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Pressable
        style={styles.container}
        onPress={() => {
          dispatch({
            type:LOADED_SHOW_CUSTOM_DRAWER ,
            payload: false,
          });
        }}
      />
    </Animated.View>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});