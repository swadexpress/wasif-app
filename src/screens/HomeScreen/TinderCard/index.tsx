import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedStack from './AnimatedStack';
import Card from './Card';


const HomeScreen = ({data}:any) => {
  const onSwipeLeft = (v: any) => {
    console.warn('swipe left', v);
  };

  const onSwipeRight =async (currentProfile:  any) => {
    console.warn('swipe right: ', currentProfile);
  
   let cartProducts = JSON.parse(await AsyncStorage.getItem('@cartProducts'))||[]
   let qty ={
    qty:0
   }
   
   cartProducts.push({...currentProfile,...qty})
    await AsyncStorage.setItem('@cartProducts',JSON.stringify(cartProducts));



  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={data}
        renderItem={({item}:any) => <Card item={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;