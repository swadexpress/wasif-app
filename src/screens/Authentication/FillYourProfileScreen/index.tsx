import {
  Image,
  StyleSheet,
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

const FillYourProfileScreen = () => {
  const navigation = useNavigation() as any
  const [fastName, setFastName] = React.useState('Kawsar')
  const [lastName, setLastName] = React.useState('Khan')
  const [emailError, setEmailError] = React.useState('')

  return (
    <Wrapper>


      <SingleImageHeader
        name={'Information'}

      />




      <KeyboardAwareScrollView
        contentContainerStyle={styles.keyboardAwareContainer}
      >

        <View
          style={styles.container}
        >





          <LinearGradient
            style={
              styles.linearGradientProfileInfoContainer
            }

            locations={[0, 1,]}
            colors={[COLORS.darkRed, COLORS.lightBlue,]}
            useAngle={true}
            angle={90}>




            <FastImage
              source={images.profile}
              style={
                styles.linearGradientProfileImage

              }


            >


              <Image
                source={icons.edit}
                style={
                  styles.linearGradientProfileImageEditImage

                }

              />
            </FastImage>



          </LinearGradient>





          <View style={styles.inputContainer}>

            <FromInput
              label="Fast Name"
              placeholder="Fast Name"
              keyboardType='email-address'
              autocomplete='email'
              value={fastName}
              onChange={(value: any) => {
                setFastName(value)
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
                    source={fastName == "" || (fastName != "" && emailError == "") ? icons.correct : icons.correct}

                    style={{
                      width: SIZES.responsiveScreenWidth(4.5),
                      height: SIZES.responsiveScreenWidth(4.5),
                      tintColor: fastName == '' ? COLORS.gray : (fastName != "" && emailError == '') ? COLORS.green : COLORS.red
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
              value={lastName}
              onChange={(value: any) => {
                setLastName(value)
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
                    source={lastName == "" || (lastName != "" && emailError == "") ? icons.correct : icons.correct}

                    style={{
                      width: SIZES.responsiveScreenWidth(4.5),
                      height: SIZES.responsiveScreenWidth(4.5),
                      tintColor: lastName == '' ? COLORS.gray : (lastName != "" && emailError == '') ? COLORS.green : COLORS.red
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

          <LottieView
            source={animations.hamburger_and_french_fries}
            style={
              styles.lottieViewContainer
            }
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

const styles = StyleSheet.create({
  keyboardAwareContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: '10%'
  },
  linearGradientProfileInfoContainer: {
    borderRadius: 8,
    width: SIZES.responsiveScreenWidth(22),
    height: SIZES.responsiveScreenWidth(22),
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradientProfileImage: {
    width: SIZES.responsiveScreenWidth(20),
    height: SIZES.responsiveScreenWidth(20),
    borderRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  linearGradientProfileImageEditImage: {
    width: SIZES.responsiveScreenWidth(7),
    height: SIZES.responsiveScreenWidth(7),
    tintColor: COLORS.gray
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
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

  lottieViewContainer: {
    width: SIZES.responsiveScreenWidth(40),
    height: SIZES.responsiveScreenWidth(40),
    marginTop: 10
  },


}
)







export default FillYourProfileScreen;