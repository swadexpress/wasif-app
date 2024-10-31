/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES, icons } from '../../constants';

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



const UberTypes = ({ handelConfirmDestination}: any) => {

  const navigation = useNavigation<any>()




  return (
    <View style={{
      alignItems: 'center',



    }}>




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
            >Your Trip
            </Text>
          </View>




          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
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
              marginTop: 8,
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
            >Mirpur-2, Dhaka, Bangladesh
            </Text>
          </View>

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
            29m
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
            20 Km
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
            20 EGP
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
