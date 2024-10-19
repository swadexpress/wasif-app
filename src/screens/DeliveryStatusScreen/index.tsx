
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, constants, icons } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';

const DeliveryStatus = () => {

    const [currentStep, setCurrentStep] = React.useState(2)
    const navigation = useNavigation<any>()






    return (

        <Wrapper>
            <View
                style={{
                    flex: 1,

                }}
            >
                <SingleImageHeader
                    name={'Delivery Status'}

                />


                {/* Information  */}
                <View
                    style={{
                        marginTop: 15


                    }}

                >
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: SIZES.responsiveScreenFontSize(1.5),
                            color: COLORS.black, fontWeight: '900'

                        }}

                    >Your Booing code: <Text
                        style={{
                            textAlign: 'center',
                            fontSize: SIZES.responsiveScreenFontSize(1.6),
                            color: COLORS.primary,
                            fontWeight: '900',
                            marginLeft: 3

                        }}

                    >#57706
                        </Text>
                    </Text>


                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: SIZES.responsiveScreenFontSize(1.5),
                            marginTop: 3,
                            color: COLORS.black, fontWeight: '900'

                        }}

                    >3 Services- <Text
                        style={{
                            textAlign: 'center',
                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                            color: COLORS.red2,
                            fontWeight: '900',
                            marginLeft: 3

                        }}

                    >$90.30
                        </Text>
                    </Text>




                </View>


                {/* Track Order  */}
                <ScrollView
                    showsVerticalScrollIndicator={false}

                >
                    <View
                        style={{
                            marginTop: 30,
                            marginHorizontal: 20,
                            marginBottom: 30


                        }}

                    >



                        {constants.track_order_status.map((item, index) => {
                            return (

                                <View
                                    key={`track-${index}`}
                                    style={{

                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: -5
                                        }}

                                    >
                                        <View style={{
                                            width: SIZES.responsiveScreenWidth(7.5),
                                            height: SIZES.responsiveScreenWidth(7.5),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            backgroundColor: index <= currentStep ? COLORS.primary : COLORS.gray3
                                        }}>


                                            <Image

                                                source={icons.check}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(5),
                                                    height: SIZES.responsiveScreenWidth(5),


                                                    tintColor: index <= currentStep ? COLORS.white : COLORS.gray
                                                }}

                                            />
                                        </View>
                                        <View

                                            style={{
                                                marginLeft: SIZES.radius
                                            }}

                                        >
                                            <Text style={{
                                                fontWeight: '700',
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                color: COLORS.black
                                            }}>{item.title}</Text>

                                            <Text style={{

                                                fontWeight: '700',
                                                fontSize: SIZES.responsiveScreenFontSize(1.1),
                                                color: COLORS.gray,
                                                fontStyle: 'italic'

                                            }}>
                                                {item.sub_title}
                                            </Text>

                                        </View>



                                    </View>

                                    {index < constants.track_order_status.length - 1 &&
                                        <View>
                                            {index < currentStep &&
                                                <View
                                                    style={{
                                                        height: SIZES.responsiveScreenWidth(9.5),
                                                        width: SIZES.responsiveScreenWidth(0.8),
                                                        marginLeft: SIZES.responsiveScreenWidth(3),
                                                        backgroundColor: COLORS.primary,
                                                        zIndex: -1
                                                    }}


                                                />
                                            }


                                            <View>
                                                {index >= currentStep &&

                                                    <Image
                                                        source={icons.dotted_line}
                                                        resizeMode='cover'
                                                        style={{
                                                            width: SIZES.responsiveScreenWidth(0.6),
                                                            height: SIZES.responsiveScreenWidth(11),
                                                            marginLeft: SIZES.responsiveScreenWidth(3),
                                                        }}



                                                    />

                                                }

                                            </View>
                                        </View>
                                    }

                                </View>
                            )
                        })}

                    </View>





                    <View

                        style={{
                            marginTop: 20


                        }}

                    >
                        {currentStep < constants.track_order_status.length - 1 &&
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center'

                                }}


                            >


                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.red2,
                                        width: SIZES.responsiveScreenWidth(45),
                                        height: SIZES.responsiveScreenWidth(8.5),
                                        borderRadius: 6,
                                        flexDirection: 'row'
                                    }}
                                    onPress={() => {
                                        navigation.navigate('Home')
                                    }}>

                                    <Image source={icons.home}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(4),
                                            height: SIZES.responsiveScreenWidth(4),
                                            tintColor: COLORS.white
                                        }}
                                    />





                                    <Text
                                        style={{


                                            color: COLORS.white,
                                            fontWeight: '700',
                                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                                            marginLeft: 5

                                        }}
                                    >
                                        Home
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.primary,
                                        width: SIZES.responsiveScreenWidth(45),
                                        height: SIZES.responsiveScreenWidth(8.5),
                                       
                                       
                                        borderRadius: 6,
                                        flexDirection: 'row',
                                        marginLeft: 15
                                    }}

                                    onPress={() => navigation.navigate("DeliveryMapScreen")}

                                >

                                    <Image source={icons.map}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(4),
                                            height: SIZES.responsiveScreenWidth(4),
                                            tintColor: COLORS.white
                                        }}
                                    />

                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            fontWeight: '700',
                                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                                            marginLeft: 5
                                        }}
                                    >
                                        Map
                                    </Text>
                                </TouchableOpacity>



                            </View>








                        }




                    </View>


                </ScrollView>



            </View>


        </Wrapper>
    )
}

export default DeliveryStatus;