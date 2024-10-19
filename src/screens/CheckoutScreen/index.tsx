import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, dummyData, icons } from '../../constants';

import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import CardItem from '../CardScreen/CardItem';
import FromInput from './FromInput';

import { useNavigation } from "@react-navigation/native";
import Wrapper from '../../components/Wrapper';
const Checkout = ({ route }: any) => {
    const navigation = useNavigation<any>()

    const [selectedCard, setSelectedCard] = React.useState("")
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardNumberError, setCardNumberError] = React.useState("")
    const [cardName, setCardName] = React.useState("")
    const [cardNameError, setCardNameError] = React.useState("")
    const [expiryDate, setExpiryDate] = React.useState("")
    const [expiryDateError, setExpiryDateError] = React.useState("")
    const [cvv, setCvv] = React.useState("")
    const [cvvError, setCvvError] = React.useState("")
    const [isRemember, setRemember] = React.useState(false)

    useEffect(() => {
        let { selectedCard } = route.params
        setSelectedCard(selectedCard)

    }, [])

    function isEnableAddCard() {
        return cardNumber != '' && cardNumber != '' && expiryDate != '' && cvv != '' && cardNumberError == "" && cardNameError == "" && expiryDateError == '' && cvvError == ''

    }



    function renderMyCard() {
        return (
            <View style={{
                marginTop: 20,
                width: SIZES.responsiveScreenWidth(96)
            }}>

                <Text style={{
                    fontSize: SIZES.responsiveScreenFontSize(1.8),
                    fontWeight: '800',
                    color: COLORS.primary,
                    marginBottom: 8,
                    marginLeft:7
                }}>Payment Method</Text>

                <>


                    {dummyData.myCards.map((item, index) => {
                        return (
                            <CardItem

                                key={`MyCard-${item.id}`}
                                item={item}
                                isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                                onPress={() =>
                                    setSelectedCard({ ...item, key: "MyCard" })
                                }
                            />
                        )
                    })}
                </>

            </View>

        )
    }




    function renderCoupon() {

        return (
            <View
                style={{
                    marginTop: 20,
                    width: SIZES.responsiveScreenWidth(96)
                }}
            >
                <Text style={{
                    fontSize: SIZES.responsiveScreenFontSize(1.6),
                    fontWeight: '700',
                    color: COLORS.primary,
                    marginBottom: 5

                }}>Add Coupon</Text>




                <FromInput
                    label={null}
                    value={cardName}

                    inputContainerStyle={{
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white,
                        overflow: 'hidden'
                    }}
                    placeholder={'Coupon Code'}
                    onChange={(value: React.SetStateAction<string>) => {
                        setCardName(value)
                    }}

                    appendComponent={
                        <View

                            style={{
                                width: SIZES.responsiveScreenWidth(8.5),
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                borderRadius: 5
                            }}

                        >
                            <Image
                                source={icons.discount}
                                style={{
                                    width: SIZES.responsiveScreenWidth(6.3),
                                    height: SIZES.responsiveScreenWidth(6.3)
                                }}


                            />



                        </View>
                    }

                />










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



                <SingleImageHeader
                    name={'Check Out'}

                />

                <ScrollView>
                    <View style={{
                        alignItems: 'center'
                    }}>



                        {renderMyCard()}

                        <LinearGradient
                            style={{
                                borderRadius: 5,
                                elevation: 2,
                                marginTop: 15
                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={190}>
                            <View style={{
                                marginTop: 8,
                                borderRadius: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                // justifyContent:'center',
                                justifyContent: 'space-between',


                                width: SIZES.responsiveScreenWidth(96),

                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>

                                    <Image
                                        source={icons.location}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(5),
                                            height: SIZES.responsiveScreenWidth(5),

                                            marginLeft: 8,
                                            tintColor: COLORS.primary
                                        }}
                                    />

                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        marginLeft: 4,
                                        fontWeight: '700',
                                        color: COLORS.primary,
                                    }}>
                                        {`Receiver: Kawsar Khan`}
                                    </Text>


                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 6,
                                    borderRadius: 3,
                                    borderWidth: 1,
                                    borderColor: COLORS.primary,
                                    justifyContent: 'center',


                                    width: SIZES.responsiveScreenWidth(13),
                                    height: SIZES.responsiveScreenWidth(5.5),

                                }}>


                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.4),
                                        marginLeft: 4,
                                        fontWeight: '700',
                                        color: COLORS.primary,
                                    }}>
                                        Edit
                                    </Text>


                                </View>
                            </View>
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.3),

                                fontWeight: '500',
                                color: COLORS.gray,
                                marginBottom: 8,
                                marginTop: 4,
                                marginHorizontal: 26
                            }}>
                                Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                            </Text>


                        </LinearGradient>
                        {/* Coupon */}
                        {renderCoupon()}


                        <TouchableOpacity

                            activeOpacity={0.9}

                            style={{
                                marginTop: '7%',
                                marginBottom: 20
                            }}
                            onPress={() => navigation.navigate('SuccessScreen')}
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
                                    marginHorizontal: 5,

                                    marginTop: 1
                                }}>
                                    Confirm Order

                                </Text>

                            </LinearGradient>











                        </TouchableOpacity>



                    </View>

                </ScrollView>



            </View>

        </Wrapper>
    )
}

export default Checkout;