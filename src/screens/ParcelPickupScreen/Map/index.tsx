import {
    Image,
    PermissionsAndroid,
    View
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { COLORS, SIZES, icons } from '../../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

const Map = () => {

    const mapView = useRef<any>()

    const [region, setRegion] = useState<any>(null)
    const [toLoc, setToLoc] = useState<any>(null)
    const [fromLoc, setFromLoc] = useState<any>(null)
    const [angle, setAngle] = useState<any>(0)
    const [duration, setDuration] = useState<any>('')
    const [isReady, setIsReady] = useState<any>(false)
    const [showStartArea, setShowStartArea] = useState<any>(true)
    const navigation = useNavigation<any>()


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Allow Your Location to used in our Server "
                    ,
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                Geolocation.getCurrentPosition(
                    (position) => {
                        const SCREEN_HEIGHT = SIZES.height
                        const SCREEN_WIDTH = SIZES.width
                        const ASPECT_RATIO = SIZES.width / SIZES.height
                        const LATITUDE_DELTA = 0.0922
                        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO



                        console.log(position.coords);
                        console.log(position.coords.latitude, 'latitude');
                        console.log(position.coords.longitude, 'longitude');
                        console.log(SIZES.width, '...............')


                        //   latitude: 23.705743723538248,
                        //   longitude: 90.39164100673312,

                        let initialRegion = {
                            latitude: 23.705743723538248,
                            // latitude: position.coords.latitude,
                            longitude: 90.39164100673312,
                            // longitude: position.coords.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA

                        }

                        let destination = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        }

                        setRegion(initialRegion)
                        // setFromLoc(destination)
                        setToLoc(initialRegion)





                    },
                    (error) => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );


            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    useEffect(() => {
        requestCameraPermission()
        setTimeout(() => {
            setShowStartArea(false)
        }, 3000)

    }, [0])





    return (


        <MapView
            ref={mapView}
            style={{
                flex: 1,
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={region}


        >

            {
                fromLoc &&
                <Marker

                    key={'FromLoc'}
                    coordinate={fromLoc}
                    tracksViewChanges={false}
                    // icon={icons.navigator}
                    rotation={angle}
                    anchor={{ x: 0.5, y: 0.5 }}

                >
                    <View style={{ position: "absolute" }}>
                        <Image source={icons.location} style={{
                            height: 35,
                            width: 35,
                            tintColor: COLORS.red
                        }} />
                    </View>

                </Marker>
            }

      


        </MapView>


    )
}



export default Map;