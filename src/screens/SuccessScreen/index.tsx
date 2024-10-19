import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, images } from '../../constants';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';

const Success = ({ navigation }) => {


    return (
        <Wrapper>


            <View
                style={{
                    flex: 1,

                    alignItems: 'center'

                }}
            >

                <SingleImageHeader
                    name={'Successfully'}
                />

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Image
                        source={images.success}
                        style={{
                            width: 150,
                            height: 150
                        }}
                        resizeMode='contain'
                    />
                    <Text
                        style={{ 
                            textAlign: 'center',
                            marginTop: 15,
                            color: COLORS.primary,
                             fontSize:SIZES.responsiveScreenFontSize(2.3),
                             fontWeight:'700'
                            }}>Congratulations!</Text>

                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 15,
                            color: COLORS.darkGray,
                            fontSize:SIZES.responsiveScreenFontSize(1.7),
                        }}
                    >
                        Payment was successfully made!
                    </Text>


                </View>




                <TouchableOpacity

                    activeOpacity={0.9}
                    style={{
                        marginTop: '7%',
                        marginBottom: 20
                    }}
                    onPress={() => navigation.navigate('DeliveryStatusScreen')}
                >



                    <LinearGradient
                        style={{
                            borderRadius: 10,
                            width: SIZES.responsiveScreenWidth(80),
                            height: SIZES.responsiveScreenWidth(8.5),
                            elevation: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                        locations={[0, 1,]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={90}>

                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                            fontWeight: '800',
                            color: COLORS.primary,
                        
                            marginTop: 1
                        }}>
                            Done
                        </Text>
                    </LinearGradient>


                </TouchableOpacity>


            </View>



        </Wrapper>

    )
}

export default Success