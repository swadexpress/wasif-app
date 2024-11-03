import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, constants, icons } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import TextIconButton from '../../components/TextIconButton';
import Wrapper from '../../components/Wrapper';
import Textarea from './TextArea';

const MyCard = () => {
    const navigation = useNavigation<any>()
    const [ratings, setRatings] = useState<any>("");
    const [comment, setComment] = useState<any>("");
    const [describe, setDescribe] = useState<any>();
    const [images, setImages] = useState([]);
    const [isShow, setIsShow] = useState(true);

    const [multipleImage, setMultipleImage] = useState(true);





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

                <SingleImageHeader name='Write Review' />



                <ScrollView
                    style={{




                    }}
                >
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                        <LinearGradient
                            style={{
                                borderRadius: 5,
                                elevation: 1,
                                width: SIZES.width * 0.96,
                                marginTop: 7,
                                marginBottom: 1


                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.lightRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={90}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <FastImage
                                        style={{
                                            width: 72,
                                            height: 72,
                                            borderRadius: 6
                                        }}
                                        source={{ uri: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000' }}
                                        resizeMode={'cover'}

                                    />
                                    <View style={{
                                        marginLeft: 8
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontSize: 14,
                                                fontWeight: '700',
                                                color: COLORS.black,
                                            }}>
                                                {`${"Hot spicy stew eggplant, sweet pepper,"}...`}
                                            </Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 5
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}>
                                                <Image
                                                    source={icons.delivery}
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        tintColor: COLORS.primary
                                                    }}

                                                />


                                                <Text style={{
                                                    fontSize: 10,
                                                    fontWeight: '700',
                                                    color: COLORS.black,
                                                    marginLeft: 3
                                                }}>
                                                    free
                                                </Text>

                                            </View>

                                        </View>
                                        <View style={{

                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 5
                                        }}>
                                            <Image
                                                source={icons.star}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    marginLeft: 3,

                                                    tintColor: COLORS.orange
                                                }}
                                            />
                                            <Image
                                                source={icons.star}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    marginLeft: 3,
                                                    tintColor: COLORS.orange
                                                }}
                                            />
                                            <Image
                                                source={icons.star}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    marginLeft: 3,
                                                    tintColor: COLORS.orange
                                                }}
                                            />
                                            <Image
                                                source={icons.star}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    marginLeft: 3,
                                                    tintColor: COLORS.orange
                                                }}
                                            />
                                            <Image
                                                source={icons.star}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    marginLeft: 3,
                                                    tintColor: COLORS.orange
                                                }}
                                            />



                                            <Text style={{
                                                fontSize: 11,
                                                fontWeight: '900',
                                                color: COLORS.black,
                                                marginLeft: 8

                                            }}>
                                                4.5
                                            </Text>
                                            <Text style={{
                                                fontSize: 8,
                                                fontWeight: '900',
                                                color: COLORS.gray

                                            }}>
                                                (23+)
                                            </Text>
                                        </View>


                                    </View>

                                </View>


                            </View>
                        </LinearGradient>







                        <View style={{
                            width: SIZES.responsiveScreenWidth(98)
                        }}>

                            {renderRating()}






                        </View>
                        <View style={{
                            width: SIZES.responsiveScreenWidth(92)
                        }}>

                            <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.textarea}
                                onChangeText={describe => setDescribe(describe)}
                                defaultValue={describe}
                                maxLength={500}
                                placeholder={' Write a caption...'}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            />

                            <View style={{
                                flexDirection:'row',
                                flexWrap:'wrap',
                                

                            }}>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {

                                    }}
                                >
                                    <LinearGradient
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: COLORS.primary,
                                            width: SIZES.responsiveScreenWidth(20),
                                            height: SIZES.responsiveScreenWidth(20),
                                            borderRadius: 6,

                                            marginTop: 20,
                                            elevation: 2
                                        }}
                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={10}>




                                        <Image source={icons.transaction}
                                            style={{
                                                width: SIZES.responsiveScreenWidth(5),
                                                height: SIZES.responsiveScreenWidth(5),
                                                tintColor: COLORS.primary
                                            }}
                                        />

                                        <Text
                                            style={{
                                                color: COLORS.primary,
                                                fontWeight: '700',
                                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                                marginTop: 4
                                            }}
                                        >
                                            Upload Photo
                                        </Text>


                                    </LinearGradient>
                                </TouchableOpacity>
                           
                           
                                <TouchableOpacity

                                style ={{
                                    marginLeft:10
                                }}
                                    activeOpacity={0.9}
                                    onPress={() => {

                                    }}
                                >
                                    <LinearGradient
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: COLORS.primary,
                                            width: SIZES.responsiveScreenWidth(20),
                                            height: SIZES.responsiveScreenWidth(20),
                                            borderRadius: 6,

                                            marginTop: 20,
                                            elevation: 2
                                        }}
                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={10}>




                                        <Image source={icons.transaction}
                                            style={{
                                                width: SIZES.responsiveScreenWidth(5),
                                                height: SIZES.responsiveScreenWidth(5),
                                                tintColor: COLORS.primary
                                            }}
                                        />

                                        <Text
                                            style={{
                                                color: COLORS.primary,
                                                fontWeight: '700',
                                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                                marginTop: 4
                                            }}
                                        >
                                            Upload Video
                                        </Text>


                                    </LinearGradient>
                                </TouchableOpacity>
                           
                           
                           
                            </View>



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
                                    height: SIZES.responsiveScreenWidth(8.5),
                                    borderRadius: 6,
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    elevation: 2
                                }}
                                locations={[0, 1,]}
                                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={10}>




                                <Image source={icons.transaction}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(5),
                                        height: SIZES.responsiveScreenWidth(5),
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


const styles = StyleSheet.create({
    text__container: {
        flex: 1,
    },
    textareaContainer: {
        height: SIZES.responsiveScreenHeight(25),
        backgroundColor: COLORS.white,
        width: '100%',
        borderRadius: 10,
        borderWidth: 0.7,
        borderColor: '#F47D81',
        marginTop: 15

    },
    textarea: {
        textAlignVertical: 'top', // hack android
        height: SIZES.responsiveScreenHeight(25),
        fontSize: SIZES.responsiveScreenFontSize(1.5),
        color: COLORS.black,
        fontWeight: '700',
        marginHorizontal: 8,
        marginVertical: 1
    },
});




export default MyCard;