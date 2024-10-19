import {
    BackHandler,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons, images } from '../../constants';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Wrapper from '../../components/Wrapper';

const Success = ({ navigation }) => {
    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true })
        return () => backHandler.remove();


    }, [])

    return (
        <Wrapper>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Text
                        style={{

                            fontSize: 18,
                            fontWeight: '800',
                            color: COLORS.primary,
                            marginTop: 30



                        }}

                    >Well done Kawsar khan!</Text>


                    <Image
                        source={images.success}
                        style={{
                            width: 150,
                            height: 150,
                            marginTop: 40
                        }}
                        resizeMode='contain'
                    />
                    <Text
                        style={{
                            marginTop: 40,
                            fontSize: 18,
                            fontWeight: '500',
                            color: COLORS.primary


                        }}

                    >Panda-Go delivery
                        <Text
                            style={{

                                fontSize: 18,
                                fontWeight: '800',
                                color: COLORS.primary,



                            }}

                        > #55673</Text>
                    </Text>




                </View>



                <TouchableOpacity

                    style={{
                        marginTop: 5,
                        marginBottom:5
                    }}

                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('RiderHomeScreen')}>


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
                            source={icons.delivery}
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
                        > Ready to next job
                        </Text>

                    </LinearGradient>

                </TouchableOpacity>


                <TouchableOpacity

                    style={{
                      
                        marginBottom:15
                    }}

                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('RiderHomeScreen')}>


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
                            source={icons.check}
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
                        > I'm done for the day!
                        </Text>

                    </LinearGradient>

                </TouchableOpacity>





            </View>
        </Wrapper>
    )
}

export default Success