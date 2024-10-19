import { COLORS, FONTS, SIZES, constants, dummyData, icons } from '../../constants';
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import FilterModel from './FilterModel'
import HorizontalFoodCard from '../../components/HorizontalFoodCard'
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import VerticalFoodCard from '../../components/VerticalFoodCard'
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native';
import Drawer from '../../navigation/CustomDrawer/Drawer';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Overlay from '../../navigation/CustomDrawer/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { LOADED_SHOW_CUSTOM_DRAWER } from '../../stores/actions/types';

const CustomDrawer = ({children,headerStyle,containerStyle}:any) => {
    // const active = useSharedValue(false);
    const dispatch = useDispatch<any>();

    const { showCustomDrawer } = useSelector((state: any) => state.product);

    console.log(showCustomDrawer,'showCustomDrawer')



    const progress = useDerivedValue(() => {
        return withTiming(showCustomDrawer.value ? 1 : 0);
    });
    const animatedStyle = useAnimatedStyle(() => {
        const rotateY = interpolate(
            progress.value,
            [0, 1],
            [0, -15],
            Extrapolation.CLAMP,
        );
        return {
            transform: [
                { perspective: 1000 },
                { scale: showCustomDrawer ? withTiming(0.8) : withTiming(1) },
                { translateX: showCustomDrawer ? withSpring(280) : withTiming(0) },
                {
                    rotateY: `${rotateY}deg`,
                },
            ],
            borderRadius: showCustomDrawer ? withTiming(20) : withTiming(0),
        };
    });
    


    return (
        <>
            <Drawer showCustomDrawer={showCustomDrawer} />
            <Animated.View 
            style={[styles.container, 
                animatedStyle
            ]}>
                <View
                    style={{
                        flex:1,
                        ...containerStyle
                    }}>
                    {children}
                </View>
                <Overlay showCustomDrawer={showCustomDrawer} />
            </Animated.View>
        </>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
});



export default CustomDrawer;