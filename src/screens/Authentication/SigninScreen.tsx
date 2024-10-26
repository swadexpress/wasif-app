import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../constants';

import React from 'react';
import CustomSwitch from './CustomSwitch';
import FromInput from './FromInput';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import ContinueWithOtherButton from './ContinueWithOtherButton';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = React.useState('foodies@gmail.com')
    const [password, setPassword] = React.useState('foodies12345')



    const [emailError, setEmailError] = React.useState('')
    const [usernameError, setUsernameError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const [saveMe, setSaveMe] = React.useState(false)


    function isEnableSignIn() {

        return email != "" && password != "" && emailError == ''

    }
    return (
        <Wrapper>
            <SingleImageHeader
                name={'Sign in'}

            />


            <View
                style={styles.mainContainer}
            >


                <LottieView
                    source={animations.otp}
                    style={styles.lottieViewContainer}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />


           




            <KeyboardAwareScrollView
                contentContainerStyle={styles.keyboardAwareContainer}

            >

                <View
                    style={styles.inputContainer}
                >





                    <View style={{

                        alignItems: 'center',
                        marginTop: SIZES.responsiveScreenHeight(1)
                    }}>




                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>

                            <FromInput
                                label="Email"
                                placeholder="Email"
                                keyboardType='email-address'
                                autocomplete='email'
                                value={email}
                                onChange={(value: any) => {
                                    setEmail(value)
                                }}
                                errorMsg={emailError}
                                appendComponent={
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            marginRight: 8
                                        }}
                                    >
                                        <Image
                                            source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.correct}

                                            style={{
                                                width: SIZES.responsiveScreenWidth(4.5),
                                                height: SIZES.responsiveScreenWidth(4.5),
                                                tintColor: email == '' ? COLORS.gray : (email != "" && emailError == '') ? COLORS.green : COLORS.red
                                            }}
                                        />

                                    </View>
                                }

                            />


                            <FromInput
                                label="Password"
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChange={(value: any) => {
                                    setPassword(value)
                                }}
                                appendComponent={
                                    <TouchableOpacity style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: SIZES.responsiveScreenWidth(9),
                                        width: SIZES.responsiveScreenWidth(9),
                                    }}
                                        onPress={() => setShowPassword(!showPassword)}
                                    >
                                        <Image
                                            source={showPassword ? icons.eye_close : icons.eye}
                                            style={{
                                                width: SIZES.responsiveScreenWidth(4.2),
                                                height: SIZES.responsiveScreenWidth(4.2),
                                                tintColor: showPassword ? COLORS.primary : COLORS.gray,

                                            }}
                                        />
                                    </TouchableOpacity>
                                }

                            />


                        </View>





                        <View
                            style={styles.customSwitchContainer}>
                            <CustomSwitch
                                value={saveMe}
                                onChange={(value: any) => {
                                    setSaveMe(value)


                                }}
                            />


                            <TouchableOpacity
                                onPress={() => navigation.navigate("ForgotPasswordScreen")}

                                style={{
                                    alignItems: 'center',
                                    // justifyContent: 'center',
                                }}
                            >

                                <Text style={{
                                    color: COLORS.gray,
                                    fontWeight: '700',
                                    fontSize: SIZES.responsiveScreenFontSize(1.5)
                                }}>
                                    Forgot Password

                                </Text>
                            </TouchableOpacity>
                        </View>



                        <TouchableOpacity
                            style={{
                                marginTop: '8%',
                            }}
                            onPress={() => navigation.navigate('SignUpScreen')}
                            activeOpacity={0.9}>
                            <LinearGradient
                                style={styles.linearGradientButton}

                                locations={[0, 1,]}
                                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={90}>

                                <Text style={styles.linearGradientButtonText}>
                                    Sign in
                                </Text>

                            </LinearGradient>


                        </TouchableOpacity>







                    </View>



                    <ContinueWithOtherButton />

                </View>
            </KeyboardAwareScrollView>
            </View>
        </Wrapper>

    )
}






const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieViewContainer: {
        marginTop:'5%',
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




export default SignIn;