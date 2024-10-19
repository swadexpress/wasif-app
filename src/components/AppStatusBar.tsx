import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppStatusBar = () => {
  return (
    <View style={{marginTop: StatusBar.currentHeight+5}}>
      <StatusBar
        animated={true}
        // backgroundColor="#61dafb"
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
    </View>
  );
};

export default AppStatusBar;
