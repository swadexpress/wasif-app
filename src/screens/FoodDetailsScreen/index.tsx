import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';


import React, { useRef, useState } from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ScalePress from '../../components/ScalePress';
import Wrapper from '../../components/Wrapper';
import Header from './Header';
import LiveReactions from './LiveReactions';
import RelatedItems from './RelatedItems';


const categoryData = [
    {
        name: 'Pepper julienned',
        image: icons.bakery,
        id: 1,

    },
    {
        name: 'Baby spinach ',
        image: icons.buger,
        id: 2,
    },
    {
        name: 'Masroom',
        image: icons.coffee,
        id: 3,
    },
]




const FoodDetail = () => {

    const [data, setData] = useState<any>(categoryData)
    const [quantity, setQuantity] = useState<any>(1)
    // const [selectedEmoji, setSelectedEmoji] = useState('🛒');
    const [selectedEmoji, setSelectedEmoji] = useState('❤️');

    const liveReactionsFunctionRef = useRef<any>(null)

    // array.push(element)
    const handelSelectedCategory = async (id: any) => {




        for (let i = 0; i < data.length; i++) {

            if (data[i].id == id) {

                if (data[i].selected == true) {
                    data[i].selected = false;
                    setData([...data]);

                }
                else {
                    data[i].selected = true;
                    setData([...data]);

                }

            }

        }


    }


    return (

        <Wrapper>
            <StatusBar
                animated={true}
                // backgroundColor="#61dafb"
                barStyle={'light-content'}
                translucent
                backgroundColor="transparent"
            />
            {/* <AppStatusBar /> */}
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>


                <LinearGradient
                    style={{
                        borderBottomLeftRadius: SIZES.responsiveScreenWidth(5),
                        borderBottomRightRadius: SIZES.responsiveScreenWidth(5),

                        alignItems: 'center',
                        elevation: 2,
                        width: SIZES.responsiveScreenWidth(100),
                        height: SIZES.responsiveScreenWidth(81.3),
                    }}

                    locations={[0, 1]}
                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={0}>


                    <FastImage
                        source={{
                            uri: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1729867029~exp=1729870629~hmac=cc6a40cbccca45ba2cfaf7ef8dd60baa6dd3a19e4bc972d7ce139fe7d78ca980&w=2000'
                        }}
                        style={{
                            width: SIZES.responsiveScreenWidth(100),
                            height: SIZES.responsiveScreenWidth(80),
                            borderBottomLeftRadius: SIZES.responsiveScreenWidth(5),
                            borderBottomRightRadius: SIZES.responsiveScreenWidth(5),

                        }}
                        resizeMode='cover'
                    />
                </LinearGradient>
                <Animated.View entering={FadeInDown.delay(50).duration(800)}>


                    <Text style={{
                        fontSize: SIZES.responsiveScreenFontSize(1.7),
                        fontWeight: '700',
                        color: COLORS.primary,
                        marginHorizontal: 10,
                        marginTop: 10,
                        flex: 1

                    }}>
                        Pizza pizza filled with tomatoes, salami and olives

                    </Text>

                    <View style={{
                        alignItems: 'center',
                    }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',

                            width: SIZES.responsiveScreenWidth(96),
                        }}>
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.9),
                                fontWeight: '700',
                                color: COLORS.red2,

                                marginTop: 10
                            }}>
                                ৳ 250
                            </Text>
                            <View style={{
                                flexDirection: 'row'
                            }}>


                                <View style={{
                                    backgroundColor: COLORS.lightBlue,
                                    marginTop: 5,

                                    width: SIZES.responsiveScreenWidth(15),
                                    height: SIZES.responsiveScreenWidth(5.5),


                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    elevation: 1,
                                    borderRadius: 4,

                                }}>

                                    <Image
                                        source={icons.delivery}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(3.3),
                                            height: SIZES.responsiveScreenWidth(3.3),

                                            tintColor: COLORS.primary


                                        }}

                                    />


                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        fontWeight: '700',
                                        color: COLORS.primary,
                                        marginLeft: 3
                                    }}>
                                        {'Free'}
                                    </Text>

                                </View>


                                <View style={{

                                    backgroundColor: COLORS.lightBlue,
                                    marginTop: 5,

                                    width: SIZES.responsiveScreenWidth(15),
                                    height: SIZES.responsiveScreenWidth(5.5),


                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    marginLeft: 10,
                                    elevation: 1,
                                    borderRadius: 4,
                                }}>
                                    <Image
                                        source={icons.star}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(2.7),
                                            height: SIZES.responsiveScreenWidth(2.7),
                                            tintColor: COLORS.primary


                                        }}
                                    />
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                                        fontWeight: '900',
                                        color: COLORS.black,
                                        marginLeft: 3

                                    }}>
                                        4.5
                                    </Text>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(0.9),

                                        fontWeight: '900',
                                        color: COLORS.gray

                                    }}>
                                        (23+)
                                    </Text>
                                </View>


                            </View>








                        </View>


                        <FlatList
                            data={data}
                            keyExtractor={(item: any) => `${item.id}`}


                            style={{
                                marginTop: 15
                            }}

                            ListHeaderComponent={
                                <>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        fontWeight: '800',
                                        color: COLORS.primary,
                                        marginHorizontal: 10,

                                        marginBottom: 5


                                    }}>
                                        Add more items

                                    </Text>


                                </>
                            }
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }: any) => (
                                <View style={{
                                    alignItems: 'center'
                                }}>


                                    <ScalePress



                                        onPress={() => {
                                            handelSelectedCategory(item.id)
                                        }}

                                    >

                                        <LinearGradient
                                            style={{

                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                height: SIZES.responsiveScreenWidth(9),
                                                width: SIZES.responsiveScreenWidth(96),
                                                borderRadius: 4,
                                                elevation: 1,
                                                marginHorizontal: 3,
                                                marginTop: 5,
                                                marginBottom: 1,
                                                flexDirection: 'row'
                                            }}

                                            locations={[0, 1]}
                                            colors={[COLORS.darkRed, item.selected ? COLORS.lightOrange3 : COLORS.lightBlue,]}
                                            useAngle={true}
                                            angle={20}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <View
                                                    style={{
                                                        height: SIZES.responsiveScreenWidth(8),
                                                        width: SIZES.responsiveScreenWidth(8),

                                                        // backgroundColor: COLORS.lightBlue,
                                                        borderRadius: 2,
                                                        // elevation: 2,
                                                        marginLeft: 2,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',



                                                    }}


                                                >




                                                    <Image source={item.image}
                                                        style={{
                                                            height: SIZES.responsiveScreenWidth(6.7),
                                                            width: SIZES.responsiveScreenWidth(6.7),

                                                        }} />
                                                </View>
                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.3),
                                                    fontWeight: '700',
                                                    color: COLORS.black,
                                                    marginLeft: 8
                                                }}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.3),
                                                    fontWeight: '700',
                                                    color: COLORS.black,
                                                    marginRight: 8
                                                }}>
                                                    +৳50
                                                </Text>
                                                <Image
                                                    source={item.selected ? icons.check_on : icons.check_off}
                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(4),
                                                        height: SIZES.responsiveScreenWidth(4),
                                                        marginRight: 10,
                                                        tintColor: item.selected ? COLORS.lightOrange : COLORS.gray
                                                    }}

                                                />


                                            </View>


                                        </LinearGradient>
                                    </ScalePress>

                                </View>


                            )}

                            ListFooterComponent={
                                <>
                                    <RelatedItems />

                                    <View style={{ marginBottom: 50 }} />
                                </>
                            }


                        />


                    </View>


                </Animated.View>


            </ScrollView>

            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 10,
                right: 10,
                // zIndex:999,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View
                    style={{
                        // borderBottomLeftRadius: SIZES.responsiveScreenWidth(5),
                        borderRadius: 8,

                        alignItems: 'center',

                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        // elevation: 1,
                        width: SIZES.responsiveScreenWidth(96),
                        height: SIZES.responsiveScreenWidth(9),


                    }}

                // locations={[0, 1]}
                // colors={[COLORS.darkRed, COLORS.lightBlue,]}
                // useAngle={true}
                // angle={10}


                >










                    {/* ======== cart update============ */}

                    <LinearGradient
                        style={{
                            // borderBottomLeftRadius: SIZES.responsiveScreenWidth(5),
                            borderRadius: 5,

                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            elevation: 1,
                            width: SIZES.responsiveScreenWidth(24),
                            height: SIZES.responsiveScreenWidth(7),


                        }}

                        locations={[0, 1]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={190}>

                        <View style={{
                            width: SIZES.responsiveScreenWidth(17.8),
                            height: SIZES.responsiveScreenWidth(4),
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',


                        }}>

                            <TouchableOpacity
                                onPress={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1)
                                    }

                                }}


                                style={{
                                    width: SIZES.responsiveScreenWidth(5.4),
                                    height: SIZES.responsiveScreenWidth(5.4),

                                    // backgroundColor: quantity > 1 ? COLORS.darkRed : COLORS.gray3,
                                    backgroundColor: COLORS.darkRed,

                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 0.9,
                                    borderRadius: 3
                                }}>


                                <Image
                                    source={icons.minus}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(3.4),
                                        height: SIZES.responsiveScreenWidth(3.4),
                                        // tintColor: quantity > 1 ? COLORS.red2 : COLORS.white,
                                        tintColor: COLORS.red2,

                                    }}
                                />

                            </TouchableOpacity>

                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                fontWeight: '800',
                                color: COLORS.primary
                            }}>
                                {quantity}
                            </Text>

                            <TouchableOpacity

                                onPress={() => {
                                    setQuantity(quantity + 1)
                                }}
                                style={{
                                    width: SIZES.responsiveScreenWidth(5.4),
                                    height: SIZES.responsiveScreenWidth(5.4),
                                    backgroundColor: COLORS.lightYellow,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                    elevation: 0.4
                                }}>


                                <Image
                                    source={icons.plus}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(3.4),
                                        height: SIZES.responsiveScreenWidth(3.4),
                                        tintColor: COLORS.orange,

                                    }}
                                />

                            </TouchableOpacity>


                        </View>

                    </LinearGradient>
                    {/* ============================ */}
                    <TouchableOpacity

                        activeOpacity={0.9}

                        onPress={() => {
                            liveReactionsFunctionRef.current(selectedEmoji)

                        }}
                    >

                        <LinearGradient
                            style={{
                                // borderBottomLeftRadius: SIZES.responsiveScreenWidth(5),
                                borderRadius: 8,

                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                elevation: 1,
                                width: SIZES.responsiveScreenWidth(29),
                                height: SIZES.responsiveScreenWidth(7),


                            }}

                            locations={[0, 1]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={190}>



                            <Image
                                source={icons.cart}
                                style={{
                                    width: SIZES.responsiveScreenWidth(4),
                                    height: SIZES.responsiveScreenWidth(4),
                                    tintColor: COLORS.primary,

                                }}
                            />
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                fontWeight: '700',
                                color: COLORS.primary,
                                marginLeft: 5
                            }}>
                                Add to cart
                            </Text>





                        </LinearGradient>
                    </TouchableOpacity>

                    <LiveReactions liveReactionsFunctionRef={liveReactionsFunctionRef} />


                </View>

            </View>

        </Wrapper>
    )
}

export default FoodDetail;