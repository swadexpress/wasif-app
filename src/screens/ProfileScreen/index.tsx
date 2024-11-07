import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';
import FromInput from './FromInput';
import ImageCropBottomPopup from './ImageCropBottomPopup';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { endpointdajngobackend } from '../../../profileconstants';
import AppStatusBar from '../../components/AppStatusBar';


const MyAccount = ({ }) => {
    const [productName, setProductName] = useState<any>()
    const [price, setPrice] = useState<any>()
    const [isShow, setIsShow] = useState(false);
    const [imageDetails, setImageDetails] = useState<any>();
    const [productDis, setProductDis] = useState<any>();
    const navigation = useNavigation<any>()
    const [isLoading, setLoading] = useState(false)



    useEffect(() => {

        setLoading(false)

        const timeoutId = setTimeout(() => {
            setLoading(true)
        }, 3000)

        return () => clearTimeout(timeoutId)


    }, [])

    const close = () => {
        setIsShow(false);
    };
    const show = () => {
        setIsShow(true);
    };




    const handelProductUpload = async () => {
        setLoading(false)
        const token = await AsyncStorage.getItem('@token');
        const MyUserId = await AsyncStorage.getItem('@myUserId');
        var imageVideoFormat = '';
        var type = 'image';
        var formData = new FormData();

        var imageStatus = imageDetails.uri;
        var imageUri = imageStatus;

        // console.log(imageUri, '......');
        imageStatus = imageStatus.slice(Math.max(imageStatus.length - 3, 1));

        if (imageStatus == 'jpg') {
            imageVideoFormat = 'jpg';
        } else if (imageStatus == 'png') {
            imageVideoFormat = 'png';
        } else if (imageStatus == 'peg') {
            imageVideoFormat = 'jpeg';
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            imageVideoFormat = 'mp4';
            type = 'video';
        }

        formData.append('image', {
            uri: imageUri,
            name: `${imageUri}.${imageVideoFormat}`,
            type: `${type}/${imageVideoFormat}`,
        });

        formData.append('type', type);
        formData.append('MyUserId', MyUserId);
        formData.append('productName', productName);
        formData.append('productPrice', price);
        formData.append('productDis', productDis);
        const authAxios = axios.create({
            baseURL: endpointdajngobackend,
            headers: {
                // Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        // axios
        authAxios
            .post(`${endpointdajngobackend}/home/UpdateProfileImagesView/`, formData)
            .then(res => {
                setLoading(true)
                setPrice('')
                setProductDis('')
                setProductName('')
                setImageDetails('')

            })
            .catch(err => { });
    };



    return (
        <>
            {isLoading ?
                <Wrapper>
                    <View
                        style={{
                            flex: 1,
                            // backgroundColor: COLORS.white,
                            alignItems: 'center'
                        }}
                    >
                        <AppStatusBar/>






                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{
                                flexGrow: 1,
                            }}
                        >


                            <View style={{
                                alignItems: 'center'
                            }}>



                                <LinearGradient
                                    style={{

                                        borderRadius: 5,
                                        elevation: 1,
                                        marginVertical: 3,
                                        marginTop: 20,
                                        alignItems: 'center',

                                        width: SIZES.responsiveScreenWidth(90),

                                    }}

                                    locations={[0, 1]}
                                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={10}>




                                    <Text style={{
                                        color: COLORS.primary,
                                        fontWeight: '700',
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        marginLeft: 10,
                                        marginTop: 10,
                                        marginBottom: 5,
                                        alignSelf: 'center'

                                    }}>Upload Your Items</Text>


                                    <TouchableOpacity
                                        onPress={show}

                                    >

                                        <LinearGradient
                                            style={{

                                                borderRadius: 5,
                                                elevation: 2,
                                                marginTop: 5,

                                                width: SIZES.responsiveScreenWidth(80),
                                                height: SIZES.responsiveScreenWidth(80),
                                                alignItems: 'center',
                                                justifyContent: 'center'

                                            }}

                                            locations={[0, 1]}
                                            colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                            useAngle={true}
                                            angle={10}>

                                            {imageDetails ?

                                                <Image
                                                    style={{



                                                        width: SIZES.responsiveScreenWidth(78),
                                                        height: SIZES.responsiveScreenWidth(78),
                                                        borderRadius: 10

                                                    }}

                                                    source={{ uri: imageDetails?.uri }}
                                                />
                                                :

                                                <Image
                                                    style={{



                                                        width: SIZES.responsiveScreenWidth(15),
                                                        height: SIZES.responsiveScreenWidth(15),
                                                        borderRadius: 10

                                                    }}

                                                    source={icons.edit}
                                                />


                                            }





                                        </LinearGradient>


                                    </TouchableOpacity>





                                    <View style={{
                                        marginTop: 10,
                                        marginBottom: 10
                                    }}>



                                        <FromInput
                                            label="Product Name"
                                            placeholder="Product Name"
                                            keyboardType='email-address'
                                            autocomplete='email'
                                            value={productName}
                                            onChange={(value: any) => {
                                                setProductName(value)
                                            }}
                                            appendComponent={null}

                                        />

                                        <FromInput
                                            label="Price"
                                            placeholder="Price"
                                            keyboardType='email-address'
                                            autocomplete='email'
                                            value={price}
                                            onChange={(value: any) => {
                                                setPrice(value)
                                            }}
                                            appendComponent={null}

                                        />
                                        <FromInput
                                            label="Product Dis"
                                            placeholder="Product Dis"
                                            keyboardType='email-address'
                                            autocomplete='email'
                                            value={productDis}
                                            onChange={(value: any) => {
                                                setProductDis(value)
                                            }}
                                            appendComponent={null}

                                        />

                                    </View>



                                    <TouchableOpacity
                                        style={{
                                            marginTop: '8%',
                                            marginBottom: 15
                                        }}
                                        onPress={handelProductUpload}
                                        activeOpacity={0.9}>
                                        <LinearGradient
                                            style={styles.linearGradientButton}

                                            locations={[0, 1,]}
                                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                            useAngle={true}
                                            angle={90}>

                                            <Text style={styles.linearGradientButtonText}>
                                                Upload
                                            </Text>

                                        </LinearGradient>


                                    </TouchableOpacity>



                                </LinearGradient>



                            </View>


                            <View style={{
                                height: 60
                            }} />
                        </ScrollView>

                    </View>

                    <ImageCropBottomPopup
                        show={isShow}
                        title={'Choose your Picture'}
                        animationType={'fade'}
                        closePopup={close}
                        haveOutsideTouch={true}
                        setImageDetails={setImageDetails}
                        navigation={navigation}
                    />

                </Wrapper>
                : <LoadingScreen />
            }
        </>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieViewContainer: {
        marginTop: '5%',
        width: SIZES.responsiveScreenWidth(45),
        height: SIZES.responsiveScreenWidth(45),
    },
    keyboardAwareContainer: {
        flexGrow: 1,
        justifyContent: 'center'

    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20

    },
    customSwitchContainer: {

        width: SIZES.responsiveScreenWidth(90),
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'


    },


    linearGradientButton: {
        backgroundColor: COLORS.lightGray2,
        borderRadius: 5,
        width: SIZES.responsiveScreenWidth(80),
        height: SIZES.responsiveScreenWidth(8.5),
        elevation: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    linearGradientButtonText: {
        fontSize: SIZES.responsiveScreenFontSize(1.8),
        fontWeight: '800',
        color: COLORS.primary,
    },


}
)







export default MyAccount;