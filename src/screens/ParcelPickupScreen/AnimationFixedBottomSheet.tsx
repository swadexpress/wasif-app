import React, { useCallback, useImperativeHandle } from 'react';
import { Dimensions, Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { COLORS } from '../../constants';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -250;

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
  animationFixedBottomSheetRef:any;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children,animationBottomSheetRef }, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;
      translateY.value = withSpring(destination, { damping: 90 });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
          animationBottomSheetRef?.current?.scrollTo(-250);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });



    const rBottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    });



    const rBottomSheetStyle2 = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [18, 5],
        Extrapolate.CLAMP
      );

      return {
        borderRadius,
      };
    });

    const rBackdropStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(active.value ? 0 : 0),
      };
    }, []);



    const rBackdropProps = useAnimatedProps(() => {
      return {
        // pointerEvents: active.value ? 'auto' : 'none',
        pointerEvents: active.value ? 'none' : 'none',
      } as any;
    }, []);




    return (
      <>
        <Animated.View
          onTouchStart={() => {
            // Dismiss the BottomSheet
            // scrollTo(0);
          }}
          animatedProps={rBackdropProps}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
            rBackdropStyle,
          ]}
        />
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[styles.bottomSheetContainer, rBottomSheetStyle]}
          >
            <LinearGradient
              style={[{
                flex: 1,
                borderRadius: 15
              }, rBottomSheetStyle2]}

              locations={[0.1, 1,]}
              colors={[COLORS.lightRed, COLORS.lightBlue,]}
              useAngle={true}
              angle={190}>
              <TouchableOpacity
              activeOpacity={1}
                onPress={() => {
                  Keyboard.dismiss()

                }}>
                <View style={styles.line} />
              </TouchableOpacity>

              {children}
            </LinearGradient>
          </Animated.View>
        </GestureDetector>
      </>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: SCREEN_WIDTH * 0.09,
    height: 4,
    backgroundColor: COLORS.darkRed,
    alignSelf: 'center',
    marginTop: 7,
    borderRadius: 2,
  },
});

export default BottomSheet;