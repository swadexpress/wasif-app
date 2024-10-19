
import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../../constants';
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import CardItem from '../../components/CardItem'
import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import FormInputCheck from '../../components/FormInputCheck'
import FromInput from '../../components/FromInput'
import Header from '../../components/Header';
import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LineDivider from '../../components/LineDivider';
import React from 'react';
import StepperInput from '../../components/StepperInput'
import TextButton from '../../components/TextButton'
import TextIconButton2 from '../../components/TextIconButton2'
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native';
import SingleImageHeader from '../../components/SingleImageHeader';

const DeliveryStatus = () => {

    const [currentStep, setCurrentStep] = React.useState(2)
    const navigation = useNavigation()






    return (


        <>
            <View
                style={{
                    marginTop: 30,
                    marginHorizontal: 20,
                    marginBottom: 30,
                    width:'100%'


                }}

            >

                {constants.track_order_status.map((item, index) => {
                    return (

                        <View
                            key={`track-${index}`}
                            style={{
                                flexDirection: 'row',
                                // alignItems:'center',
                                // justifyContent:'center'

                            }}
                        >
                            <View style ={{
                                 marginRight: 15,
                                 alignItems:'center',marginTop:-4
                            }}>

                          

                            <Text style={{
                                fontWeight: '700',
                                fontSize: 10,
                                color: index <= currentStep ? COLORS.primary : COLORS.gray,
                               
                            }}>{'10 Oct'}</Text>
                          

                            <Text style={{
                                fontWeight: '700',
                                fontSize: 9,
                                color: index <= currentStep ? COLORS.primary : COLORS.gray,
                              
                                marginTop:1
                            }}>{'11:45'}</Text>
                              </View>

                            <View
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
                                        width: 22,
                                        height: 22,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 5,
                                        backgroundColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1
                                    }}>


                                        <Image

                                            source={icons.check}
                                            style={{
                                                width: 15,
                                                height: 15,
                                                tintColor: index <= currentStep ? COLORS.white : COLORS.gray
                                            }}

                                        />
                                    </View>
                                    <View

                                        style={{
                                            marginLeft: 8
                                        }}

                                    >
                                        <Text style={{
                                            fontWeight: '700',
                                            fontSize: 11,
                                            color: COLORS.black
                                        }}>{item.title}</Text>

                                        <Text style={{

                                            fontWeight: '500',
                                            fontSize: 9,
                                            color: COLORS.gray,
                                            fontStyle: 'italic'

                                        }}


                                        >
                                            {item.sub_title}

                                        </Text>

                                    </View>



                                </View>

                                {index < constants.track_order_status.length - 1 &&
                                    <View>
                                        {index < currentStep &&
                                            <View
                                                style={{
                                                    height: 25,
                                                    width: 3,
                                                    marginLeft: 9,
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
                                                        width: 2,
                                                        height: 29,
                                                        marginLeft: 9,
                                                    }}



                                                />

                                            }

                                        </View>







                                    </View>
                                }











                            </View>
                        </View>
                    )
                })}

            </View>


        </>
    )
}

export default DeliveryStatus;