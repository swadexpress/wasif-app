import { COLORS, FONTS, SIZES, animations, constants, dummyData, icons, images } from '../../constants';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import React, { useState } from 'react';
import StepperInput from '../../components/StepperInput'
import { SwipeListView } from 'react-native-swipe-list-view';
import SingleImageHeader from '../../components/SingleImageHeader';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Wrapper from '../../components/Wrapper';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import AppStatusBar from '../../components/AppStatusBar';



const LoadingScreen = ({ }) => {





    return (

        <Wrapper>
            <AppStatusBar />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <LottieView
                    source={animations.loading}
                    style={{
                        width: SIZES.responsiveScreenWidth(50),
                        height: SIZES.responsiveScreenWidth(50),
                    }}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />



            </View>
        </Wrapper>
    )
}




export default LoadingScreen;