/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouteMap from './RouteMap';

import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { COLORS, SIZES, animations } from '../../constants';
import AnimationBottomSheet from '../DestinationSearchScreen/AnimationBottomSheet';
import Confirmation from './Confirmation';
import UserInformation from './UserInformation';

const SearchResults = () => {
  const typeState = useState(null);
  const [order, setOrder] = useState({
    id: '1',
    type: 'UberX',

  });
  const [progressTimer, setProgressTimer] = useState(1);
  const [progressTimer2, setProgressTimer2] = useState(100);
  const [showConfirmDestination, setShowConfirmDestination] = useState<boolean>(true);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { originPlace, destinationPlace } = route.params;

  const ref = useRef<any>(null);

  const handelAnimationBottomSheet = useCallback(() => {
    const isActive = ref?.current?.isActive();
    // if (isActive) {
    //   ref?.current?.scrollTo(0);
    // } else {
    ref?.current?.scrollTo(-230);
    // }
  }, []);

  useEffect(() => {
    handelAnimationBottomSheet()

    // console.log(route.prams,'route.prams')
    // const timeOutId = setTimeout(() => {
    //   navigation.navigate('DestinationsMapScreen',{
    //     ...route.prams
    //   })
    // }, 5000)



  }, [0]);
 

  const handelConfirmDestination = useCallback(() => {

    ref?.current?.scrollTo(0);
    setTimeout(() => {
      setShowConfirmDestination(false)
      ref?.current?.scrollTo(-250);
    }, 1500)

    const routePrams = route?.params
    if (routePrams) {

      const timeOutId = setTimeout(() => {
        navigation.navigate('DestinationsMapScreen', {
          ...routePrams
        })
      }, 9000)
    }





  }, []);



  useEffect(() => {
    var timerId = setTimeout(() => {
      handelConfirmDestination()
    }, 7000);
    return function cleanup() {
      clearInterval(timerId);
    };
  },[0]);









  return (
    <View style={{

    }}>


      <View style={{
        height: SIZES.responsiveScreenHeight(70)
      }}>
        <RouteMap
          setOrder={setOrder}
          order={order}
          origin={originPlace}
          destination={destinationPlace}
        />
      </View>


      <AnimationBottomSheet ref={ref}>





        {showConfirmDestination ?
          <>
          
                <View
                style={{
                  
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

              <Text style ={{
                fontSize:SIZES.responsiveScreenFontSize(1.5),
                fontWeight:'700',
                color:COLORS.primary,
            
               alignSelf:'flex-start',
               marginLeft:15
              }}>Finding nearby rides...</Text>

              <Text style ={{
                fontSize:SIZES.responsiveScreenFontSize(1.3),
                fontWeight:'600',
                color:COLORS.gray,
               alignSelf:'flex-start',
               marginLeft:15
              }}>We have sent your ride request to the nearby captains</Text>

                <LottieView
                    source={animations.car_find_with_map}
                    style={{
                        width: SIZES.responsiveScreenWidth(50),
                        height: SIZES.responsiveScreenWidth(35),
                    }}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />



            </View>

            <Confirmation />
          </>
          :


          <UserInformation />
        }




      </AnimationBottomSheet>



    </View>
  );
};


const styles = StyleSheet.create({
  linearGradientButton: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 5,
    width: SIZES.responsiveScreenWidth(80),
    height: SIZES.responsiveScreenWidth(8.5),
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  linearGradientButtonText: {
    fontSize: SIZES.responsiveScreenFontSize(1.8),
    fontWeight: '800',
    color: COLORS.primary,
  },

});


export default SearchResults;
