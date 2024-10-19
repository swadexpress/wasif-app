import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Chat: undefined;
  MyProfile: undefined;
  Contacts: undefined;
  Calls: undefined;
  SavedMessage: undefined;
  Settings: undefined;
};

const CustomDrawerRootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,

        detachPreviousScreen: false,
      }}>
      <Stack.Screen name="Chat" component={HomeScreen} />
      <Stack.Screen name="Chatd1" component={HomeScreen} />

    </Stack.Navigator>
  );
};

export default CustomDrawerRootNavigator;