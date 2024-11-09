import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import React, { useState } from 'react';
import FromInput from './FromInput';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { endpointdajngobackend } from '../../../profileconstants';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';
import ContinueWithOtherButton from './ContinueWithOtherButton';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = useState('kawsarkhan@gmail.com')
    const [password, setPassword] = useState('kawsarkhan12345') as any
    const [confirmPassword, setConfirmPassword] = useState('kawsarkhan12345') as any
    const [youAre, setYouAre] = useState('R') as any


    const [emailError, setEmailError] = useState('') as any
    const [passwordError, setPasswordError] = useState('') as any
    const [showPassword, setShowPassword] = useState(false) as any
    const [isLoading, setIsLoading] = useState(true) as any










    const handelSignUpScreen = async () => {

        if (
            email !== '' &&
            password !== '' &&
            confirmPassword !== ''
        ) {

            setIsLoading(false)

            axios
            .post(`${endpointdajngobackend}/auth/register/`, {
              username: 'kawsarkhan',
              email: email,
              password: password,
              password2: confirmPassword
            })
            .then(res => {
                setIsLoading(true)

                navigation.navigate('SigninScreen')
            })
            .catch(err => {
                setIsLoading(true)
              console.log(err.response.data, '....................eee')
              if (err.response.data.data) {
                // this.setState({ errors: err.response.data.data.Message });
                // setErrors(err.response.data.data.Message)
              }
      
      
              if (err.response.data.errors) {
      
      
                if (err.response.data.errors.email) {
                    Alert.alert(`${err.response.data.errors.email}`);
      
      
                }
      
                else if (err.response.data.errors.password) {
                  Alert.alert(`${err.response.data.errors.password}`);
      
      
                }
      
                else if (err.response.data.errors.username) {
                    Alert.alert(`${err.response.data.errors.username}`);
      
      
                }
      
      
      
              }
      
      
      
            });
      

            

         




        }


    }

    return (
        <>
            {isLoading ?
                <Wrapper>
                    <SingleImageHeader
                        name={'Register'}

                    />


                    <View
                        style={styles.mainContainer}
                    >
                       


                        <KeyboardAwareScrollView
                            contentContainerStyle={styles.keyboardAwareContainer}

                        >

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
                                                    width: 20,
                                                    height: 20,
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
                                <FromInput
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    secureTextEntry={!showPassword}
                                    value={confirmPassword}
                                    onChange={(value: any) => {
                                        setConfirmPassword(value)
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




                                <TouchableOpacity
                                    style={{
                                        marginTop: '5%',
                                    }}
                                    onPress={handelSignUpScreen}
                                    activeOpacity={0.9}>

                                    <LinearGradient
                                        style={styles.linearGradientButton}

                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={90}>
                                        <Text style={styles.linearGradientButtonText}>
                                            Register
                                        </Text>

                                    </LinearGradient>


                                </TouchableOpacity>
                                <ContinueWithOtherButton isUser={true}/>

                            </View>
                        </KeyboardAwareScrollView>




                    </View>







                </Wrapper>

                :

                <LoadingScreen />
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
        width: SIZES.responsiveScreenWidth(43),
        height: SIZES.responsiveScreenWidth(43),
    },
    keyboardAwareContainer: {
        flexGrow: 1,
        justifyContent: 'center'

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