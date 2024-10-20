import {
    Image,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import React from 'react';
import FromInput from '../../components/FromInput';
import TextButton from '../../components/TextButton';

const ForgotPassword = ({navigation}) => {


    const [email,setEmail] =React.useState('')
    
    const [emailError,setEmailError] =React.useState('')


    return (
        <
        
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








        </>
    )
}

export default ForgotPassword;