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
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../../components/SingleImageHeader';
import Wrapper from '../../../components/Wrapper';
import FromInput from '../FromInput';

const ForgotNewPasswordScreen = () => {

    const navigation = useNavigation() as any
    const [password, setPassword] = React.useState('foodies12345')
    const [confirmPassword, setConfirmPassword] = useState('foodies12345') as any
    const [showPassword, setShowPassword] = React.useState(false)



    return (
        <Wrapper>
            <SingleImageHeader
                name={'New Password'}
            />

            <KeyboardAwareScrollView
                contentContainerStyle={styles.keyboardAwareContainer}
                showsVerticalScrollIndicator={false}>
                <LottieView
                    source={animations.password_change_success}
                    style={styles.lottieViewContainer}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />
                <View style={styles.inputContainer}>
                    <FromInput
                        label="New Password"
                        placeholder="New Password"
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
                                Continue
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
        </Wrapper>

    )
}

const styles = StyleSheet.create({
    keyboardAwareContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottieViewContainer: {
        width: SIZES.responsiveScreenWidth(48),
        height: SIZES.responsiveScreenWidth(48),
    },

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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







export default ForgotNewPasswordScreen;