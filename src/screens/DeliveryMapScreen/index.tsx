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
import IconButton from '../../components/IconButton';
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

    function renderMap() {

        return (
            <MapView
                ref={mapView}
                style={{
                    flex: 1,
                    marginHorizontal: 10,
                    borderRadius: 10
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


        )
    }

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




    function renderInfo() {

        return (


            <LinearGradient
                style={{
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    elevation: 1,
                    marginTop: 5,
                    alignItems: 'center'

                }}

                locations={[0, 1,]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={190}>



                <LinearGradient
                    style={{
                        borderRadius: 5,
                        elevation: 1,
                        marginTop: 20,
                        width: SIZES.responsiveScreenWidth(95),
                    }}
                    locations={[0, 1,]}
                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={90}>
                    <View style={{
                        marginTop: 5,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 8


                    }}>
                        <View style={{
                            flexDirection: 'row',
                            // alignItems: 'center',
                        }}>

                            <Image
                                source={icons.location}
                                style={{
                                    width: SIZES.responsiveScreenWidth(5.5),
                                    height: SIZES.responsiveScreenWidth(5.5),

                                    tintColor: COLORS.primary
                                }}
                            />
                            <View style={{
                                marginLeft: 5,
                                width: '84%'
                            }} >

                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.6),
                                    fontWeight: '800',
                                    color: COLORS.primary,
                                    marginTop: 2
                                }}>
                                    {`Kawsar Khan`}
                                </Text>
                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.3),

                                    fontWeight: '700',
                                    color: COLORS.gray,
                                    marginBottom: 8,
                                    marginTop: 2,
                                    
                                }}>
                                    Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                                    Bangladesh
                                </Text>

                            </View>




                        </View>



                        <Image
                            source={icons.coupon}


                            style={{
                                width: SIZES.responsiveScreenWidth(7),
                                height: SIZES.responsiveScreenWidth(7),
                                tintColor: COLORS.primary
                            }}

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
                        style={{
                            borderRadius: 6,
                            elevation: 1,
                            width: SIZES.responsiveScreenWidth(95),

                        }}

                        locations={[0, 1,]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={90}>

                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 5,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginVertical: 6


                        }}>
                            <View

                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}>

                                <Image
                                    source={images.profile}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(15),
                                        height: SIZES.responsiveScreenWidth(15),
                                        borderRadius: 5
                                    }}
                                />



                                <View
                                    style={{
                                        marginLeft: 8
                                    }}
                                >
                                    <Text
                                        style={{

                                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                                            fontWeight: '800',
                                            color: COLORS.primary

                                        }}
                                    >Kawsar khan
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                                            fontWeight: '700',
                                            color: COLORS.darkGray2,
                                            marginTop: 2
                                        }}
                                    >Delivery man
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                                            fontWeight: '700',
                                            color: COLORS.darkGray2,

                                        }}
                                    >+8801771297948
                                    </Text>
                                </View>

                            </View>

                            <View
                                style={{
                                    height: SIZES.responsiveScreenWidth(8.5),
                                    width: SIZES.responsiveScreenWidth(8.5),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: COLORS.primary,



                                }}


                            >
                                <Image

                                    source={icons.call}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(6),
                                        height: SIZES.responsiveScreenWidth(6),
                                        tintColor: COLORS.primary
                                    }}



                                />

                            </View>

                        </View>
                    </LinearGradient>

                </TouchableOpacity>

            </LinearGradient>



        )




    }




    return (

        <Wrapper>
            <View
                style={{
                    flex: 1,
                }}
            >

                <SingleImageHeader name='Map' />

                {renderMap()}
                {renderInfo()}

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