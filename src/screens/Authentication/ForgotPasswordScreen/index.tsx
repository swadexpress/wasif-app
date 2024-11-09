import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../../constants';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../../components/SingleImageHeader';
import Wrapper from '../../../components/Wrapper';
import FromInput from '../FromInput';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = React.useState('kawsarkhan@gmail.com')
    const [emailError, setEmailError] = React.useState('')
   
    return (
        <Wrapper>
            <SingleImageHeader
                name={'Forgot Password'}

            />
            <View
                style={
                    styles.mainContainer
                }>
                <LottieView
                    source={animations.forgot_password}
                    style={styles.lottieViewContainer}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />
                <View style={styles.inputContainer}>
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


                    </View>
                    <TouchableOpacity
                        style={{
                            marginTop: '8%',
                        }}
                        onPress={() => navigation.navigate('ForgotPasswordOtpVerificationScreen')}
                        activeOpacity={0.9}>
                        <LinearGradient
                            style={styles.linearGradientButton}
                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={90}>
                            <Text style={styles.linearGradientButtonText}>
                                Continue
                            </Text>

                        </LinearGradient>
                    </TouchableOpacity>

                </View>




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
        width: SIZES.responsiveScreenWidth(50),
        height: SIZES.responsiveScreenWidth(50),
        marginTop: -SIZES.responsiveScreenHeight(15)


    },
    keyboardAwareContainer: {
        flexGrow: 1,
        justifyContent: 'center'

    },
    inputContainer: {
        alignItems: 'center',
        marginTop: SIZES.responsiveScreenHeight(2)


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