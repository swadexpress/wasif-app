/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES, icons, images } from '../../constants';

const typesData = [
  {
    name: 'Bike',
    image: icons.cart,
    dis: 'Less Fare',
    id: 1,
    price: 12,
  },
  {
    name: 'Car Plus',
    image: icons.cart,
    dis: "Comfortable Ride",
    id: 2,
    price: 25,

  },
  {
    name: 'Car Premium',
    image: icons.cart,
    dis: "More Relaxation",
    id: 3,
    price: 30,

  },
  {
    name: 'Car XL',
    image: icons.cart,
    dis: "More Relaxation",
    id: 4,
    price: 32,

  },
]



const UberTypes = ({ selectedRideType,
  setSelectedRideType, routeParams }: any) => {

  const navigation = useNavigation<any>()




  return (
    <View style={{
      alignItems: 'center',
      marginTop: 5,


    }}>



      <LinearGradient
        style={{
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 80,
          marginTop: 5,
          elevation: 1,
          marginBottom: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          width: SIZES.responsiveScreenWidth(95)
        }}

        locations={[0, 1,]}
        colors={[COLORS.lightRed, COLORS.lightBlue,]}
        useAngle={true}
        angle={8}>








        <View style={{
          marginLeft: 8
        }}>



          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',


            }}
          >
            <FastImage
              source={images.profile}
              style={{
                width: SIZES.responsiveScreenWidth(15),
                height: SIZES.responsiveScreenWidth(15),
                borderRadius: 5
              }}
            />
            <View>


              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: COLORS.primary,
                  marginLeft: 5
                }}
              >Kawsar Khan
              </Text>

              <View style={{
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                marginLeft: 6,
                marginTop: 3
              }}>
                <Image
                  source={icons.star}
                  style={{
                    width: SIZES.responsiveScreenWidth(2.4),
                    height: SIZES.responsiveScreenWidth(2.4),
                    tintColor: COLORS.primary,

                  }}
                />
                <Text style={{
                  fontSize: SIZES.responsiveScreenFontSize(1.3),
                  fontWeight: '900',
                  color: COLORS.black,
                  marginLeft: 3,

                }}>
                  4.5
                </Text>
                <Text style={{
                  fontSize: SIZES.responsiveScreenFontSize(0.9),
                  fontWeight: '900',
                  color: COLORS.gray,

                }}>
                  (23+)
                </Text>
              </View>



              <View style={{
                alignItems: 'center',
                // justifyContent: 'center',
                flexDirection: 'row',
                marginLeft: 6,
                marginTop: 3
              }}>
                <View style={{
                  alignItems: 'center',
                  // justifyContent: 'center',
                  flexDirection: 'row',
                  marginLeft: 6,
                  marginTop: 3
                }}>
                  <Image
                    source={icons.delivery}
                    style={{
                      width: SIZES.responsiveScreenWidth(3.5),
                      height: SIZES.responsiveScreenWidth(3.5),
                      tintColor: COLORS.primary,

                    }}
                  />
                  <Text style={{
                    fontSize: SIZES.responsiveScreenFontSize(1.4),
                    fontWeight: '700',
                    color: COLORS.gray,
                    marginLeft: 1,

                  }}>
                    340Km
                  </Text>

                </View>


                <View style={{
                  alignItems: 'center',
                  // justifyContent: 'center',
                  flexDirection: 'row',
                  marginLeft: 6,
                  marginTop: 3
                }}>
                  <Image
                    source={icons.transaction}
                    style={{
                      width: SIZES.responsiveScreenWidth(3.5),
                      height: SIZES.responsiveScreenWidth(3.5),
                      tintColor: COLORS.primary,

                    }}
                  />
                  <Text style={{
                    fontSize: SIZES.responsiveScreenFontSize(1.4),
                    fontWeight: '700',
                    color: COLORS.gray,
                    marginLeft: 5,

                  }}>
                    50 Trips
                  </Text>

                </View>

              </View>


            </View>
          </View>



        </View>

        <View
          style={{

            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 8


          }}

        >

          <TouchableOpacity style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <Image
              source={icons.chat}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 4
          }}>

            <Image
              source={icons.call}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>

        </View>




      </LinearGradient>

      {/* ==================Address Details================== */}
      <LinearGradient
        style={{
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',

          marginTop: 5,
          elevation: 1,
          marginBottom: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          width: SIZES.responsiveScreenWidth(95)
        }}

        locations={[0, 1,]}
        colors={[COLORS.lightRed, COLORS.lightBlue,]}
        useAngle={true}
        angle={8}>

        <View style={{
          marginLeft: 8, marginTop: 12,
          marginBottom: 12

        }}>



          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',


            }}
          >
            <Image
              source={icons.location}
              style={{
                width: SIZES.responsiveScreenWidth(5.5),
                height: SIZES.responsiveScreenWidth(5.5),
                tintColor: COLORS.primary
              }}
            />
            <Text
              style={{
                fontSize: SIZES.responsiveScreenFontSize(1.7),
                fontWeight: '700',
                color: COLORS.primary,
                marginLeft: 5
              }}
            >Pic Up Location
            </Text>
          </View>




          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop:8,
              marginHorizontal: SIZES.responsiveScreenWidth(5)
            }}
          >
            <Image
              source={icons.focus}
              style={{
                width: SIZES.responsiveScreenWidth(4),
                height: SIZES.responsiveScreenWidth(4),
                tintColor: COLORS.primary
              }}
            />
            <Text
              style={{
                fontSize: SIZES.responsiveScreenFontSize(1.4),
                fontWeight: '700',
                color: COLORS.primary,
                marginLeft: 5
              }}
            >Chawk Bazar, Dhaka, Bangladesh
            </Text>
          </View>


          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop:8,
              marginHorizontal: SIZES.responsiveScreenWidth(5)
            }}
          >
            <Image
              source={icons.location}
              style={{
                width: SIZES.responsiveScreenWidth(4),
                height: SIZES.responsiveScreenWidth(4),
                tintColor: COLORS.primary
              }}
            />
            <Text
              style={{
                fontSize: SIZES.responsiveScreenFontSize(1.4),
                fontWeight: '700',
                color: COLORS.primary,
                marginLeft: 5
              }}
            >Dhaka Medical, Dhaka, Bangladesh
            </Text>
          </View>







        </View>
      </LinearGradient>


      {/* ===============Car Details===================== */}
      <LinearGradient
        style={{
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 80,
          marginTop: 5,
          elevation: 1,
          marginBottom: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          width: SIZES.responsiveScreenWidth(95)
        }}

        locations={[0, 1,]}
        colors={[COLORS.lightRed, COLORS.lightBlue,]}
        useAngle={true}
        angle={8}>

        <View style={{
          marginLeft: 8
        }}>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',


            }}
          >
            <Image
              source={icons.delivery}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.primary
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: COLORS.primary,
                marginLeft: 5
              }}
            >Car/Bike Details
            </Text>
          </View>


          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              color: COLORS.primary,
              marginLeft: 25
            }}
          >2021 Kia Sonet HTX Plus 1.0 iMT, Num:9537394, Kalkini, Madaripur, Dhaka, Bangladesh
          </Text>

        </View>






      </LinearGradient>

      {/* ==================Timer Details================== */}
      <LinearGradient
        style={{
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',

          marginTop: 5,
          elevation: 1,
          marginBottom: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          width: SIZES.responsiveScreenWidth(95)
        }}

        locations={[0, 1,]}
        colors={[COLORS.darkRed, COLORS.lightBlue,]}
        useAngle={true}
        angle={8}>


        <LinearGradient
          style={{
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            elevation: 1,
            marginBottom: 5,
            marginLeft: 10,

            borderRadius: 10,
            width: SIZES.responsiveScreenWidth(28),
            height: SIZES.responsiveScreenWidth(20),

          }}

          locations={[0, 1,]}
          colors={[COLORS.darkRed, COLORS.lightBlue,]}
          useAngle={true}
          angle={300}>


          <Image
            source={icons.clock}

            style={{
              width: SIZES.responsiveScreenWidth(6),
              height: SIZES.responsiveScreenWidth(6),
              tintColor: COLORS.primary,
              marginLeft: 4
            }}
          />

          <Text style={{
            fontSize: SIZES.responsiveScreenFontSize(1.6),
            fontWeight: '700',
            color: COLORS.primary,
            marginTop: 5
          }} >
            13m
          </Text>
          <Text style={{
            fontSize: SIZES.responsiveScreenFontSize(1.2),
            fontWeight: '700',
            color: COLORS.gray,
            marginTop: 1

          }} >
            Duration
          </Text>
        </LinearGradient>

        <LinearGradient
          style={{
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            elevation: 1,
            marginBottom: 5,

            borderRadius: 10,
            width: SIZES.responsiveScreenWidth(28),
            height: SIZES.responsiveScreenWidth(20),

          }}

          locations={[0, 1,]}
          colors={[COLORS.darkRed, COLORS.lightBlue,]}
          useAngle={true}
          angle={300}>
          <Image
            source={icons.location}

            style={{
              width: SIZES.responsiveScreenWidth(6),
              height: SIZES.responsiveScreenWidth(6),
              tintColor: COLORS.primary
            }}
          />
          <Text style={{
            fontSize: SIZES.responsiveScreenFontSize(1.6),
            fontWeight: '700',
            color: COLORS.primary,
            marginTop: 5
          }} >
            5 Km
          </Text>
          <Text style={{
            fontSize: SIZES.responsiveScreenFontSize(1.2),
            fontWeight: '700',
            color: COLORS.gray,
            marginTop: 1

          }} >
            Distance
          </Text>
        </LinearGradient>
        <LinearGradient
          style={{
            backgroundColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
            elevation: 1,
            marginBottom: 8,

            borderRadius: 10,
            width: SIZES.responsiveScreenWidth(28),
            height: SIZES.responsiveScreenWidth(20),
            marginRight: 10

          }}

          locations={[0, 1,]}
          colors={[COLORS.darkRed, COLORS.lightBlue,]}
          useAngle={true}
          angle={300}>
          <Image
            source={icons.transaction}

            style={{
              width: SIZES.responsiveScreenWidth(5.5),
              height: SIZES.responsiveScreenWidth(5.5),
              tintColor: COLORS.primary
            }}
          />
          <Text style={{
            fontSize: SIZES.responsiveScreenFontSize(1.6),
            fontWeight: '700',
            color: COLORS.primary,
            marginTop: 5
          }} >
            7 EGP
          </Text>
          <Text style={{
            fontSize: SIZES.responsiveScreenFontSize(1.2),
            fontWeight: '700',
            color: COLORS.gray,
            marginTop: 1

          }} >
            Cost
          </Text>
        </LinearGradient>






      </LinearGradient>


      <View style={{
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom:90,
        alignItems: 'center',
        marginTop: 20
      }}>
        <TouchableOpacity
          style={{

          }}
          onPress={() => {
            // navigation.navigate('DestinationsForRiderAndDriverMapScreen', {
            //   ...routeParams,

            // })
          }}
          activeOpacity={0.9}>
          <LinearGradient
            style={styles.linearGradientButton}

            locations={[0, 1,]}
            colors={[COLORS.darkRed, COLORS.lightBlue,]}
            useAngle={true}
            angle={90}>

            <Text style={styles.linearGradientButtonText}>
              Cancel
            </Text>

          </LinearGradient>


        </TouchableOpacity>
      </View>


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


export default UberTypes;
