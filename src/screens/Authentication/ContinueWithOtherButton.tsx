import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SIZES, icons } from '../../constants';

import {
    GoogleSignin, isErrorWithCode, isSuccessResponse, statusCodes
} from '@react-native-google-signin/google-signin';

import {
    AccessToken,
    LoginManager
} from 'react-native-fbsdk-next';

const ContinueWithOtherButton = ({ isUser }: any) => {


    const navigation = useNavigation() as any


    GoogleSignin.configure({
        webClientId: '545940161262-mpi2g73ajlu81vkaqvututgck4hc75pg.apps.googleusercontent.com',


    });

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            console.log('signOut........')

        } catch (error) {
            console.error(error);
        }
    };

    // Somewhere in your code
    const handelSignInWithGoogle = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
                const { idToken, user } = response.data;

                // setState({ userInfo: response.data });

                navigation.navigate('FillYourProfileScreen')
                console.log(user, 'res')
                setTimeout(() => {
                    signOut()
                }, 5000)


            } else {
                // sign in was cancelled by user

                console.log('errrr')
            }
        } catch (error) {
            console.log(error, 'error')
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // Android only, play services not available or outdated
                        break;
                    default:
                    // some other error happened
                }
            } else {

                console.log('errrr----2')
                // an error that's not related to google sign in occurred
            }
        }
    }



    const handelLoginWithFacebook = () => {
        // Attempt a login using the Facebook login dialog asking for default permissions.
        LoginManager.logInWithPermissions(['public_profile']).then(
            login => {
                if (login.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        const accessToken = data.accessToken.toString();
                        console.log('okay')
                    });
                }
            },
            error => {
                console.log('Login fail with error: ' + error);
            },
        );
    };







    return (




        <>


            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '7%',

            }}>

                <View
                    style={{
                        height: 1.5,
                        backgroundColor: COLORS.primary,
                        width: SIZES.responsiveScreenWidth(20),
                        marginTop: 4.2,
                        borderRadius: 5,
                        elevation: 0.6
                    }}
                />

                <Text style={{
                    fontWeight: '700',
                    fontSize: SIZES.responsiveScreenFontSize(1.5),
                    color: COLORS.primary,
                    marginHorizontal: 15
                }}>
                    or continue with
                </Text>

                <View
                    style={{
                        height: 1.5,
                        marginTop: 4.2,
                        backgroundColor: COLORS.primary,
                        width: SIZES.responsiveScreenWidth(20),
                        borderRadius: 5,
                        elevation: 0.6
                    }}
                />






            </View>


            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '5%',
            }}>





                <TouchableOpacity


                    onPress={handelSignInWithGoogle}


                    activeOpacity={0.9}>

                    <LinearGradient
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            borderRadius: 5,

                            width: SIZES.responsiveScreenWidth(13),
                            height: SIZES.responsiveScreenWidth(13),
                            elevation: 1,

                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                        locations={[0, 1,]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={45}>


                        <Image
                            source={icons.google}
                            style={{
                                width: SIZES.responsiveScreenWidth(6),
                                height: SIZES.responsiveScreenWidth(6),
                            }}


                        />



                    </LinearGradient>


                </TouchableOpacity>
                <TouchableOpacity

                    style={{

                        marginLeft: 20
                    }}

                    onPress={() => navigation.navigate('')}


                    activeOpacity={0.9}>

                    <LinearGradient
                        style={{

                            borderRadius: 5,

                            width: SIZES.responsiveScreenWidth(13),
                            height: SIZES.responsiveScreenWidth(13),
                            elevation: 1,

                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                        locations={[0, 1,]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={40}>


                        <Image
                            source={icons.apple}
                            style={{
                                width: SIZES.responsiveScreenWidth(5.5),
                                height: SIZES.responsiveScreenWidth(6.5),
                            }}


                        />



                    </LinearGradient>


                </TouchableOpacity>
                <TouchableOpacity

                    style={{

                        marginLeft: 20
                    }}

                    onPress={handelLoginWithFacebook}


                    activeOpacity={0.9}>

                    <LinearGradient
                        style={{

                            borderRadius: 5,

                            width: SIZES.responsiveScreenWidth(13),
                            height: SIZES.responsiveScreenWidth(13),
                            elevation: 1,

                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                        locations={[0, 1,]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={20}>


                        <Image
                            source={icons.fb}
                            style={{
                                width: SIZES.responsiveScreenWidth(6.5),
                                height: SIZES.responsiveScreenWidth(6.5),
                                borderRadius: 2,
                                tintColor: '#106BFF'

                            }}


                        />



                    </LinearGradient>


                </TouchableOpacity>
                <TouchableOpacity

                    style={{

                        marginLeft: 20
                    }}

                    onPress={() => navigation.navigate('PhoneLogInScreen')}


                    activeOpacity={0.9}>

                    <LinearGradient
                        style={{

                            borderRadius: 5,

                            width: SIZES.responsiveScreenWidth(13),
                            height: SIZES.responsiveScreenWidth(13),
                            elevation: 1,

                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                        locations={[0, 1,]}
                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={20}>


                        <Image
                            source={icons.call}
                            style={{
                                width: SIZES.responsiveScreenWidth(6.5),
                                height: SIZES.responsiveScreenWidth(6.5),
                                borderRadius: 2,
                                tintColor: COLORS.primary,
                                transform: [{ rotate: '90deg' }]

                            }}


                        />



                    </LinearGradient>


                </TouchableOpacity>


            </View>

            {isUser ?


                <TouchableOpacity
                    style={{

                        marginTop: '5%'
                    }}

                    onPress={() => navigation.navigate('SigninScreen')}


                    activeOpacity={0.9}>

                    <Text style={{
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                        color: COLORS.primary,
                        marginHorizontal: 15,

                    }}>
                        Already a member?
                        <Text style={{
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.5),
                            color: COLORS.blue2,

                        }}> Signin
                        </Text>
                    </Text>
                </TouchableOpacity>

                :


                <TouchableOpacity
                    style={{

                        marginTop: '5%'
                    }}

                    onPress={() => navigation.navigate('SigninScreen')}


                    activeOpacity={0.9}>

                    <Text style={{
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                        color: COLORS.primary,
                        marginHorizontal: 15,

                    }}>
                        Already a member?
                        <Text style={{
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.5),
                            color: COLORS.blue2,

                        }}> Signin
                        </Text>
                    </Text>
                </TouchableOpacity>


            }

        </>
    )
}

export default ContinueWithOtherButton;