/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { COLORS, SIZES, animations } from '../../constants';

import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useRef } from 'react';
// import {loadingidAuthorization} from '../../stores/actions/productActions';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';
import OTPTextInput from './OTPTextInput';
// import { endpointdajngobackend } from '../../../constants';
// import RNRestart from 'react-native-restart'; // Import package from node modules

const VerificationOtpScreen = () => {
  const [timer, setTimer] = React.useState(120);
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation() as any;
  const route = useRoute();

  let otpInput = useRef<any>(null);

  const clearText = () => {
    otpInput.current.clear();
  }

  const setText = () => {
    otpInput.current.setValue("1234");
  }


  return (


    <>
      {loading ? (

        <Wrapper>
          <SingleImageHeader
            name={'Verification'}

          />

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10%'



            }}>
            <LottieView
              source={animations.otp}
              style={{
                width: SIZES.responsiveScreenWidth(50),
                height: SIZES.responsiveScreenWidth(50),

              }}
              loop={true}
              autoPlay
              cacheComposition={true}
              hardwareAccelerationAndroid
            />



            <KeyboardAwareScrollView

              contentContainerStyle={{


              }}

              showsVerticalScrollIndicator={false}>

              <LinearGradient
                style={{
                  backgroundColor: COLORS.lightGray2,
                  borderRadius: 5,
                  marginTop: '10%',

                  width: SIZES.responsiveScreenWidth(83),
                  height: SIZES.responsiveScreenWidth(15),


                  elevation: 0.7,

                  justifyContent: 'center',
                  alignItems: 'center'
                }}

                locations={[0, 1,]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={270}>

                <OTPTextInput

                  ref={e => (otpInput = e)}
                  handleTextChange={(e) => {
                    console.log(e)
                  }}
                  defaultValue={'577065'}
                />

              </LinearGradient>

              <View style={{
                alignItems: 'center',

              }}>

                <TouchableOpacity
                  style={{
                    marginTop: '7%',
                  }}
                  onPress={() => navigation.navigate('FillYourProfileScreen')}

                  activeOpacity={0.9}>

                  <LinearGradient
                    style={{
                      backgroundColor: COLORS.lightGray2,
                      borderRadius: 5,

                      width: SIZES.responsiveScreenWidth(80),
                      height: SIZES.responsiveScreenWidth(8.5),


                      elevation: 1.5,

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
                      Verify
                    </Text>

                  </LinearGradient>


                </TouchableOpacity>




                <TouchableOpacity
                  style={{

                    marginTop: '5%'
                  }}

                  // onPress={() => navigation.navigate('OnBoardingCategoryScreen')}


                  activeOpacity={0.9}>

                  <Text style={{
                    fontWeight: '700',
                    fontSize: SIZES.responsiveScreenFontSize(1.5),
                    color: COLORS.red,
                    marginHorizontal: 15,

                  }}>
                    Didn't receive code?
                    <Text style={{
                      fontWeight: '800',
                      fontSize: SIZES.responsiveScreenFontSize(1.6),
                      color: COLORS.primary,

                    }}>{`  Resed (${timer}s)`}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>






          </View>

        </Wrapper>

      ) : (
        <LoadingScreen />
      )}
    </>

  );
};

export default VerificationOtpScreen;
