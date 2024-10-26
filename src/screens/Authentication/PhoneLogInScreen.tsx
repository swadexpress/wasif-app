/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { COLORS, SIZES, animations } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useRef, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import ContinueWithOtherButton from './ContinueWithOtherButton';
import PhoneInput from './PhoneInput';


export function PhoneLogInScreen() {
  const [value, setValue] = useState<any>('1771297948');
  const [code, setCode] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const navigation = useNavigation() as any;

  const handelLogin = async () => {
    navigation.navigate('VerificationOtpScreen', {
      number: value,
      code: code,
    });
  };


  return (
    <>

      <Wrapper>
        <SingleImageHeader
          name={'Join with Number'}

        />


        <KeyboardAwareScrollView


          contentContainerStyle={styles.keyboardAwareContainer}

          showsVerticalScrollIndicator={false}>
          <LottieView
            source={animations.location}
            style={styles.lottieViewContainer}
            loop={true}
            autoPlay
            cacheComposition={true}
            hardwareAccelerationAndroid
          />







          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="BD"
            maxLength={11}
            onChangeFormattedText={(number, code) => {
              setValue(number);
              setCode(code);
              console.log(number, code);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />



          <View style={{
            alignItems: 'center',

          }}>


            <TouchableOpacity
              style={{
                marginTop: '8%',
              }}

              onPress={handelLogin}


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




            <ContinueWithOtherButton isUser={true} />
          </View>
        </KeyboardAwareScrollView>


      </Wrapper>
    </>
  );
}

const styles = StyleSheet.create({
  keyboardAwareContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'

},
  lottieViewContainer: {
    width: SIZES.responsiveScreenWidth(50),
    height: SIZES.responsiveScreenWidth(50),
    marginBottom:'5%',
    marginTop:'-5%'
  
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
