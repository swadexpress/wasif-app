import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { connect, useSelector } from "react-redux";

import { COLORS, SIZES, icons, images } from "../../constants";
import ProfileValueTop from './ProfileValueTop';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsysncStorage from '@react-native-community/async-storage';

const ProfileValue = ({ icon, value, onPress, isProfile, setSelectedShowDetails }: any) => {

    const navigation = useNavigation<any>()
    const [appUsedUserStastus, setappUsedUserStastus] = useState<string>()

    // const { appUsedUserStastus } = useSelector((state: any) => state.product);


    const loadUserEffectData = async () => {
        let loadAppUsedUserStastus = await AsysncStorage.getItem('@appUsedUserStastus') || 'Seller';
        setappUsedUserStastus(loadAppUsedUserStastus)
    }

    useEffect(() => {
        loadUserEffectData()
    })


    return (
        <>

            <LinearGradient
                style={{

                    backgroundColor: COLORS.primary,
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    height: 160,
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

                    <Text
                        style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.3),
                            fontWeight: '700',
                            color: COLORS.primary,
                            marginTop: 5
                        }}

                    >
                        Kawsar Khan
                    </Text>




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
                    icon={appUsedUserStastus == 'Seller' ? icons.restaurant :  appUsedUserStastus == 'Rider' ? icons.order : icons.order}
                    value={appUsedUserStastus == 'Seller' ? "Products" : appUsedUserStastus == 'Rider' ? "Orders" : "Orders"}
                    onPress={() => appUsedUserStastus == 'Seller' ? setSelectedShowDetails('Products') : navigation.navigate('UserOrdersScreen')}
                />

                <ProfileValueTop
                    icon={appUsedUserStastus == 'Seller' ? icons.profile :  appUsedUserStastus == 'Rider' ? icons.delivery : icons.delivery}

                    value={appUsedUserStastus == 'Seller' ? "About" : appUsedUserStastus == 'Rider' ? "To Ship" : "To Ship"}
                    onPress={() => appUsedUserStastus == 'Seller' ? setSelectedShowDetails('About us') : navigation.navigate('UserOrdersScreen')}

                />

                <ProfileValueTop
                    icon={appUsedUserStastus == 'Seller' ? icons.eye : appUsedUserStastus == 'Rider' ? icons.check : icons.check}

                    value={appUsedUserStastus == 'Seller' ? "Review" : appUsedUserStastus == 'User' ? "Receive" : "Receive"}
                    onPress={() => appUsedUserStastus == 'Seller' ? setSelectedShowDetails('Review') : navigation.navigate('UserOrdersScreen')}

                />

                <ProfileValueTop
                    icon={appUsedUserStastus == 'Seller' ? icons.map :  appUsedUserStastus == 'Rider' ? icons.restaurant : icons.restaurant}
                    onPress={() => appUsedUserStastus == 'Seller' ? setSelectedShowDetails('Map') : navigation.navigate('UserOrdersScreen')}

                    value={appUsedUserStastus == 'Seller' ? "Map" : appUsedUserStastus == 'Rider' ? "Returns" : "Returns"}

                />
                <ProfileValueTop
                    icon={appUsedUserStastus == 'Seller' ? icons.transaction :  appUsedUserStastus == 'Rider' ? icons.transaction : icons.transaction}
                    onPress={() => isProfile ? setSelectedShowDetails('Review') : navigation.navigate('ReviewScreen')}
                    value={appUsedUserStastus == 'Seller' ? "Review" : appUsedUserStastus == 'Rider' ? "Review" : "Review"}

                />



            </LinearGradient>



        </>
    )
}



export default ProfileValue;