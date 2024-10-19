import { COLORS, SIZES, icons } from '../../constants';
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Chart from './Chart';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar } from '../../components/ReactNativeMulticolorProgressBar';


const aboutData = [
    {
        name: 'Gross Total',
        image: icons.graph,
        price: 3425,
        percentage: "-30",
        color: COLORS.green
    },
    {
        name: 'Service Free',
        image: icons.coupon,
        price: 3425,
        percentage: "-20",
        color: COLORS.orange
    },
    {
        name: 'Total Orders',
        image: icons.cart,
        price: 3425,
        percentage: "+90",
        color: COLORS.primary4
    },
    {
        name: 'New Orders',
        image: icons.order,
        price: 3425,
        percentage: "+60",
        color: COLORS.green
    },

    {
        name: 'Repeot Orders',
        image: icons.plus,
        price: 3425,
        percentage: "+25",
        color: COLORS.primary4
    },

    {
        name: 'Cancel Orders',
        image: icons.cross,
        price: 3425,
        percentage: "-25",
        color: COLORS.red
    },


]

const MyAccount = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");

    const [selectedShowDetails, setSelectedShowDetails] = useState('All Product');

    const { navigate } = useNavigation();

    const navigation = useNavigation()

    const renderAboutButton = () => {
        return (
            <View style={{
                alignItems: 'center'
            }}>


                <FlatList
                    horizontal={false}
                    numColumns={3}

                    data={aboutData}
                    keyExtractor={item => `${item.name}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        marginBottom: 10,

                    }}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity

                            activeOpacity={0.7}
                            style={{
                                // justifyContent: 'center',
                                // alignItems: 'center',



                            }}

                            onPress={() => {
                                setSelectedShowDetails(item.name)

                            }}


                        >


                            <LinearGradient
                                style={{

                                    width: SIZES.width * 0.3,
                                    height: SIZES.width * 0.2,

                                    marginTop: 6,
                                    marginLeft: 5,
                                    backgroundColor: COLORS.white,
                                    borderRadius: 5,
                                    elevation: 2,
                                    marginBottom: 1,


                                }}

                                locations={[0, 1]}
                                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={120}>

                                <Image

                                    source={item.image}

                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: item.color,
                                        marginLeft: 10,
                                        marginTop: 8
                                    }}


                                />

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}>





                                    <Text style={{
                                        color: COLORS.black,
                                        fontWeight: '700',
                                        fontSize: 20,
                                        marginLeft: 4,
                                    }}>{item.price}</Text>


                                    <Text style={{
                                        color: item.color,
                                        fontWeight: '700',
                                        fontSize: 10,
                                        marginLeft: 4,
                                    }}>{`${item.percentage}%`}</Text>

                                </View>

                                <Text style={{
                                    color: COLORS.black,
                                    fontWeight: '700',
                                    fontSize: 10,
                                    marginLeft: 10,
                                    marginTop: 5
                                }}>{`${item.name}`}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }











    return (
        <Wrapper>
            <View
                style={{
                    flex: 1,
                    // backgroundColor:COLORS.white

                }}
            >
                <SingleImageHeader
                    name={'Ride Details'}

                />

                <ScrollView
                    style={{
                        flexGrow: 1,
                        paddingHorizontal: 10,
                    }}

                >

                    <Header />

                    {renderAboutButton()}

                    <Chart />



        
                    {/* ========== Weekly prograse bar===== */}


                    <LinearGradient
                        style={{

                            width: SIZES.responsiveScreenWidth(95),
                            borderRadius: 5,

                            marginTop: 20,
                            marginBottom: 60,
                            elevation: 1,


                        }}

                        locations={[0, 1]}
                        colors={[COLORS.lightRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={190}>



                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            marginBottom: 8,
                            marginHorizontal: 8


                        }}>

                            <Text style={{
                                fontWeight: '700',
                                fontSize: 13,
                                color: COLORS.black,
                            }}>
                                Monthly Revenue

                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={icons.calendar}
                                    style={{
                                        width: 16,
                                        height: 16,
                                        tintColor: COLORS.gray
                                    }}


                                />


                                <Text style={{
                                    fontWeight: '700',
                                    fontSize: 11,
                                    color: COLORS.gray,
                                    marginLeft: 3
                                }}>
                                    Monthly Revenue

                                </Text>
                            </View>
                        </View>

                        <View style={{

                            alignItems: 'center',

                            marginHorizontal: 8,
                            marginTop: 7,
                        }}>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 5

                            }}>
                                <Text style={{
                                    fontWeight: '700',
                                    fontSize: 12,
                                    color: COLORS.gray,
                                }}>
                                    Week-1

                                </Text>
                                <Text style={{
                                    fontWeight: '600',
                                    fontSize: 11,
                                    color: COLORS.gray,
                                }}>
                                    10-11-2024

                                </Text>

                            </View>

                            <ProgressBar
                                textStyle={{
                                    fontSize: 11,
                                    color: COLORS.black,
                                    fontWeight: '700',
                                    // fontW

                                }}

                                backgroundBarStyle={
                                    {
                                        alignItems: 'stretch',
                                        backgroundColor: '#EFF1F5',
                                        borderRadius: 4,
                                        height: 16
                                    }

                                }
                                onStartProgressStyle={
                                    {
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3
                                    }

                                }
                                onEndProgressStyle={
                                    {
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3
                                    }

                                }
                                arrayOfProgressObjects={[
                                    {
                                        color: COLORS.primary4,
                                        value: 0.6,
                                        nameToDisplay: "60%"
                                    },
                                    {
                                        color: COLORS.lightGray1,
                                        value: 0.4,
                                        opacity: 0.5
                                    },
                                ]}
                            />
                        </View>



                        <View style={{
                            marginHorizontal: 8,
                            alignItems: 'center',
                            marginTop: 15,
                            marginBottom: 12
                        }}>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 5

                            }}>
                                <Text style={{
                                    fontWeight: '700',
                                    fontSize: 12,
                                    color: COLORS.gray,
                                }}>
                                    Week-2

                                </Text>
                                <Text style={{
                                    fontWeight: '600',
                                    fontSize: 11,
                                    color: COLORS.gray,
                                    // fontStyle:'italic'
                                }}>
                                    10-11-2024

                                </Text>

                            </View>

                            <ProgressBar
                                textStyle={{
                                    fontSize: 11,
                                    color: COLORS.black,
                                    fontWeight: '700',
                                    // fontW

                                }}

                                backgroundBarStyle={
                                    {
                                        alignItems: 'stretch',
                                        backgroundColor: '#EFF1F5',
                                        borderRadius: 4,
                                        height: 16
                                    }

                                }
                                onStartProgressStyle={
                                    {
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3
                                    }

                                }
                                onEndProgressStyle={
                                    {
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3
                                    }

                                }
                                arrayOfProgressObjects={[
                                    {
                                        color: COLORS.primary4,
                                        value: 0.6,
                                        nameToDisplay: "60%"
                                    },
                                    {
                                        color: COLORS.lightGray1,
                                        value: 0.4,
                                        opacity: 0.5
                                    },
                                ]}
                            />
                        </View>


                    </LinearGradient>
                </ScrollView>

            </View>
        </Wrapper>
    )
}

export default MyAccount;