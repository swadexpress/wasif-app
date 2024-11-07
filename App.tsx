import { applyMiddleware, createStore } from 'redux';



import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import AsysncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator';
import AccountSwitchScreen from './src/screens/Authentication/AccountSwitchScreen';
import FillYourProfileScreen from './src/screens/Authentication/FillYourProfileScreen';
import ForgotNewPasswordScreen from './src/screens/Authentication/ForgotNewPasswordScreen';
import ForgotPasswordOtpVerificationScreen from './src/screens/Authentication/ForgotPasswordOtpVerificationScreen';
import ForgotPasswordScreen from './src/screens/Authentication/ForgotPasswordScreen';
import { PhoneLogInScreen } from './src/screens/Authentication/PhoneLogInScreen';
import SignUpScreen from './src/screens/Authentication/SignUpScreen';
import SigninScreen from './src/screens/Authentication/SigninScreen';
import VerificationOtpScreen from './src/screens/Authentication/VerificationOtpScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import OnBoardingCategoryScreen from './src/screens/OnBoardingScreen/OnBoardingCategoryScreen';
import rootReducer from './src/stores/rootReducer';


const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)





const App = () => {

    const[isToken,setIsToken] =useState<any>()

    const loadingToken =async()=>{

       let token = await AsysncStorage.getItem('@token')|| null;
        setIsToken(token)
    }

    useEffect(() => {

        loadingToken()
    })



    return (

        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,

                        detachPreviousScreen: false,
                    }}
                    initialRouteName={'FoodieHomeScreen'}
                >
                    
                    <Stack.Screen
                        name="OnBoardingScreen"
                        component={OnBoardingScreen}
                    />
                    <Stack.Screen
                        name="OnBoardingCategoryScreen"
                        component={OnBoardingCategoryScreen}
                    />

               

                    <Stack.Screen
                        name="FoodieHomeScreen"
                        component={ isToken ? BottomNavigator :SignUpScreen}
                        options={{ headerShown: false }}
                    />

      
                  

                    <Stack.Screen
                        name="SignUpScreen"
                        component={SignUpScreen}
                    />

                    <Stack.Screen
                        name="SigninScreen"
                        component={SigninScreen}
                    />
                    <Stack.Screen
                        name="AccountSwitchScreen"
                        component={AccountSwitchScreen}
                    />

             

                    <Stack.Screen
                        name="ForgotPasswordScreen"
                        component={ForgotPasswordScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ForgotPasswordOtpVerificationScreen"
                        component={ForgotPasswordOtpVerificationScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ForgotNewPasswordScreen"
                        component={ForgotNewPasswordScreen}
                        options={{ headerShown: false }}
                    />


                    <Stack.Screen
                        name="PhoneLogInScreen"
                        component={PhoneLogInScreen}
                    />


                    <Stack.Screen
                        name="VerificationOtpScreen"
                        component={VerificationOtpScreen}
                    />
                    <Stack.Screen
                        name="FillYourProfileScreen"
                        component={FillYourProfileScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

export default App