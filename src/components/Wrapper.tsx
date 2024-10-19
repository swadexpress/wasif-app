import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const Wrapper = ({children, style}:any) => {
  return (
    <LinearGradient
    style={{
        
     flex:1

    }}

    locations={[0, 1,]}
    colors={[COLORS.lightRed, COLORS.lightBlue,]}
    useAngle={true}
    angle={190}>
    <View style={[styles.container]}>

        {children}
    
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: COLORS.primary
  },

});

export default Wrapper;
