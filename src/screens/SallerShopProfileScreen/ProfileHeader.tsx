import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { COLORS, SIZES, icons, images } from "../../constants"
import ProfileValueTop from "../ProfileScreen/ProfileValueTop"



const ProfileHeader = ({ setSelectedShowDetails }: any) => {

    console.log('dd')
    return (
        <>
            <View style={{
                backgroundColor: COLORS.primary,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                height: 159,
                alignItems: 'center',
                // justifyContent: 'center',
                width: SIZES.responsiveScreenWidth(100),

            }}
            >
                <View
                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 16
                    }}
                >

                    <Image
                        source={images.profile}
                        style={{
                            width: SIZES.responsiveScreenWidth(14),
                            height: SIZES.responsiveScreenWidth(14),
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
                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                fontWeight: '700',
                                color: COLORS.white,
                                marginLeft: 10


                            }}
                        >
                            Kawsar Khan
                        </Text>

                        <View style={{
                            width: SIZES.responsiveScreenWidth(3),
                            height: SIZES.responsiveScreenWidth(3),
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 7,
                            backgroundColor: COLORS.blue2,
                            borderRadius: 30,
                            marginTop: 2
                        }}>


                            <Image
                                source={icons.check}
                                style={{
                                    width: SIZES.responsiveScreenWidth(2.4),
                                    height: SIZES.responsiveScreenWidth(2.4),
                                    tintColor: COLORS.primary
                                }}
                            />
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.1),
                            fontWeight: '700',
                            color: COLORS.blue2,
                            marginTop: 2
                        }}
                        >
                        All Days Open
                    </Text>
                </View>

            </View>



            <View style={{
                backgroundColor: COLORS.white,
                borderRadius: 5,
                elevation: 2,
                width: SIZES.width * 0.9,
                marginVertical: 2,
                marginTop: -35,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>

                <ProfileValueTop
                    icon={icons.restaurant}

                    value="Products"

                    onPress={() => setSelectedShowDetails('Products')}
                />

                <ProfileValueTop
                    icon={icons.profile}

                    value="About"
                    onPress={() => setSelectedShowDetails('About us')}

                />

                <ProfileValueTop
                    icon={icons.eye}

                    value="Review"
                    onPress={() => setSelectedShowDetails('Review')}

                />

                <ProfileValueTop
                    icon={icons.map}
                    onPress={() => setSelectedShowDetails('Map')}


                    value="Map"
                />
                <ProfileValueTop
                    icon={icons.transaction}
                    onPress={() => setSelectedShowDetails('Review')}

                    value="Review"
                />


            </View>


        </>
    )

}

export default ProfileHeader