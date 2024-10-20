import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { COLORS, SIZES, animations, icons, images } from '../../../constants';

import React from 'react';


import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../../components/SingleImageHeader';
import Wrapper from '../../../components/Wrapper';
import FromInput from '../FromInput';

const SignIn = () => {

  const navigation = useNavigation() as any

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [youAre, setYouAre] = React.useState('')


  const [emailError, setEmailError] = React.useState('')
  const [usernameError, setUsernameError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)

  const [saveMe, setSaveMe] = React.useState(false)


  return (
    <Wrapper>


      <SingleImageHeader
            name={'Information'}

          />

      


      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center'

        }}

      >

        <View
          style={{

            flex: 1,

            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20, 
            
            marginTop: '10%'
          }}
        >





          <LinearGradient
            style={{

              borderRadius: 8,

              width: SIZES.responsiveScreenWidth(22),
              height: SIZES.responsiveScreenWidth(22),

              elevation: 1.5,
              justifyContent: 'center',
              alignItems: 'center'
            }}

            locations={[0, 1,]}
            colors={[COLORS.darkRed, COLORS.lightBlue,]}
            useAngle={true}
            angle={90}>




            <FastImage
              source={images.profile}
              style={{
                width: SIZES.responsiveScreenWidth(20),
                height: SIZES.responsiveScreenWidth(20),


                borderRadius: 8,
                alignItems: 'flex-end',
                justifyContent: 'flex-end'


              }}


            >


              <Image
                source={icons.edit}
                style={{
                  width: SIZES.responsiveScreenWidth(7),
                  height: SIZES.responsiveScreenWidth(7),
                  tintColor: COLORS.gray
                }}

              />
            </FastImage>



          </LinearGradient>





          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
          }}>

            <FromInput
              label="Fast Name"
              placeholder="Fast Name"
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
              label="Last Name"
              placeholder="Last Name"
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
            onPress={() => navigation.navigate('OnBoardingCategoryScreen')}
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
                fontWeight: '900',
                color: COLORS.primary,

              }}>
                Continue
              </Text>

            </LinearGradient>


          </TouchableOpacity>







          <LottieView
            source={animations.hamburger_and_french_fries}
            style={{
              width: SIZES.responsiveScreenWidth(40),
              height: SIZES.responsiveScreenWidth(40),
              marginTop: 10

            }}
            loop={true}
            autoPlay
            cacheComposition={true}
            hardwareAccelerationAndroid
          />







        </View>
      </KeyboardAwareScrollView>
    </Wrapper>

  )
}

export default SignIn;