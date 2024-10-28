import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import styles from './styles.js';
import Wrapper from '../../components/Wrapper';
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
    <Wrapper>
      <View style={styles.mainContainer}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });

          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
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
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={(data:any) => data.description || data.vicinity}
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
          // currentLocation={true}
          currentLocationLabel="Near by Current location"
          styles={{
            textInput: styles.textInput,
            // container: styles.autocompleteContainer,
            container: {
              ...styles.autocompleteContainer,
              top: SIZES.responsiveScreenWidth(11.2),
            },
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyALoxAkEa7ovp5MMeb3NcjEoZa-xu6Frk0',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={(data:any) => data.description || data.vicinity}
          predefinedPlaces={[
            myCurrentLocationUpdated ? myCurrentLocationUpdated : null,
            homePlace,
            workPlace,
          ]}
        />

        {/* <GooglePlacesAutocomplete
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
              top: SIZES.responsiveScreenWidth(11.2),
            },
            listView: styles.listView,
            separator: styles.separator,
            
          }}
          fetchDetails
          query={{
            key: 'AIzaSyALoxAkEa7ovp5MMeb3NcjEoZa-xu6Frk0',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        /> */}

        {/* Circle near Origin input */}
        <View style={styles.whereFromContainer} >

          <Image source={icons.location}
            style={styles.whereFromContainerIcon}
          />
        </View>

        {/* Line between dots */}


        <View style={{
          top: SIZES.responsiveScreenWidth(9),
          backgroundColor: '#c4c4c4',
          position: 'absolute',
          left: SIZES.responsiveScreenWidth(7),
          zIndex: 999

        }} >
          {/* <Image source={icons.dotted_line}
            style={{
              width: 2,
              height: SIZES.responsiveScreenWidth(5.5),
              tintColor: COLORS.primary


            }}
          /> */}
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
    </Wrapper>
  );
};








const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20

  },
  textInput: {
    width: SIZES.responsiveScreenWidth(86.5),
    height: SIZES.responsiveScreenWidth(9),
    padding: 10,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1.5,
    marginLeft: SIZES.responsiveScreenWidth(9.5),
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
    left: 10,
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
});


export default DestinationSearch;
