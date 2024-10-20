import {
    ScrollView,
    View
} from 'react-native';
import { COLORS, SIZES } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FromInput from '../../components/FromInput';
import SingleImageHeader from '../../components/SingleImageHeader';
import TextButton from '../../components/TextButton';

const ChangePassword = ({ navigation }) => {
    const [selectedCard,setSelectedCard] =React.useState(null)
    const [ratings,setRatings] =React.useState("");
    const [name,setName] =React.useState("");
    const [phone,setPhone] = React.useState("");
    const [idCard,setIdCard] =React.useState("");
    const [dateOfBirth,setDateOfBirth] =React.useState("");
    const [gender,setGender] =React.useState("");
    const [email,setEmail] =React.useState("");
    const [address,setAddress] =React.useState("");

    const {navigate} = useNavigation();



    function renderBodyTop (){
        return(
            <View >

                <View
                    style ={{
                        paddingHorizontal:10,
                        marginTop:SIZES.base,
                        borderRadius:10,
                        backgroundColor:COLORS.lightGray2,
                        
        
                    }}

                >

                <FromInput
                    label = "Current Password"
                    autocomplete ='email'
                    containerStyle ={{marginTop:10}}
                    inputContentStyle ={{
                        paddingHorizontal:0
                        
                    }}
                  
                    inputStyle ={{backgroundColor:COLORS.white,borderRadius:10}}
                    onChange ={(value) => {
                        setName(value)
                    }}
                />

                <FromInput
                    label = "New Password"
                    containerStyle ={{marginTop:10}}

                    autocomplete ='email'
                    inputContentStyle ={{
                        paddingHorizontal:0
                        
                    }}
                    height ={50}
                    inputStyle ={{backgroundColor:COLORS.white,borderRadius:10}}
                    onChange ={(value) => {
                        setPhone(value)
                    }}
                />





                <FromInput
                    label = "Retype New Password "
                    containerStyle ={{marginTop:10}}

                    autocomplete ='email'
                    inputContentStyle ={{
                        paddingHorizontal:0
                        
                    }}
                    height ={50}
                    inputStyle ={{backgroundColor:COLORS.white,borderRadius:10}}
                    onChange ={(value) => {
                        setPhone(value)
                    }}
                />






                <View style={{marginBottom:20}}/>














                </View>
         

        </View>


        )
    }

 


    function renderFooter(){
        return(
            <View
                style ={{
                    paddingTop:SIZES.radius,
                    paddingBottom:SIZES.padding,
                    paddingHorizontal:SIZES.padding
                }}
            
            >
                <TextButton

                    buttonContainerStyle ={{
                        height:50,
                        borderRadius:SIZES.radius,
                        backgroundColor:COLORS.primary,
                    }}
                    label={'Change Password'}

                    onPress ={()=>{

                        navigate('Home')
                      
                    }}
                
                
                />


            </View>


        )
    }




    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >


<SingleImageHeader
                name={'Check Out'}

            />


            <ScrollView
                style ={{
                    flexGrow:1,
                    marginTop:SIZES.radius,
                    paddingHorizontal:SIZES.padding,
                    paddingBottom:SIZES.radius
                }}
            
            >

                {/* My Cards */}
                {renderBodyTop()}
                <View style={{marginBottom:50}}/>



                {/* Add New Card */}
                {/* {renderComment()} */}
               




            </ScrollView>

            {renderFooter()}
          
        </View>
    )
}

export default ChangePassword;