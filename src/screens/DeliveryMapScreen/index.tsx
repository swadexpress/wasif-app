import {
    Image,
    PermissionsAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { COLORS, SIZES, icons, images } from '../../constants';

import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import LinearGradient from 'react-native-linear-gradient';
import MapViewDirections from 'react-native-maps-directions';
import { utils } from '../../../utils';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';

const Map = ({ navigation }) => {

    const mapView = React.useRef()

    const [region, setRegion] = React.useState(null)
    const [toLoc, setToLoc] = React.useState(null)
    const [fromLoc, setFromLoc] = React.useState(null)
    const [angle, setAngle] = React.useState(0)
    const [duration, setDuration] = React.useState("")
    const [isReady, setIsReady] = React.useState(false)


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


    React.useEffect(() => {
        requestCameraPermission()





    }, [])






    return (

        <Wrapper>
            <View
                style={styles.mainContainer}
            >

                <SingleImageHeader name='Map' />
                {/* ======================== */}


                <MapView
                    ref={mapView}
                    style={
                        styles.mapViewMainContainer
                    }
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}


                >

                    {
                        fromLoc &&
                        <Marker

                            key={'FromLoc'}
                            coordinate={fromLoc}
                            tracksViewChanges={false}
                            icon={icons.navigator}
                            rotation={angle}
                            anchor={{ x: 0.5, y: 0.5 }}
                            style={{ width: 26, height: 28 }}

                        >
                            {/* <Image
                                source ={icons.navigator1}
                                style ={{width:30,height:30}}
                            /> */}

                        </Marker>
                    }


                    {
                        toLoc &&
                        <Marker
                            width={10}
                            key={'ToLoc'}
                            coordinate={toLoc}
                            tracksViewChanges={false}
                            icon={icons.location_pin}
                            rotation={angle}
                            anchor={{ x: 0.5, y: 0.5 }}
                        >

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




                {/* ============renderInfo============= */}


                <LinearGradient
                    style={

                        styles.linearGradientInfoMainContainer
                    }

                    locations={[0, 1,]}
                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={190}>



                    <LinearGradient
                        style={

                            styles.linearGradientRiderInfoMainContainer
                        }
                        locations={[0, 1,]}
                        colors={[COLORS.lightRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={90}>
                        <View style={
                            styles.linearGradientRiderInfoContainer
                        }>
                            <View style={

                                styles.linearGradientRiderLeftSiteInfoContainer
                            }>

                                <Image
                                    source={icons.location}
                                    style={
                                        styles.linearGradientRiderLeftSiteInfoIcon
                                    }
                                />
                                <View style={{
                                    marginLeft: 5,
                                    width: '84%'
                                }} >

                                    <Text style={
                                        styles.linearGradientRiderLeftSiteInfoText
                                    }>
                                        {`Kawsar Khan`}
                                    </Text>
                                    <Text style={
                                        styles.linearGradientRiderLeftSiteInfoText2
                                    }>
                                        Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                                        Bangladesh
                                    </Text>

                                </View>




                            </View>



                            <Image
                                source={icons.coupon}


                                style={

                                    styles.linearGradientRiderLeftSiteInfoCouponIcon
                                }

                            />
                        </View>

                    </LinearGradient>


                    <TouchableOpacity

                        activeOpacity={0.9}

                        style={{
                            marginBottom: 15,
                            marginTop: 10
                        }}
                        onPress={() => {
                            navigation.navigate('RiderReviewScreen')
                        }}
                    >

                        <LinearGradient
                            style={

                                styles.linearGradientDeliveryLeftSiteInfoMainContainer
                            }

                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={90}>

                            <View style={

                                styles.linearGradientDeliveryLeftSiteInfoContainer
                            }>
                                <View

                                    style={
                                        styles.linearGradientDeliveryLeftSiteInfoSubContainer
                                    }>

                                    <Image
                                        source={images.profile}
                                        style={styles.linearGradientDeliveryLeftSiteInfoProfileImage}
                                    />



                                    <View
                                        style={{
                                            marginLeft: 8
                                        }}
                                    >
                                        <Text
                                            style={
                                                styles.linearGradientDeliveryLeftSiteInfoProfileNameText
                                            }
                                        >Kawsar khan
                                        </Text>

                                        <Text
                                            style={
                                                styles.linearGradientDeliveryLeftSiteInfoProfileStatusText
                                            }
                                        >Delivery man
                                        </Text>
                                        <Text
                                            style={styles.linearGradientDeliveryLeftSiteInfoProfileStatusText}
                                        >+8801771297948
                                        </Text>
                                    </View>

                                </View>

                                <View
                                    style={
                                        styles.linearGradientDeliveryRightInfoContainer
                                    }


                                >
                                    <Image

                                        source={icons.call}
                                        style={
                                            styles.linearGradientDeliveryRightInfoIcon
                                        }



                                    />

                                </View>

                            </View>
                        </LinearGradient>

                    </TouchableOpacity>

                </LinearGradient>

            </View >
        </Wrapper >
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mapViewMainContainer: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10
    },
    linearGradientInfoMainContainer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 1,
        marginTop: 5,
        alignItems: 'center'
    },
    linearGradientRiderInfoMainContainer: {
        borderRadius: 5,
        elevation: 1,
        marginTop: 20,
        width: SIZES.responsiveScreenWidth(95),

    },
    linearGradientRiderInfoContainer: {
        marginTop: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8
    },
    linearGradientRiderLeftSiteInfoContainer: {
        flexDirection: 'row',
    },
    linearGradientRiderLeftSiteInfoIcon: {
        width: SIZES.responsiveScreenWidth(5.5),
        height: SIZES.responsiveScreenWidth(5.5),
        tintColor: COLORS.primary
    },
    linearGradientRiderLeftSiteInfoText: {
        fontSize: SIZES.responsiveScreenFontSize(1.6),
        fontWeight: '800',
        color: COLORS.primary,
        marginTop: 2
    },
    linearGradientRiderLeftSiteInfoText2: {
        fontSize: SIZES.responsiveScreenFontSize(1.3),
        fontWeight: '700',
        color: COLORS.gray,
        marginBottom: 8,
        marginTop: 2,
    },
    linearGradientRiderLeftSiteInfoCouponIcon: {
        width: SIZES.responsiveScreenWidth(7),
        height: SIZES.responsiveScreenWidth(7),
        tintColor: COLORS.primary,
    },
    linearGradientDeliveryLeftSiteInfoMainContainer: {
        borderRadius: 6,
        elevation: 1,
        width: SIZES.responsiveScreenWidth(95),
    },

    linearGradientDeliveryLeftSiteInfoContainer: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 6

    },
    linearGradientDeliveryLeftSiteInfoSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    linearGradientDeliveryLeftSiteInfoProfileImage: {
        width: SIZES.responsiveScreenWidth(15),
        height: SIZES.responsiveScreenWidth(15),
        borderRadius: 5

    },
    linearGradientDeliveryLeftSiteInfoProfileNameText: {
        fontSize: SIZES.responsiveScreenFontSize(1.7),
        fontWeight: '800',
        color: COLORS.primary

    },
    linearGradientDeliveryLeftSiteInfoProfileStatusText: {
        fontSize: SIZES.responsiveScreenFontSize(1.4),
        fontWeight: '700',
        color: COLORS.darkGray2,
        marginTop: 2

    },

    linearGradientDeliveryRightInfoIcon: {
        width: SIZES.responsiveScreenWidth(6),
        height: SIZES.responsiveScreenWidth(6),
        tintColor: COLORS.primary
    },




})

export default Map;