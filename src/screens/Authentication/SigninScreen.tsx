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
import CustomSwitch from './CustomSwitch';
import FromInput from './FromInput';

import AsysncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { endpointdajngobackend } from '../../../profileconstants';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = useState('foodies@gmail.com')
    const [password, setPassword] = useState('foodies12345')



    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] =useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [saveMe, setSaveMe] = useState(false)

    const [isLoading, setIsLoading] = useState(true) as any






    const handelSignUpScreen = async () => {

        if (
            email !== '' &&
            password !== ''
        ) {

            setIsLoading(false)

            axios
                .post(`${endpointdajngobackend}/auth/login/`, {
                    email: email,
                    password: password,
                })
                .then(async res => {

                    const token = res.data.tokens.access;

                    // console.log(token)

                        await AsysncStorage.setItem('@token',token);

                  
                    setIsLoading(true)
                    navigation.navigate('AccountSwitchScreen')
                })
                .catch(err => {
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
                        name={'Sign in'}

                    />


                    <View
                        style={styles.mainContainer}
                    >

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
                                        onPress={ handelSignUpScreen}
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




export default SignIn;