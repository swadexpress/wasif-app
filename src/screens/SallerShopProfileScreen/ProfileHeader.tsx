import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES, icons } from "../../constants";
import ProfileValueTop from '../ProfileScreen/ProfileValueTop';

const ProfileValue = ({ icon, value, onPress, isProfile, setSelectedShowDetails }: any) => {

    const navigation = useNavigation<any>()

    return (
        <>

            <LinearGradient
                style={{
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    height: 173,
                    alignItems: 'center',
                    elevation: 2,
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
                        marginTop:5

                    }}
                >

                    <FastImage
                        source={
                            {
                                uri: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000'
                            }
                        }
                        style={{
                            width: SIZES.responsiveScreenWidth(97),
                            height: 160,
                            borderRadius: 10,


                            // alignItems:'center',
                            justifyContent: 'center'
                        }}
                    >

                        <View
                            style={{
                                width: SIZES.responsiveScreenWidth(70),
                                height: SIZES.responsiveScreenWidth(15),
                                borderRadius: 10,
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                alignItems: 'center',
                                // justifyContent: 'center',
                                flexDirection: 'row',
                                marginLeft: 18,
                               



                            }}

                        >



                            <FastImage
                                source={
                                    {
                                        uri: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000'
                                    }
                                }
                                style={{
                                    width: SIZES.responsiveScreenWidth(13),
                                    height: SIZES.responsiveScreenWidth(13),
                                    borderRadius: 8,
                                    marginLeft: 8,
                                    borderWidth: 1,
                                    borderColor: COLORS.white

                                }}
                            />




                            <View
                                style={{

                                    // alignItems: 'center',
                                    // justifyContent: 'center',
                                    marginLeft: 10
                                }}
                            >

                                <View
                                    style={{

                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}
                                >



                                    <Text
                                        style={{
                                            fontSize: SIZES.responsiveScreenFontSize(1.6),
                                            fontWeight: '800',
                                            color: COLORS.white,



                                        }}
                                    >
                                       Foodies Kitchen
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

                                <Text
                                    style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        fontWeight: '800',
                                        color: COLORS.white,
                                        marginTop:2



                                    }}
                                >
                                    83% Positive Seller Ratings
                                </Text>

                            </View>



                        </View>
                    </FastImage>
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
                    icon={icons.restaurant}
                    value={"Products"}
                    onPress={() => setSelectedShowDetails('Products')}
                />

                <ProfileValueTop
                    icon={icons.profile}
                    value={"About"}
                    onPress={() => setSelectedShowDetails('About us')}

                />

                <ProfileValueTop
                    icon={icons.eye}

                    value={"Review"}
                    onPress={() => setSelectedShowDetails('Review')}

                />

                <ProfileValueTop
                    icon={icons.map}
                    onPress={() => setSelectedShowDetails('Map')}

                    value={"Map"}

                />
                <ProfileValueTop
                    icon={icons.transaction}
                    onPress={() => setSelectedShowDetails('Review')}
                    value={"Review"}

                />



            </LinearGradient>



        </>
    )
}



export default ProfileValue;