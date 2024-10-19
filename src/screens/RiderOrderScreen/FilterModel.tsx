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
import React from 'react';
import TextButton from '../../components/TextButton'
import TextIconButton from '../../components/TextIconButton'
import TowPointSlider from '../../components/TowPointSlider'

const Section = ({ containerStyle, title, children }: any) => {

    return (
        <View style={{
            marginTop: SIZES.padding,
            ...containerStyle

        }}>
            <Text style={{ ...FONTS.h3 }}>{title}</Text>
            {children}


        </View>
    )
}

const FilterModel = ({ isVisible, onClose }: any) => {
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current




    const [showFilterModel, setShowFilterModel] = React.useState(isVisible);
    const [deliveryTime, setDeliveryTime] = React.useState("");
    const [ratings, setRatings] = React.useState("");
    const [tags, setTags] = React.useState("");




    React.useEffect(() => {
        if (showFilterModel) {
            Animated.timing(modalAnimatedValue, {

                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }).start();


        }
        else {
            Animated.timing(modalAnimatedValue, {

                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start(() => { onClose() });
        }

    }, [showFilterModel])

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
                        alignItems: 'center'
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
                    marginTop: 40
                }}

            >
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: SIZES.radius
                }}>
                    {constants.delivery_time.map((item, index) => {
                        return (
                            <TextButton
                                key={`deliveryTime-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                                    ...FONTS.body3


                                }}
                                buttonContainerStyle={{
                                    width: '30%',
                                    height: 50,
                                    margin: 5,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
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
                        alignItems: 'center'
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
                    marginTop: 40
                }}

            >
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}

                >

                    {constants.ratings.map((item, index) => {
                        return (
                            <TextIconButton

                                key={`Ratings-${index}`}

                                containerStyle={{
                                    flex: 1,
                                    height: 50,
                                    margin: 5,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2
                                }}
                                label={item.label}

                                labelStyle={{
                                    color: item.id == ratings ? COLORS.white : COLORS.gray
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
                        marginBottom: 20

                    }}

                >

                    {constants.tags.map((item, index) => {
                        return (
                            <TextButton

                                key={`Tags-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id == tags ? COLORS.white : COLORS.gray, ...FONTS.body3
                                }}
                                buttonContainerStyle={{
                                    height: 50,
                                    margin: 5,
                                    paddingHorizontal: SIZES.padding,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
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

        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7


                }}
            >
                {/*  Transparent Background */}
                <TouchableWithoutFeedback
                    onPress={() => {
                        setShowFilterModel(false)
                    }}

                >
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }} />

                </TouchableWithoutFeedback>
                <Animated.View style={{
                    position: 'absolute',
                    left: 0,
                    top: modalY,
                    width: '100%',
                    height: '100%',
                    padding: SIZES.padding,
                    borderTopRightRadius: SIZES.padding,
                    borderTopLeftRadius: SIZES.padding,
                    backgroundColor: COLORS.white

                }}>

                    {/* Header */}
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}

                    >
                        <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>Filter Your Search</Text>
                        <IconButton
                            containerStyle={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray2
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray2
                            }}
                            onPress={() => {
                                setShowFilterModel(false)

                            }}
                        />

                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        containerStyle={{
                            paddingBottom: 250,

                        }}

                    >
                        {/* Distance */}
                        {renderDistance()}
                        {/* Delivery Time */}
                        {renderDeliveryTime()}

                        {/* Pricing Range  */}
                        {renderPriceRange()}
                        {/* Ratings  */}
                        {renderRating()}

                        {/* Tags */}
                        {renderTags()}

                        <TextButton
                            label='Apply'
                            buttonContainerStyle={{
                                height: 50,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            onPress={() => {
                                console.log('apply...... Filter')
                            }}

                        />
                    </ScrollView>

                    {/* Apply Button  */}









                </Animated.View>




            </View>



        </Modal>


    )
}


export default FilterModel



