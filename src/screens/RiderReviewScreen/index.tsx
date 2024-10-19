import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, constants, icons, images } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FromInput from '../../components/FromInput';
import SingleImageHeader from '../../components/SingleImageHeader';
import TextIconButton from '../../components/TextIconButton';
import Wrapper from '../../components/Wrapper';

const MyCard = () => {
    const [ratings, setRatings] = useState<any>("");
    const [comment, setComment] = useState<any>("");

    const navigation = useNavigation<any>()



    function renderProfile() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

            >

                <Image
                    source={images.profile}
                    style={{
                        width: SIZES.responsiveScreenWidth(22),
                        height: SIZES.responsiveScreenWidth(22),
                        borderRadius: SIZES.responsiveScreenWidth(1.1)
                    }}
                />

                <Text
                    style={{
                        flex: 1,
                        fontWeight: '700',
                        color: COLORS.primary,
                        marginTop: 5,
                        fontSize: SIZES.responsiveScreenFontSize(1.8),



                    }}

                >
                    Kawsar Khan
                </Text>

                <Text
                    style={{
                        fontWeight: '700',
                        color: COLORS.primary,
                        marginTop: 3,
                        fontSize: SIZES.responsiveScreenFontSize(1.4),

                    }}

                >
                    Delivery Man
                </Text>

                <Text
                    style={{
                        fontWeight: '700',
                        color: COLORS.primary,
                        marginTop: 3,
                        fontSize: SIZES.responsiveScreenFontSize(1.4),


                    }}

                >
                    * Order Delivered
                </Text>

                <Text
                    style={{
                        fontWeight: '700',
                        color: COLORS.primary,
                        marginTop: 7,
                        fontSize: SIZES.responsiveScreenFontSize(1.6),


                    }}

                >
                    Place rate Delivery Service
                </Text>



            </View>
        )
    }

    function renderComment() {
        return (
            <View

            >


                <FromInput
                    // label = "Cardholder Name"
                    value={comment}
                    height={450}

                    inputContainerStyle={{
                        marginTop: 5,

                        paddingRight: 0,
                        borderWidth: 1,
                        borderColor: COLORS.lightRed,
                        backgroundColor: COLORS.white,
                        overflow: 'hidden',
                    }}
                    placeholder={'Add a Comments'}
                    onChange={(value: any) => {
                        setComment(value)
                    }}



                />










            </View>


        )
    }


    const renderRating = () => {
        return (
            <View
                style={{ marginTop: 15, marginHorizontal: 20 }}



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
                                    height: SIZES.responsiveScreenWidth(9),
                                    margin: 5,
                                    alignItems: 'center',
                                    borderRadius: 7,
                                    backgroundColor: item.id == ratings ? COLORS.primary : COLORS.lightGray2
                                }}
                                label={item.label}

                                labelStyle={{
                                    color: item.id == ratings ? COLORS.white : COLORS.gray,



                                }}
                                icon={icons.star}

                                iconStyle={{
                                    tintColor: item.id == ratings
                                        ? COLORS.white : COLORS.gray,
                                    width: 15, height: 15

                                }}

                                onPress={() => setRatings(item.id)}




                            />

                        )
                    })}


                </View>

            </View>
        )
    }







    return (

        <Wrapper>
            <View
                style={{
                    flex: 1,

                }}
            >

                <SingleImageHeader name='Rider Review' />



                <ScrollView
                    style={{
                        flexGrow: 1,



                    }}
                >
                    <View style={{
                        alignItems: 'center',
                        marginTop: 50

                    }}>



                        <View style={{
                            width: SIZES.responsiveScreenWidth(96)
                        }}>
                            {renderProfile()}
                            {renderRating()}
                            {renderComment()}
                        </View>

                        <TouchableOpacity


                            activeOpacity={0.9}

                            onPress={() => navigation.navigate("Home")}
                        >
                            <LinearGradient
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.primary,
                                    width: SIZES.responsiveScreenWidth(80),
                                    height: SIZES.responsiveScreenWidth(8.8),
                                    borderRadius: 6,
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    elevation: 2
                                }}
                                locations={[0, 1,]}
                                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={10}>




                                <Image source={icons.delivery}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(6),
                                        height: SIZES.responsiveScreenWidth(6),
                                        tintColor: COLORS.primary
                                    }}
                                />

                                <Text
                                    style={{
                                        color: COLORS.primary,
                                        fontWeight: '700',
                                        fontSize: SIZES.responsiveScreenFontSize(1.7),
                                        marginLeft: 8
                                    }}
                                >
                                    Submit Review
                                </Text>


                            </LinearGradient>
                        </TouchableOpacity>


                    </View>

                </ScrollView>

            </View>

        </Wrapper>
    )
}

export default MyCard;