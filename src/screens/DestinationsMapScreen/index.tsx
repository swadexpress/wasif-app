/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RouteMap from './RouteMap';

import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants';
import AnimationBottomSheet from '../DestinationSearchScreen/AnimationBottomSheet';
import UserInformation from './UserInformation';

const SearchResults = () => {
  const typeState = useState(null);
  const [order, setOrder] = useState({
    id: '1',
    type: 'UberX',

  });
  const [selectedRideType, setSelectedRideType] = useState();

  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { originPlace, destinationPlace } = route.params;

  const ref = useRef<any>(null);

  const handelAnimationBottomSheet = useCallback(() => {
    const isActive = ref?.current?.isActive();
    // if (isActive) {
    //   ref?.current?.scrollTo(0);
    // } else {
    ref?.current?.scrollTo(-200);
    // }
  }, []);

  useEffect(() => {
    handelAnimationBottomSheet()
  }, [0]);


  useEffect(() => {
    var timerId = setTimeout(() => {
      navigation.navigate('RiderReviewScreen')
 
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
        <UserInformation
       
        />
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
