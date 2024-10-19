import {COLORS, FONTS, SIZES, constants, dummyData, icons, images} from '../../constants';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import AuthLayout from './AuthLayout'
import CustomSwitch from '../../components/CustomSwitch'
import FromInput from '../../components/FromInput'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import React from 'react';
import TextButton from '../../components/TextButton'
import TextIconButton2 from '../../components/TextIconButton2'
import {utils} from '../../utils'

const ForgotPassword = ({navigation}) => {


    const [email,setEmail] =React.useState('')
    
    const [emailError,setEmailError] =React.useState('')


    return (
        <AuthLayout
            title ="Password Recovery"
            subtitle="Place enter your email address to recovery your password"

            titleContainerStyle ={{
                marginTop:SIZES.padding * 2
            }}
        
            >

                <View style={{
                    flex: 1,
                    marginTop:SIZES.padding * 2
                }}>



                        <FromInput
                    label = "Email"
                    keyboardType = 'email-address'
                    autocomplete ='email'
                    onChange ={(value) => {

                        // utils.validateEmail(value,setEmailError)

                        // console.log(value)
                        setEmail(value)
                    }}
                    errorMsg ={emailError}
                    appendComponent = {
                        <View
                            style ={{justifyContent: 'center'}}
                            >
                            <Image 
                                source ={email =="" || (email != "" && emailError == "") ? icons.correct : icons.correct}

                                style ={{
                                    width:20,
                                    height:20,
                                    tintColor: email == '' ? COLORS.gray : (email != "" && emailError == '') ?   COLORS.green : COLORS.red
                                }}
                                />

                        </View>
                    }
                
                />



                </View>

                <View>
                    
                     

                        <TextButton 
                            label ="Send Email"
                            buttonContainerStyle ={{
                                height:50,
                                alignItems:'center',
                                borderRadius:SIZES.radius,
                                backgroundColor:COLORS.primary,
                            }}

                         

                            onPress={() =>navigation.navigate('SignUp')}
                        
                        
                        />

                   

                    </View>








        </AuthLayout>
    )
}

export default ForgotPassword;