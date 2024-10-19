import {
    Image,
    PermissionsAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { COLORS, SIZES, icons } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import LinearGradient from 'react-native-linear-gradient';
import MapViewDirections from 'react-native-maps-directions';
import { utils } from '../../../utils';
import IconButton from '../../components/IconButton';
import Wrapper from '../../components/Wrapper';
import Header from './Header';

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


    function renderHeaderButtons() {
        return (
            <>

                <IconButton
                    icon={icons.back}
                    containerStyle={{
                        position: 'absolute',
                        top: SIZES.padding * 1,
                        left: SIZES.padding,
                        ...styles.buttonStyle,
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray2
                    }}
                    onPress={() => {
                        navigation.goBack();

                    }}


                />
                <View
                    style={{
                        position: 'absolute',
                        top: SIZES.padding * 1,
                        right: SIZES.padding,
                    }}

                >

                    <IconButton
                        icon={icons.globe}
                        containerStyle={{
                            ...styles.buttonStyle
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}

                    />

                    <IconButton
                        icon={icons.focus}
                        containerStyle={{
                            marginTop: SIZES.radius,
                            ...styles.buttonStyle
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}

                        onPress={() => {
                            requestCameraPermission()
                        }}

                    />


                </View>





            </>




        )

    }






    return (
        <Wrapper>
            <View
                style={{
                    flex: 1,

                }}
            >

                <Header />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>



                    <View style={{

                        marginHorizontal: 10,
                        borderRadius: 20,
                        elevation: 1,
                        marginTop: 10,
                        backgroundColor: COLORS.white,
                        width: SIZES.responsiveScreenWidth(97),
                        height: SIZES.responsiveScreenHeight(50),
                    }}>
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


                            {
                                toLoc &&
                                <Marker




                                    key={'ToLoc'}
                                    coordinate={toLoc}
                                    tracksViewChanges={false}
                                    // icon={icons.location_pin}
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

                            <MapViewDirections
                                origin={fromLoc}
                                destination={toLoc}
                                apikey='AIzaSyDxe1h0iHqQMFcEV43yNAMAVcGYkpbxV-Y'
                                strokeWidth={5}
                                strokeColor={COLORS.primary}
                                optimizeWaypoints={true}
                                onReady={result => {
                                    setDuration(Math.ceil(result.duration))


                                    if (!isReady) {
                                        mapView.current.fitToCoordinates(result.coordinates, {
                                            edgePadding: {
                                                right: SIZES.width * 0.1,
                                                bottom: 400,
                                                left: SIZES.width * 0.1,
                                                top: SIZES.height * 0.1
                                            }
                                        })
                                        // Repostion the navigator

                                        if (result.coordinates.length >= 2) {
                                            let angle = utils.calculateAngle(result.coordinates)
                                            setAngle(angle)

                                        }
                                        setIsReady(true)
                                    }

                                }}


                            />


                        </MapView>
                    </View>
                </View>


                {/* {renderHeaderButtons()} */}


                <LinearGradient
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 115,
                        marginTop: 10,
                        elevation: 1,
                        marginBottom: 60,
                        borderRadius: 10,
                        marginHorizontal: 10
                    }}

                    locations={[0, 1,]}
                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={160}>









                    {showStartArea ?


                        <>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}
                            >
                                <Image
                                    source={icons.focus}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(4),
                                        height: SIZES.responsiveScreenWidth(4),
                                        tintColor: COLORS.black
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                                        fontWeight: '700',
                                        color: COLORS.black,
                                        marginLeft: 5
                                    }}
                                >Head to your  Panda-Go
                                </Text>

                            </View>


                            <Text
                                style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.6),

                                    fontWeight: '700',
                                    color: COLORS.black,
                                    marginLeft: 5
                                }}
                            > location
                            </Text>

                            <TouchableOpacity onPress={() => navigation.navigate('RiderTruckWorkingAreaMapScreen')}>

                                <LinearGradient
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: 10,
                                        backgroundColor: COLORS.primary,
                                        borderRadius: 5,
                                        elevation: 2,
                                        width: SIZES.responsiveScreenWidth(80),
                                        height: SIZES.responsiveScreenWidth(8.5),


                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={160}>


                                    <Image
                                        source={icons.map}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(5),
                                            height: SIZES.responsiveScreenWidth(5),
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
                                    >Start direcations
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </>
                        :

                        <>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}
                            >
                                <Image
                                    source={icons.focus}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(4),
                                        height: SIZES.responsiveScreenWidth(4),
                                        tintColor: COLORS.black
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                                        fontWeight: '700',
                                        color: COLORS.black,
                                        marginLeft: 5
                                    }}
                                >Head to your  Panda-Go
                                </Text>

                            </View>


                            <Text
                                style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.6),

                                    fontWeight: '700',
                                    color: COLORS.black,
                                    marginLeft: 5
                                }}
                            > location
                            </Text>

                            <TouchableOpacity 

                            activeOpacity={0.9}
                            
                            onPress={() => navigation.navigate('RiderTruckWorkingAreaMapScreen')}>

                                <LinearGradient
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: 10,
                                        backgroundColor: COLORS.primary,
                                        borderRadius: 5,
                                        elevation: 2,
                                        width: SIZES.responsiveScreenWidth(80),
                                        height: SIZES.responsiveScreenWidth(8.5),


                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={160}>


                                    <Image
                                        source={icons.map}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(5),
                                            height: SIZES.responsiveScreenWidth(5),
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
                                    >Start direcations
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </>
                    }






                </LinearGradient>

            </View>

        </Wrapper>
    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.white
    }
})

export default Map;