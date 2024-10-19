import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import AppStatusBar from '../../components/AppStatusBar';
import { SIZES } from '../../constants';
import { OnboardingData } from './data';

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderItem = ({ index, x, item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <View style={styles.circleContainer}>

        <AppStatusBar />
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              // backgroundColor: item.backgroundColor,
            },
            circleAnimation,
          ]}
        >
          <LinearGradient
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              // backgroundColor: item.backgroundColor,
            }}

            locations={[0, 1]}
            colors={[item.backgroundColor, item.backgroundColor2,]}
            useAngle={true}
            angle={190} />
        </Animated.View>


      </View>
      <Animated.View style={[lottieAnimationStyle, {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: '20%'


      }]}>
        <LottieView
          source={item.animation}
          style={{
            width: item.width,
            height: item.height,
            // backgroundColor:'red'
          }}
          autoPlay
          loop
        />

      </Animated.View>
      <View style={{
        alignItems: 'center',
        justifyContent: 'flex-end',

      }}>


        <Text style={[styles.itemText, {
          color: item.textColor
        }]}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  itemText: {
    textAlign: 'center',
    fontSize: SIZES.responsiveScreenFontSize(1.7),
    fontWeight: '700',
    marginBottom: 5,
    marginHorizontal: 20,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});