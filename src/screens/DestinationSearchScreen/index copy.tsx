import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import styles from './styles.js';
import { COLORS, SIZES, icons } from '../../constants';
import PlaceRow from './PlaceRow';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState<any>(null);
  const [destinationPlace, setDestinationPlace] = useState<any>(null);
  const [myCurrentLocationUpdated, setMyCurrentLocationUpdated] =
    useState<any>(null);

  const navigation = useNavigation<any>();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
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

  return (
    <>
      <View style={styles.mainContainer}>





        <View style={{
          flexDirection:'row',
          // alignItems:'center',
          // justifyContent:'center'
          

        }}>
          <View style={styles.whereFromContainer}>
            <Image
            
            source={icons.location}
            style ={{
              width:SIZES.responsiveScreenWidth(4),
              height:SIZES.responsiveScreenWidth(4),
              tintColor:COLORS.primary
            }}
            />




          </View>


          <View style={{
            width:SIZES.responsiveScreenWidth(87),
            alignItems:'center',
            backgroundColor:COLORS.primary4

          }}>


            <GooglePlacesAutocomplete
              placeholder="Where from?"
              onPress={(data, details = null) => {
                setOriginPlace({ data, details });

              }}
              enablePoweredByContainer={false}
              suppressDefaultStyles
              currentLocation={false}
              currentLocationLabel="Near by Current location"
              styles={{
                textInput: styles.textInput,
                container: styles.autocompleteContainer,
                // listView: styles.listView,
                separator: styles.separator,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyALoxAkEa7ovp5MMeb3NcjEoZa-xu6Frk0',
                language: 'en',
              }}
              renderRow={data => <PlaceRow data={data} />}
              renderDescription={data => data.description || data.vicinity}
              predefinedPlaces={[
                myCurrentLocationUpdated ? myCurrentLocationUpdated : null,
                homePlace,
                workPlace,
              ]}
            />

            <GooglePlacesAutocomplete
              placeholder="Where to?"
              onPress={(data, details = null) => {
                setDestinationPlace({ data, details });
              }}
              enablePoweredByContainer={false}
              suppressDefaultStyles
              styles={{
                textInput: styles.textInput,
                container: {
                  ...styles.autocompleteContainer,
                },
                separator: styles.separator,
              }}
              fetchDetails
              query={{
                key: 'AIzaSyCMm03dKpq1VhywQFS2LBBwI-dq9qjJu5A',
                language: 'en',
              }}
              renderRow={data => <PlaceRow data={data} />}
            />


          </View>
        </View>

      </View>
    </>
  );
};








const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  

  },
  textInput: {
    fontSize: SIZES.responsiveScreenFontSize(1.5),
    fontWeight: '600',
    marginLeft: 8
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  autocompleteContainer: {
    width: SIZES.responsiveScreenWidth(84),
    height: SIZES.responsiveScreenWidth(11),
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginTop: 10
  },

  whereFromContainer: {
    width: SIZES.responsiveScreenWidth(7),
    height: SIZES.responsiveScreenWidth(7),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red'
   
  },

});


export default DestinationSearch;
