/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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



const UberTypes = ({ selectedRideType,
  setSelectedRideType, routeParams }: any) => {

  const navigation = useNavigation<any>()




  return (
    <View style={{
      alignItems: 'center',
      marginTop: 5,
      height: '100%'

    }}>
      {typesData.map(v => (
        <TouchableOpacity
          key={v.id}
          activeOpacity={0.9}
          onPress={() => {
            setSelectedRideType(v)
          }}
        >
          <View style={{
            width: SIZES.responsiveScreenWidth(95),
            height: SIZES.responsiveScreenWidth(15),
            backgroundColor: v.id == selectedRideType?.id ? COLORS.darkRed : COLORS.white,
            // borderWidth: 1,
            // borderColor: v.id == selectedRideType?.id ? COLORS.white : COLORS.lightRed,
            marginTop: 8,
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            elevation: 1
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <View style={{
                width: SIZES.responsiveScreenWidth(10),
                height: SIZES.responsiveScreenWidth(10),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.lightBlue,
                marginLeft: 5,
                borderRadius: 5,
                elevation: 1
              }}>
                <Image
                  source={icons.cart}
                  style={{
                    width: SIZES.responsiveScreenWidth(6),
                    height: SIZES.responsiveScreenWidth(6),
                    tintColor: COLORS.primary
                  }}
                />
              </View>
              <View style={{
                // alignItems: 'center',
                marginLeft: 4
              }}>
                <Text style={{
                  fontSize: SIZES.responsiveScreenFontSize(1.7),
                  fontWeight: '700',
                  color: COLORS.primary,
                }}>
                  {v.name}
                </Text>
                <Text style={{
                  fontSize: SIZES.responsiveScreenFontSize(1.2),
                  fontWeight: '700',
                  color: COLORS.gray,
                }}>
                  {v.dis}
                </Text>
              </View>
            </View>


            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10
            }}>
              <Text style={{
                fontSize: SIZES.responsiveScreenFontSize(1.7),
                fontWeight: '800',
                color: COLORS.primary,
              }}>
                {`৳${12 * v.price}`}
              </Text>
            </View>



          </View>

        </TouchableOpacity>
      ))}

      {selectedRideType &&

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
              navigation.navigate('DestinationsForRiderAndDriverMapScreen', {
                ...routeParams,

              })
            }}
            activeOpacity={0.9}>
            <LinearGradient
              style={styles.linearGradientButton}

              locations={[0, 1,]}
              colors={[COLORS.darkRed, COLORS.lightBlue,]}
              useAngle={true}
              angle={90}>

              <Text style={styles.linearGradientButtonText}>
                Find a intercity car
              </Text>

            </LinearGradient>


          </TouchableOpacity>
        </View>

      }

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
