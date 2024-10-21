/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
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



        <View
          style={{

            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.responsiveScreenHeight(1)


          }}>
          <LottieView
            source={animations.location}
            style={{
              width: SIZES.responsiveScreenWidth(45),
              height: SIZES.responsiveScreenWidth(45),

            }}
            loop={true}
            autoPlay
            cacheComposition={true}
            hardwareAccelerationAndroid
          />




          <KeyboardAwareScrollView


            contentContainerStyle={{
              marginTop: '8%'


            }}

            showsVerticalScrollIndicator={false}>


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
                  style={{
                    backgroundColor: COLORS.lightGray2,
                    borderRadius: 5,

                    width: SIZES.responsiveScreenWidth(80),
                    height: SIZES.responsiveScreenWidth(8.5),
                    elevation: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}

                  locations={[0, 1,]}
                  colors={[COLORS.darkRed, COLORS.lightBlue,]}
                  useAngle={true}
                  angle={90}>

                  <Text style={{
                    fontSize: SIZES.responsiveScreenFontSize(1.8),
                    fontWeight: '800',
                    color: COLORS.primary,

                  }}>
                    Register
                  </Text>

                </LinearGradient>


              </TouchableOpacity>




              <ContinueWithOtherButton isUser={true} />
            </View>
          </KeyboardAwareScrollView>
        </View>

      </Wrapper>
    </>
  );
}
