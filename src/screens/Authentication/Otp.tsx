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

const Otp = ({navigation}) => {

    const [timer,setTimer] = React.useState(60)

    React.useEffect(()=>{

        let interval =setInterval(() => {
            setTimer(prevTimer =>{
                if(prevTimer >0)
                {
                    return prevTimer - 1
                }
                else{
                    return prevTimer
                }
            })
        },1000)

        return () => clearInterval(interval)
    

    },[])





    return (
        <AuthLayout
            title ="OTP Authentication"
            subtitle="An authentication code has been sent to swadeXpress@gmail.com"

            titleContainerStyle ={{
                marginTop:SIZES.padding * 2
            }}
        
            >

                <View style={{
                    flex: 1,
                    marginTop:SIZES.padding * 2
                }}>

                    <OTPInputView 
                        pinCount={4}
                        style ={{
                            width:'100%',
                            height:50,
                        }}

                        codeInputFieldStyle={{
                            width:65,
                            height:65,
                            borderRadius:SIZES.radius,
                            backgroundColor:COLORS.lightGray2,
                            color:COLORS.black,
                            ...FONTS.h3

                        }}
                        onCodeFilled ={(code)=>{
                            console.log(code)
                        }}
                    
                    
                    />

                    <View style ={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop:SIZES.padding
                    }}>
                        <Text style ={{color:COLORS.darkGray, ...FONTS.body3}}>Didn't receive code?</Text>

                        <TextButton
                            label = {`Resed ( ${timer}s)`}
                            disabled ={timer == 0 ? false : true}
                            buttonContainerStyle ={{
                                marginLeft: SIZES.base,
                                backgroundColor: null,
                            }}

                            labelStyle ={{
                                color:COLORS.primary,
                                ...FONTS.h3
                            }}
                            onPress = {() =>{
                                setTimer(60)
                            }}

                        />



                    </View>


                </View>

                <View>
                    
                     

                        <TextButton 
                            label ="Continue"
                            buttonContainerStyle ={{
                                height:50,
                                alignItems:'center',
                                borderRadius:SIZES.radius,
                                backgroundColor:COLORS.primary,
                            }}

                         

                            onPress={() =>navigation.navigate('SignUp')}
                        
                        
                        />

                        <View style ={{
                            marginTop:SIZES.padding,
                            alignItems:'center'
                        }}>
                            <Text style ={{color:COLORS.darkGray,...FONTS.body3}}>

                                By sign up, you agree too our.
                            </Text>


                        <TextButton 
                            label ="Terms and Conditions"
                            buttonContainerStyle ={{
                                backgroundColor:null
                            }}

                            labelStyle ={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}

                            onPress={() =>console.log('Tnc')}
                        
                        
                        />



                        </View>


                    </View>








        </AuthLayout>
    )
}

export default Otp;