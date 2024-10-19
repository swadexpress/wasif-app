import { COLORS, FONTS, SIZES, constants, icons, images } from '../../constants';
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

// import Header2 from '../../../components/Header2'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const MyCard = () => {
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [ratings, setRatings] = React.useState("");
    const [comment, setComment] = React.useState("");
    const { navigate } = useNavigation();

    const navigation = useNavigation()



    return (

        <View style={{
            position: 'absolute',
            bottom: 5,
            left: 0,
            right: 0,
            alignItems:'center'

        }}>



            <TouchableOpacity

                onPress={() => {
                    // navigation.navigate('RiderReviewScreen')
                }}

                style={{
                    flexDirection: 'row',
                    height: 70,
                    marginTop: SIZES.padding,
                    borderRadius: 8,
                    width:'95%',
                   
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.primary

                }}

            >
                <View

                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft:5,

                    }}>



                    <Image
                        source={images.profile}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 5
                        }}
                    />



                    <View

                        style={{
                            marginLeft: 8
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: 14,
                                fontWeight: '700'
                            }}
                        >{("Kawsar khan").slice(0, 15)}
                        </Text>


                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 2,
                                marginLeft: -2
                            }}
                        >
                            <Image
                                source={icons.call}
                                style={{
                                    width: 15,
                                    height: 15,
                                    transform: [{
                                        rotate: '90deg'
                                    }],
                                    tintColor: COLORS.white
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontSize: 10,
                                    marginLeft: 4
                                }}
                            >+8801771297948
                            </Text>

                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 2,
                                marginLeft: -2
                            }}
                        >
                            <Image
                                source={icons.location}
                                style={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.white
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontSize: 10,
                                    marginLeft: 4
                                }}
                            >Kalkini, Madaripur, Dhaka
                            </Text>

                        </View>
                    </View>




                </View>



                <View
                    style={{
                        height: 40,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: COLORS.white,
                        marginRight:5,
                        backgroundColor: COLORS.transparentWhite1,



                    }}


                >
                    <Image

                        source={icons.call}
                        style={{
                            width: 30,
                            height: 30
                        }}



                    />

                </View>









            </TouchableOpacity>

        </View>

    )
}

export default MyCard;