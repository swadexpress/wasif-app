import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { COLORS } from '../../constants';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCMm03dKpq1VhywQFS2LBBwI-dq9qjJu5A';

const RouteMap = ({origin, destination, setOrder, order}:any) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [heading, setHeading] = useState('');

  const originLoc = {
    latitude: latitude ? latitude : origin.details.geometry.location.lat,
    longitude: longitude ? longitude : origin.details.geometry.location.lng,
    // heading: heading ? longitude : 0,

    // latitude: 37.3317876,
    // longitude: -122.0054812,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
    // latitude: 37.771707,
    // longitude: -122.4053769,
  };


  const onDirectionFound = (event:any) => {
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
        originLocLatitude: origin.details.geometry.location.lat,
        originLocLongitude: origin.details.geometry.location.lng,
        destinationLocLatitude: destination.details.geometry.location.lat,
        destinationLocLongitude: destination.details.geometry.location.lng,
      });
    }
  };


  const onUserLocationChange = async (event:any) => {
    const {latitude, longitude, heading} = event.nativeEvent.coordinate;
    // setLatitude(latitude);
    // setLongitude(longitude);
    // setHeading(heading);


  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      onUserLocationChange={onUserLocationChange}
      initialRegion={{
        latitude: latitude ? latitude : origin.details.geometry.location.lat,
        longitude: longitude ? longitude : origin.details.geometry.location.lng,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor={COLORS.primary}
        onReady={onDirectionFound}
      />

      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
