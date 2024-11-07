import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const Card = ({item}:any) => {


  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: item.product_image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{item?.product_name?.slice(0,40)}</Text>
          <Text style={[styles.name,{
            color:COLORS.red2,
            marginTop:6,
            fontWeight:'900',
          }]}>${item.product_price}</Text>
          <Text style={styles.bio}>{item.product_dis}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fefefe',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: SIZES.responsiveScreenFontSize(1.6),
    color: COLORS.primary,
    fontWeight: '800',
  },
  bio: {
    fontSize:SIZES.responsiveScreenFontSize(1.3),
    color:COLORS.primary,
    fontWeight: '700',
    marginTop:5
  },
});

export default Card;