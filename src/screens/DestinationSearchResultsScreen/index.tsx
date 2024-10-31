/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RouteMap from './RouteMap';

import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants';
import AnimationBottomSheet from '../DestinationSearchScreen/AnimationBottomSheet';
import Confirmation from './Confirmation';
import UberTypes from './UberTypes';

const SearchResults = () => {
  const typeState = useState(null);
  const [order, setOrder] = useState({
    id: '1',
    type: 'UberX',

  });
  const [selectedRideType, setSelectedRideType] = useState();
  const [showConfirmDestination, setShowConfirmDestination] = useState<boolean>(true);

  const route = useRoute<any>();
  const navigation = useNavigation();

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
  const handelConfirmDestination = useCallback(() => {

    ref?.current?.scrollTo(0);
    setTimeout(() => {
      ref?.current?.scrollTo(-200);
    },1500)

    setShowConfirmDestination(false)


  }, []);

  useEffect(() => {
    handelAnimationBottomSheet()
  }, [0]);


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
          <Confirmation handelConfirmDestination={handelConfirmDestination} />

          :
          <UberTypes
            setSelectedRideType={setSelectedRideType}
            selectedRideType={selectedRideType}
            routeParams={route.params}
          />
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