import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ProductItem from '../../components/ProductItem';

const OrderItem = ({ item, orderStatus }: any) => {

    const navigation = useNavigation<any>()





    return (


        <TouchableOpacity

        style={{
            marginTop:10
        }}
        
            activeOpacity={0.9}
            onPress={() => navigation.navigate('UserOrdersDetailsScreen')}>


            <LinearGradient
                style={{
                    borderRadius: 5,
                    elevation: 1,

                    

                    width: SIZES.responsiveScreenWidth(97),
                    alignItems: 'center',
                    justifyContent: 'center',

                }}

                locations={[0, 0.6, 1]}
                colors={[COLORS.lightBlue, COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={260}>


                <View style={{
                    borderRadius: 10,
                    width: SIZES.responsiveScreenWidth(97),
                  
                    justifyContent: 'center',
                    marginBottom:5,marginTop:10

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 5,
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>

                            <LinearGradient
                                style={{
                                    borderRadius: 3,
                                    elevation: 1,
                                    width: 28,
                                    height: 28,
                                    backgroundColor: COLORS.primary,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}

                                locations={[0, 1,]}
                                colors={[COLORS.lightBlue, COLORS.lightRed,]}
                                useAngle={true}
                                angle={190}>



                                <Image

                                    style={{
                                        width: 16,
                                        height: 16,
                                        tintColor: COLORS.primary


                                    }}
                                    source={icons.cart}


                                />


                            </LinearGradient>



                            <View>


                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '700',
                                    color: COLORS.black,
                                    marginHorizontal: 5
                                }}>
                                    {`${'Khan Express'}`}
                                </Text>

                            </View>

                        </View>

                        <View style={{
                            width: 80,
                            height: 28,
                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>

                            <Text style={{
                                fontSize: 11,
                                fontWeight: '700',
                                color: COLORS.primary,
                            }}>
                                Packed
                            </Text>

                        </View>

                    </View>
                </View>

                {item.items.map((v, index) => {
                    return (
                        <ProductItem
                            key={index} item={v}


                            onPress={() => {
                                navigation.navigate('UserOrdersDetailsScreen')
                            }}
                        />
                    )
                })}
                <View style ={{height:10}}/>

                {orderStatus == 'Receive' &&

                    <View style={{
                        borderRadius: 10,
                        width: SIZES.responsiveScreenWidth(95),
                        marginTop: 4,
                        marginBottom: 10,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',


                    }}>


                        <View style={{

                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginRight: 8,
                            marginTop: 4

                        }}>

                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                fontWeight: '500',
                                color: COLORS.primary,
                            }}>
                                {`Total(${4}) items:`}
                            </Text>
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.3),
                                fontWeight: '800',
                                color: COLORS.primary,
                                marginLeft: 5
                            }}>
                                ৳ 900
                            </Text>

                        </View>







                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            marginRight: 7

                        }}>
                            <View style={{
                                width: SIZES.responsiveScreenWidth(18),
                                marginLeft: 10,
                                height: 19,
                                borderRadius: 5,
                                borderWidth: 0.4,
                                borderColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                                    fontWeight: '600',
                                    color: COLORS.black,
                                }}>
                                    Buy again
                                </Text>
                            </View>

                        </View>

                    </View>


                }
                {orderStatus == 'ToShip' &&

                    <View style={{
                        borderRadius: 10,
                        width: SIZES.responsiveScreenWidth(95),
                        marginTop: 4,
                        marginBottom: 10,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',


                    }}>


                        <View style={{

                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginRight: 8,
                            marginTop: 4

                        }}>

                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                fontWeight: '500',
                                color: COLORS.primary,
                            }}>
                                {`Total(${4}) items:`}
                            </Text>
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.3),
                                fontWeight: '800',
                                color: COLORS.primary,
                                marginLeft: 5
                            }}>
                                ৳ 900
                            </Text>

                        </View>







                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            marginRight: 7

                        }}>





                            <View style={{
                                width: SIZES.responsiveScreenWidth(18),
                                height: 19,
                                borderRadius: 5,
                                borderWidth: 0.4,
                                borderColor: COLORS.red,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                                    fontWeight: '600',
                                    color: COLORS.red,
                                }}>
                                    Cancel
                                </Text>
                            </View>
                    
                        </View>

                    </View>


                }
                {orderStatus == 'Orders' &&

                    <View style={{
                        borderRadius: 10,
                        width: SIZES.responsiveScreenWidth(95),
                        marginTop: 4,
                        marginBottom: 10,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',


                    }}>


                        <View style={{

                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginRight: 8,
                            marginTop: 4

                        }}>

                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                fontWeight: '500',
                                color: COLORS.primary,
                            }}>
                                {`Total(${4}) items:`}
                            </Text>
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.3),
                                fontWeight: '800',
                                color: COLORS.primary,
                                marginLeft: 5
                            }}>
                                ৳ 900
                            </Text>

                        </View>







                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                            marginRight: 7

                        }}>





                            <View style={{
                                width: SIZES.responsiveScreenWidth(18),
                                height: 19,
                                borderRadius: 5,
                                borderWidth: 0.4,
                                borderColor: COLORS.red,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                                    fontWeight: '600',
                                    color: COLORS.red,
                                }}>
                                    Cancel
                                </Text>
                            </View>
                            <View style={{
                                width: SIZES.responsiveScreenWidth(18),
                                marginLeft: 10,
                                height: 19,
                                borderRadius: 5,
                                borderWidth: 0.4,
                                borderColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                                    fontWeight: '600',
                                    color: COLORS.black,
                                }}>
                                    Buy again
                                </Text>
                            </View>

                        </View>

                    </View>


                }

            </LinearGradient>

        </TouchableOpacity>

    )
}

export default OrderItem;