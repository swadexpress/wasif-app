import { applyMiddleware, createStore } from 'redux';



import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import { NavigationContainer } from '@react-navigation/native';
import { PermissionsAndroid, Platform } from 'react-native';
import BottomNavigator from './src/navigation/BottomNavigator';
import RiderBottomNavigator from './src/navigation/RiderBottomNavigator';
import SallerBottomNavigator from './src/navigation/SallerBottomNavigator';
import AddNewCardScreen from './src/screens/AddNewCardScreen';
import AccountSwitchScreen from './src/screens/Authentication/AccountSwitchScreen';
import FillYourProfileScreen from './src/screens/Authentication/FillYourProfileScreen';
import ForgotNewPasswordScreen from './src/screens/Authentication/ForgotNewPasswordScreen';
import ForgotPasswordOtpVerificationScreen from './src/screens/Authentication/ForgotPasswordOtpVerificationScreen';
import ForgotPasswordScreen from './src/screens/Authentication/ForgotPasswordScreen';
import { PhoneLogInScreen } from './src/screens/Authentication/PhoneLogInScreen';
import SignUpScreen from './src/screens/Authentication/SignUpScreen';
import SigninScreen from './src/screens/Authentication/SigninScreen';
import VerificationOtpScreen from './src/screens/Authentication/VerificationOtpScreen';
import CardScreen from './src/screens/CardScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import DeliveryMapScreen from './src/screens/DeliveryMapScreen';
import DeliveryStatusScreen from './src/screens/DeliveryStatusScreen';
import FavoriteAndWishScreen from './src/screens/FavoriteAndWishScreen';
import FoodDetailsScreen from './src/screens/FoodDetailsScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import OnBoardingCategoryScreen from './src/screens/OnBoardingScreen/OnBoardingCategoryScreen';
import PaymentHistoryScreen from './src/screens/PaymentHistoryScreen';
import PaymentWalletScreen from './src/screens/PaymentWalletScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import RiderOrderScreen from './src/screens/RiderOrderScreen';
import RiderReviewScreen from './src/screens/RiderReviewScreen';
import RiderStartDirectionToDeliveryMapScreen from './src/screens/RiderStartDirectionToDeliveryMapScreen';
import RiderSuccessScreen from './src/screens/RiderSuccessScreen';
import RiderTruckAreaMapScreen from './src/screens/RiderTruckAreaMapScreen';
import RiderTruckWorkingAreaMapScreen from './src/screens/RiderTruckWorkingAreaMapScreen';
import SallerInventoryScreen from './src/screens/SallerInventoryScreen';
import SallerNotificationsScreen from './src/screens/SallerNotificationsScreen';
import SallerPaymentScreen from './src/screens/SallerPaymentScreen';
import SallerProfileScreen from './src/screens/SallerProfileScreen';
import SallerSaleScreen from './src/screens/SallerSaleScreen';
import SallerShopProfileScreen from './src/screens/SallerShopProfileScreen';
import SearchingAndFiteringProducts from './src/screens/SearchingAndFiteringProducts';
import SettingsScreen from './src/screens/SettingsScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import UpdateProfileScreen from './src/screens/UpdateProfileScreen';
import UserNotificationsScreen from './src/screens/UserNotificationsScreen';
import UserOrdersDeliveryDetailsScreen from './src/screens/UserOrdersDeliveryDetailsScreen';
import UserOrdersDetailsScreen from './src/screens/UserOrdersDetailsScreen';
import UserOrdersReviewScreen from './src/screens/UserOrdersReviewScreen';
import UserOrdersReviewTextScreen from './src/screens/UserOrdersReviewTextScreen';
import UserOrdersScreen from './src/screens/UserOrdersScreen';
import UserReceiveOrdersScreen from './src/screens/UserReceiveOrdersScreen';
import UserReturnOrdersScreen from './src/screens/UserReturnOrdersScreen';
import UserToShipOrdersScreen from './src/screens/UserToShipOrdersScreen';
import rootReducer from './src/stores/rootReducer';


const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)




const requestNotificationPermission = async () => {
    if (Platform.OS === "android") {
        try {
            PermissionsAndroid.check('android.permission.POST_NOTIFICATIONS').then(
                response => {
                    if (!response) {
                        PermissionsAndroid.request('android.permission.POST_NOTIFICATIONS', {
                            title: 'Notification',
                            message:
                                'App needs access to your notification ' +
                                'so you can get Updates',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        })
                    }
                }
            ).catch(
                err => {
                    console.log("Notification Error=====>", err);
                }
            )
        } catch (err) {
            console.log(err);
        }
    }
};



const App = () => {

    useEffect(() => {
        requestNotificationPermission()
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
                    initialRouteName={'FoodDetailsScreen'}
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
                        name="SallerHomeScreen"
                        component={SallerBottomNavigator}
                        options={{ headerShown: false }}
                    />


                    <Stack.Screen
                        name="RiderHomeScreen"
                        component={RiderBottomNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="FoodieHomeScreen"
                        component={BottomNavigator}
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



                    <Stack.Screen
                        name="FoodDetailsScreen"
                        component={FoodDetailsScreen}
                    />

                    <Stack.Screen
                        name="CheckoutScreen"
                        component={CheckoutScreen}
                    />

                    <Stack.Screen
                        name="UpdateProfileScreen"
                        component={UpdateProfileScreen}
                    />

                    <Stack.Screen
                        name="CardScreen"
                        component={CardScreen}
                    />
                    <Stack.Screen
                        name="AddNewCardScreen"
                        component={AddNewCardScreen}
                    />
                    <Stack.Screen
                        name="SuccessScreen"
                        component={SuccessScreen}
                    />
                    <Stack.Screen
                        name="DeliveryStatusScreen"
                        component={DeliveryStatusScreen}
                    />
                    <Stack.Screen
                        name="DeliveryMapScreen"
                        component={DeliveryMapScreen}
                    />
                    <Stack.Screen
                        name="SettingsScreen"
                        component={SettingsScreen}
                    />
                    <Stack.Screen
                        name="RiderReviewScreen"
                        component={RiderReviewScreen}
                    />

                    <Stack.Screen
                        name="UserOrdersScreen"
                        component={UserOrdersScreen}
                    />
                    <Stack.Screen
                        name="UserReceiveOrdersScreen"
                        component={UserReceiveOrdersScreen}
                    />
                    <Stack.Screen
                        name="UserToShipOrdersScreen"
                        component={UserToShipOrdersScreen}
                    />
                    <Stack.Screen
                        name="UserReturnOrdersScreen"
                        component={UserReturnOrdersScreen}
                    />
                    <Stack.Screen
                        name="UserOrdersReviewScreen"
                        component={UserOrdersReviewScreen}
                    />
                    
                    <Stack.Screen
                        name="UserOrdersReviewTextScreen"
                        component={UserOrdersReviewTextScreen}
                    />



                    <Stack.Screen
                        name="UserNotificationsScreen"
                        component={UserNotificationsScreen}
                    />
                    <Stack.Screen
                        name="SearchingAndFiteringProducts"
                        component={SearchingAndFiteringProducts}
                    />
                    <Stack.Screen
                        name="FavoriteAndWishScreen"
                        component={FavoriteAndWishScreen}
                    />


                    <Stack.Screen
                        name="CategoryScreen"
                        component={CategoryScreen}
                    />

                    <Stack.Screen
                        name="SallerNotificationsScreen"
                        component={SallerNotificationsScreen}
                    />
                    <Stack.Screen
                        name="SallerProfileScreen"
                        component={SallerProfileScreen}
                    />
                    <Stack.Screen
                        name="SallerShopProfileScreen"
                        component={SallerShopProfileScreen}
                    />
                    <Stack.Screen
                        name="SallerSaleScreen"
                        component={SallerSaleScreen}
                    />
                    <Stack.Screen
                        name="SallerInventoryScreen"
                        component={SallerInventoryScreen}
                    />

                    <Stack.Screen
                        name="SallerPaymentScreen"
                        component={SallerPaymentScreen}
                    />
                    <Stack.Screen
                        name="RiderTruckWorkingAreaMapScreen"
                        component={RiderTruckWorkingAreaMapScreen}
                    />
                    <Stack.Screen
                        name="RiderTruckAreaMapScreen"
                        component={RiderTruckAreaMapScreen}
                    />
                    <Stack.Screen
                        name="RiderOrderScreen"
                        component={RiderOrderScreen}
                    />

                    <Stack.Screen
                        name="RiderStartDirectionToDeliveryMapScreen"
                        component={RiderStartDirectionToDeliveryMapScreen}
                    />
                    <Stack.Screen
                        name="RiderSuccessScreen"
                        component={RiderSuccessScreen}
                    />
                    <Stack.Screen
                        name="ReviewScreen"
                        component={ReviewScreen}
                    />

                    <Stack.Screen
                        name="UserOrdersDetailsScreen"
                        component={UserOrdersDetailsScreen}
                    />

                    <Stack.Screen
                        name="UserOrdersDeliveryDetailsScreen"
                        component={UserOrdersDeliveryDetailsScreen}
                    />

                    <Stack.Screen
                        name="PaymentWalletScreen"
                        component={PaymentWalletScreen}
                    />
                    <Stack.Screen
                        name="PaymentHistoryScreen"
                        component={PaymentHistoryScreen}
                    />

                    {/* <Stack.Screen
                        name="CategoryDetailsScreen"
                        component={CategoryDetailsScreen}
                    /> */}


                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

export default App