import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES, icons, images } from "../../constants";
import ProfileValueTop from './ProfileValueTop';

const ProfileValue = ({ icon, value, onPress, isProfile, setSelectedShowDetails }: any) => {

    const navigation = useNavigation<any>()

    return (
        <>

            <LinearGradient
                style={{

                    backgroundColor: COLORS.primary,
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    height: 165,
                    alignItems: 'center',
                    elevation: 2,
                    // justifyContent: 'center',
                    width: SIZES.responsiveScreenWidth(100),


                }}

                locations={[0, 1]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={190}>
                <View
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10
                    }}
                >

                    <Image
                        source={images.profile}
                        style={{
                            width: SIZES.responsiveScreenWidth(19),
                            height: SIZES.responsiveScreenWidth(19),
                            borderRadius: 7
                        }}
                    />

                    <View
                        style={{

                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 5,
                            marginLeft: 13
                        }}
                    >



                        <Text
                            style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.6),
                                fontWeight: '800',
                                color: COLORS.primary,



                            }}
                        >
                            Kawsar Khan
                        </Text>



                        <Image
                            source={icons.check_circle}
                            style={{
                                marginLeft: 5,
                                marginTop: 3,
                                width: SIZES.responsiveScreenWidth(3),
                                height: SIZES.responsiveScreenWidth(3),
                                tintColor: COLORS.blue2
                            }}
                        />
                    </View>


                </View>
            </LinearGradient>






            <LinearGradient
                style={{

                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    elevation: 3,
                    width: SIZES.responsiveScreenWidth(90),
                    marginVertical: 2,
                    marginTop: -37,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}

                locations={[0, 1]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={185}>



                <ProfileValueTop
                    icon={icons.order}
                    value={"Orders"}
                    onPress={() => navigation.navigate('UserOrdersScreen')}
                />

                <ProfileValueTop
                    icon={icons.delivery}

                    value={"To Ship"}
                    onPress={() => navigation.navigate('UserToShipOrdersScreen')}

                />

                <ProfileValueTop
                    icon={!isProfile ? icons.eye : icons.check}

                    value={"Receive"}
                    onPress={() => navigation.navigate('UserReceiveOrdersScreen')}

                />

                <ProfileValueTop
                    icon={!isProfile ? icons.map : icons.restaurant}
                    onPress={() => navigation.navigate('UserReturnOrdersScreen')}

                    value={"Returns"}

                />
                <ProfileValueTop
                    icon={!isProfile ? icons.transaction : icons.transaction}
                    onPress={() => navigation.navigate('UserOrdersReviewScreen')}
                    value={"Review"}

                />



            </LinearGradient>



        </>
    )
}



export default ProfileValue;