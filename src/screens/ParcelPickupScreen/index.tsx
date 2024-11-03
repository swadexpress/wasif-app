import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Keyboard, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import styles from './styles.js';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageMapHeader from '../../components/SingleImageMapHeader';
import Wrapper from '../../components/Wrapper';
import { COLORS, SIZES, icons } from '../../constants';
import AnimationBottomSheet from './AnimationBottomSheet';
import AnimationFixedBottomSheet from './AnimationFixedBottomSheet';
import FromInput from './FromInput';
import Map from './Map';
import PlaceRow from './PlaceRow';
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + StatusBar.currentHeight + 45;

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {
  const [autoFocus, setAutoFocus] = useState<any>(false);
  const [originPlace, setOriginPlace] = useState<any>(null);
  const [destinationPlace, setDestinationPlace] = useState<any>(null);
  const [myCurrentLocationUpdated, setMyCurrentLocationUpdated] =
    useState<any>(null);
  const ref = useRef<any>(null);
  const animationFixedBottomSheetRef = useRef<any>(null);
  const googlePlacesAutocompleteRef = useRef<any>(null);
  const [guidePickupAgent, setGuidePickupAgent] = useState<any>('')


  const navigation = useNavigation<any>();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('DestinationSearchResultsScreen', {
        originPlace,
        destinationPlace,
      });
    }
  };

  const handelMycorrentLocation = async () => {
    // const longitude = await AsyncStorage.getItem('@longitude');
    // const latitude = await AsyncStorage.getItem('@latitude');
    const longitude = '23.075497';
    const latitude = "90.2268113";



    const myCurrentLocationUpdate = {
      description: 'Current location',
      geometry: {
        location: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
      },
    };
    setMyCurrentLocationUpdated(myCurrentLocationUpdate);
  };

  useEffect(() => {
    handelMycorrentLocation();
    checkNavigation();
  }, [originPlace, destinationPlace]);



  const handelAnimationBottomSheet = useCallback(() => {
    const isActive = ref?.current?.isActive();
    // if (isActive) {
    //   ref?.current?.scrollTo(0);
    // } else {
    ref?.current?.scrollTo(-200);
    // }
  }, []);


  const handelAnimationFixedBottomSheet = useCallback(() => {

    setTimeout(() => {
      animationFixedBottomSheetRef?.current?.scrollTo(-200);
    }, 900)

    ref?.current?.scrollTo(0);

  }, []);



  const onPressIn = useCallback(() => {
    ref?.current?.scrollTo(MAX_TRANSLATE_Y);
    console.log('safkinpreee')
  }, []);


  const onPressOut = useCallback(() => {

    console.log('onPressOut')
  }, []);


  const onFocus = useCallback(() => {

    console.log('onFocus')
  }, []);

  const onBlur = useCallback(() => {

    console.log('onBlur')
  }, []);






  useEffect(() => {
    handelAnimationBottomSheet()
  }, [0]);
  console.log(googlePlacesAutocompleteRef?.current?.isFocused, '....')


  const handelOpenkayboard = () => {
    // setAutoFocus(true)
    // googlePlacesAutocompleteRef.current.focused()
    console.log(googlePlacesAutocompleteRef.current.focus(), 'kk')
  }


  return (
    <Wrapper>


      <View style={{
        flex: 1
      }}>



        <SingleImageMapHeader
          name={''}

        />

        <Map />

        <AnimationBottomSheet
          animationBottomSheetRef={ref}
          ref={ref}
        >
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss()
            }}>

            <View style={{
              height: 12,
              width: '100%'
            }} />

          </TouchableOpacity>
          <View style={styles.mainContainer}>

            <GooglePlacesAutocomplete
              ref={googlePlacesAutocompleteRef}
              placeholder="Pickup"
              onPress={(data, details = null) => {
                setOriginPlace({ data, details });

              }}
              enablePoweredByContainer={false}
              suppressDefaultStyles
              currentLocation={true}

              textInputProps={{
                onPressIn: onPressIn,
                onPressOut: onPressOut,
                onFocus: onFocus,
                onBlur: onBlur,

              }}
              currentLocationLabel="Near by Current location"
              styles={{
                textInput: styles.textInput,
                container: styles.autocompleteContainer,
                listView: styles.listView,
                separator: styles.separator,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyALoxAkEa7ovp5MMeb3NcjEoZa-xu6Frk0',
                language: 'en',
              }}
              renderRow={data => {

                // console.log(data,'okay')
                return (
                  <PlaceRow data={data} />
                )
              }}
              renderDescription={(data: any) => data.description || data.vicinity}
              predefinedPlaces={[
                myCurrentLocationUpdated ? myCurrentLocationUpdated : null,
                homePlace,
                workPlace,
              ]}
            />

            <View style={{
              position: 'absolute',
              left: SIZES.responsiveScreenWidth(10),
              top: SIZES.responsiveScreenWidth(12.3),
            }}>
              <FromInput
                label="Guide Pickup Agent"
                placeholder="Guide Pickup Agent"
                keyboardType='number-pad'
                autocomplete='cc-number'
                value={guidePickupAgent}
                onChange={(value: any) => {
                  setGuidePickupAgent(value)
                }}

                onPressIn={onPressIn}


                appendComponent={
                  <View
                    style={{
                      justifyContent: 'center',
                      marginRight: 8
                    }}
                  >
                    {/* <Image
                      source={fullAddress == "" || (fullAddress != "") ? icons.correct : icons.correct}

                      style={{
                        width: 20,
                        height: 20,
                        tintColor: fullAddress == '' ? COLORS.gray : (fullAddress != "") ? COLORS.green : COLORS.red
                      }}
                    /> */}

                  </View>
                }
              />
            </View>



            {/* Circle near Origin input */}
            <View style={styles.whereFromContainer} >
              <Image source={icons.location}
                style={styles.whereFromContainerIcon}
              />
            </View>


            {/* Square near Destination input */}
            <View style={[styles.whereFromContainer, { top: SIZES.responsiveScreenWidth(11.2) + 5, }]} >
              <Image source={icons.delivery}
                style={{
                  width: SIZES.responsiveScreenWidth(4.5),
                  height: SIZES.responsiveScreenWidth(4.5),
                  tintColor: COLORS.primary
                }}
              />
            </View>
          </View>
          <View style={{
            position: 'absolute',
            top: '83%',
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <TouchableOpacity

              onPress={handelAnimationFixedBottomSheet}
              activeOpacity={0.9}>
              <LinearGradient
                style={styles.linearGradientButton}

                locations={[0, 1,]}
                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={90}>

                <Text style={styles.linearGradientButtonText}>
                  Confirm
                </Text>

              </LinearGradient>


            </TouchableOpacity>


          </View>

        </AnimationBottomSheet>



        <AnimationFixedBottomSheet
          ref={animationFixedBottomSheetRef}
          animationBottomSheetRef={ref}

        >
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>


            <Text
              style={{
                color: COLORS.primary,
                fontWeight: '700',
                fontSize: SIZES.responsiveScreenFontSize(1.7),
                marginTop: 15
              }}
            >
              Courier Method
            </Text>



            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',



            }}>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('CheckParcelAndCourierDetailsScreen')

                }}
              >
                <LinearGradient
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary,
                    width: SIZES.responsiveScreenWidth(28),
                    height: SIZES.responsiveScreenWidth(23),
                    borderRadius: 6,

                    marginTop: 20,
                    elevation: 2
                  }}
                  locations={[0, 1,]}
                  colors={[COLORS.darkRed, COLORS.lightBlue,]}
                  useAngle={true}
                  angle={10}>




                  <Image source={icons.location}
                    style={{
                      width: SIZES.responsiveScreenWidth(7),
                      height: SIZES.responsiveScreenWidth(7),
                      tintColor: COLORS.primary
                    }}
                  />

                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: '700',
                      fontSize: SIZES.responsiveScreenFontSize(1.4),
                      marginTop: 8
                    }}
                  >
                    Home Pickup
                  </Text>

                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: '700',
                      marginTop: 3,
                      fontSize: SIZES.responsiveScreenFontSize(1.3),

                    }}
                  >
                    ৳130
                  </Text>


                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginLeft: 15
                }}
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('CheckParcelAndCourierDetailsScreen')

                }}
              >
                <LinearGradient
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary,
                    width: SIZES.responsiveScreenWidth(28),
                    height: SIZES.responsiveScreenWidth(23),
                    borderRadius: 6,

                    marginTop: 20,
                    elevation: 2
                  }}
                  locations={[0, 1,]}
                  colors={[COLORS.darkRed, COLORS.lightBlue,]}
                  useAngle={true}
                  angle={10}>




                  <Image source={icons.transaction}
                    style={{
                      width: SIZES.responsiveScreenWidth(6),
                      height: SIZES.responsiveScreenWidth(6),
                      tintColor: COLORS.primary
                    }}
                  />

                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: '700',
                      fontSize: SIZES.responsiveScreenFontSize(1.4),
                      marginTop: 8
                    }}
                  >
                    Kiosk Drop
                  </Text>

                  <Text
                    style={{
                      color: COLORS.primary,
                      fontWeight: '700',
                      marginTop: 3,
                      fontSize: SIZES.responsiveScreenFontSize(1.3),

                    }}
                  >
                    ৳130
                  </Text>


                </LinearGradient>
              </TouchableOpacity>







            </View>

            {/* 
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate("Home")}
            >
              <LinearGradient
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                  width: SIZES.responsiveScreenWidth(80),
                  height: SIZES.responsiveScreenWidth(8.5),
                  borderRadius: 6,
                  flexDirection: 'row',
                  marginTop: 40,
                  elevation: 2
                }}
                locations={[0, 1,]}
                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={10}>




                <Image source={icons.transaction}
                  style={{
                    width: SIZES.responsiveScreenWidth(5),
                    height: SIZES.responsiveScreenWidth(5),
                    tintColor: COLORS.primary
                  }}
                />

                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: '700',
                    fontSize: SIZES.responsiveScreenFontSize(1.7),
                    marginLeft: 8
                  }}
                >
                  Submit Review
                </Text>


              </LinearGradient>
            </TouchableOpacity> */}

          </View>


        </AnimationFixedBottomSheet>

      </View>
    </Wrapper>
  );
};








const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10

  },
  textInput: {
    width: SIZES.responsiveScreenWidth(85.1),
    height: SIZES.responsiveScreenWidth(9),
    padding: 10,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1.5,
    marginLeft: SIZES.responsiveScreenWidth(7.5),
    fontSize: SIZES.responsiveScreenFontSize(1.6),
    fontWeight: '600',
    color: COLORS.primary



  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: SIZES.responsiveScreenWidth(23),
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  whereFromContainer: {
    width: SIZES.responsiveScreenWidth(8.5),
    height: SIZES.responsiveScreenWidth(8.8),
    backgroundColor: COLORS.lightRed,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 6,
    left: 0,
    borderRadius: 5,
    elevation: 1.5
  },
  whereFromContainerIcon: {
    width: SIZES.responsiveScreenWidth(5),
    height: SIZES.responsiveScreenWidth(5),
    tintColor: COLORS.primary
  },




  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },







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


export default DestinationSearch;
