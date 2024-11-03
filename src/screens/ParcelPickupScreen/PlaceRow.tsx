import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
// import styles from './styles';

const PlaceRow = ({ data }: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        {data.description === 'Home'
          ? <Image
            source={icons.home}
            style={styles.icon}
          />
          : <Image
            source={icons.location}
            style={styles.icon}
          />
        }
      </View>
      <Text style={styles.locationText}>
        {
          data.description || data.vicinity
        }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    // elevation:1,
    // backgroundColor:'red'
  },

  iconContainer: {
    backgroundColor: COLORS.lightRed,
    padding: 6,
    borderRadius: 4,
    marginRight: 5,
    elevation: 1
  },
  icon: {
    width: SIZES.responsiveScreenWidth(4),
    height: SIZES.responsiveScreenWidth(4),
    tintColor: COLORS.primary
  },

  locationText: {
    fontSize: SIZES.responsiveScreenFontSize(1.4),
    fontWeight: '700',
    color: COLORS.primary, elevation: 1
  },




});

export default PlaceRow;
