import {
    Animated,
    FlatList,
    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { COLORS, FONTS, SIZES, constants, dummyData, icons } from '../../constants';

import IconButton from '../../components/IconButton'
import React, { useEffect } from 'react';
import TextButton from '../../components/TextButton'
import TextIconButton from '../../components/TextIconButton'
import TowPointSlider from '../../components/TowPointSlider'
import Wrapper from '../../components/Wrapper';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';

const Section = ({ containerStyle, title, children }: any) => {

    return (
        <View style={{
            marginTop: 20,
            ...containerStyle

        }}>
            <Text style={{
                fontWeight: '700',
                fontSize: SIZES.responsiveScreenFontSize(1.5),
                color: COLORS.primary,
            }}>{title}</Text>
            {children}


        </View>
    )
}

const FilterModel = ({ isVisible, onClose, refRBSheetFilter }: any) => {
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current
    const [deliveryTime, setDeliveryTime] = React.useState("");
    const [ratings, setRatings] = React.useState("");
    const [tags, setTags] = React.useState("");
    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 680]
    })

    const renderDistance = () => {
        return (
            <Section
                title={'Distance'}

            >
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: -7
                    }}

                >
                    <TowPointSlider
                        values={[3, 10]}
                        min={1}
                        max={20}
                        postfix='km'
                        onValuesChange={(values: any) => console.log(values)}
                    />


                </View>

            </Section>
        )
    }



    const renderDeliveryTime = () => {
        return (
            <Section
                title={"Delivery time"}
                containerStyle={{
                    marginTop: 20
                }}

            >
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 8,
                    justifyContent: 'space-between'
                }}>
                    {constants.delivery_time.map((item, index) => {
                        return (
                            <TextButton
                                key={`deliveryTime-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                                    fontSize: SIZES.responsiveScreenFontSize(1.3),
                                    fontWeight: '700'

                                }}
                                buttonContainerStyle={{
                                    width: SIZES.responsiveScreenWidth(22.5),
                                    height: 28,

                                    alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2
                                }}
                                onPress={() => setDeliveryTime(item.id)}

                            />


                        )
                    })}



                </View>

            </Section>


        )

    }



    const renderPriceRange = () => {
        return (
            <Section
                title={'Pricing Range'}

            >
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: -7
                    }}

                >
                    <TowPointSlider
                        values={[80, 500]}
                        min={80}
                        max={1000}
                        prefix='৳'
                        postfix=''
                        onValuesChange={(values: any) => console.log(values)}
                    />


                </View>

            </Section>
        )
    }

    const renderRating = () => {
        return (
            <Section
                title={'Ratings'}
                containerStyle={{
                    marginTop: 20
                }}

            >
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: 8,
                    }}

                >

                    {constants.ratings.map((item, index) => {
                        return (
                            <TextIconButton

                                key={`Ratings-${index}`}

                                containerStyle={{

                                    height: SIZES.responsiveScreenWidth(6.5),
                                    width: SIZES.responsiveScreenWidth(17), alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2
                                }}
                                label={item.label}

                                labelStyle={{
                                    color: item.id == ratings ? COLORS.white : COLORS.gray,
                                    fontSize: SIZES.responsiveScreenFontSize(1.4),
                                    fontWeight: '700'

                                }}
                                icon={icons.star}

                                iconStyle={{
                                    tintColor: item.id == ratings
                                        ? COLORS.white : COLORS.gray

                                }}

                                onPress={() => setRatings(item.id)}




                            />

                        )
                    })}


                </View>

            </Section>
        )
    }
    const renderTags = () => {
        return (
            <Section
                title={'Tags'}
                containerStyle={{
                    marginTop: 10,
                }}

            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: "wrap",
                        marginBottom: 20,
                        justifyContent: 'space-between'

                    }}

                >

                    {constants.tags.map((item, index) => {
                        return (
                            <TextButton

                                key={`Tags-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == tags ? COLORS.white : COLORS.gray,

                                    fontSize: SIZES.responsiveScreenFontSize(1.3),
                                    fontWeight: '700'

                                }}
                                buttonContainerStyle={{
                                    height: SIZES.responsiveScreenWidth(7),
                                    width: SIZES.responsiveScreenWidth(23),
                                    borderRadius: 5,
                                    marginTop: 6,

                                    alignItems: 'center',
                                    backgroundColor: item.id == tags ? COLORS.primary : COLORS.lightGray2


                                }}

                                onPress={() => setTags(item.id)}




                            />

                        )
                    })}


                </View>

            </Section>
        )
    }




    return (
        <RBSheet
            height={SIZES.responsiveScreenHeight(78)}
            ref={refRBSheetFilter}
            closeOnDragDown={true}
            closeOnPressMask={true}
            onClose={async () => {

            }}
            onOpen={() => {



            }}
            customStyles={{
                wrapper: {
                    backgroundColor: 'transparent',
                },
                draggableIcon: {
                    backgroundColor: 'transparent',
                },
                container: {
                    backgroundColor: 'transparent',
                    // borderTopRightRadius: 10,
                    // borderTopLeftRadius: 10,
                },
            }}>

            <LinearGradient
                style={{
                    flex: 1,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    elevation: 3

                }}
                locations={[0, 1,]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={40}>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                        marginHorizontal: 10

                    }}

                >
                    <Text style={{
                        fontWeight: '800',
                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                        color: COLORS.primary,
                        flex: 1


                    }}>Filter Your Search</Text>



                    <TouchableOpacity

                        style={{
                            width: SIZES.responsiveScreenWidth(7),
                            height: SIZES.responsiveScreenWidth(7),

                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            refRBSheetFilter.current.close()
                        }}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                width: SIZES.responsiveScreenWidth(5.5),
                                height: SIZES.responsiveScreenWidth(5.5),
                                tintColor: COLORS.primary,
                            }} />

                    </TouchableOpacity>

                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginHorizontal: 10
                    }}


                >


                    {renderDistance()}
                    {/* Delivery Time */}
                    {renderDeliveryTime()}

                    {/* Pricing Range  */}
                    {renderPriceRange()}
                    {/* Ratings  */}
                    {renderRating()}

                    {/* Tags */}
                    {renderTags()}




                    <View style={{
                        alignItems: 'center',
                        marginTop: 15
                    }}>


                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                height: 26,
                                borderRadius: 8,
                                width: SIZES.responsiveScreenWidth(70)


                            }}


                        >

                            <Text style={{
                                color: COLORS.white,
                                fontWeight: '700',
                                fontSize: SIZES.responsiveScreenFontSize(1.4)



                            }}>
                                Apply

                            </Text>



                        </TouchableOpacity>

                    </View>


                </ScrollView>

            </LinearGradient>

        </RBSheet>
    )

}


export default FilterModel



