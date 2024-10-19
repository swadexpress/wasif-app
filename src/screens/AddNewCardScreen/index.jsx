import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import FormInputCheck from '../../components/FormInputCheck'
import FromInput from '../../components/FromInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import React from 'react';
import TextButton from '../../components/TextButton'

const AddCard = ({ navigation, route }) => {

    const [selectedCard,setSelectedCard] =React.useState("")
    const [cardNumber,setCardNumber] = React.useState("")
    const [cardNumberError,setCardNumberError] = React.useState("")
    const [cardName,setCardName] = React.useState("")
    const [cardNameError,setCardNameError] = React.useState("")
    const [expiryDate,setExpiryDate] = React.useState("")
    const [expiryDateError,setExpiryDateError] = React.useState("")
    const [cvv,setCvv] = React.useState("")
    const [cvvError,setCvvError] = React.useState("")
    const [isRemember,setRemember] = React.useState(false)

    React.useEffect(() => {
        let {selectedCard} = route.params
        setSelectedCard(selectedCard)

    },[])

    function isEnableAddCard(){
        return cardNumber !='' && cardNumber != '' && expiryDate !='' && cvv != '' && cardNumberError =="" && cardNameError =="" && expiryDateError =='' && cvvError == ''

    }



    function renderCard(){
        return(
            <ImageBackground

                source ={images.card}
                style ={{
                    height:200,
                    width:'100%',
                    marginTop:SIZES.radius,
                    borderRadius:SIZES.radius,
                    overflow:'hidden'


                }}
                
            
            >
                {/* Logo */}

                <Image 
                    source ={selectedCard?.icon}
                    resizeMode ='contain'
                    style ={{
                        position:'absolute',
                        top:20,
                        right:20,
                        height:40,
                        width:80
                    }}
                />

                {/* Details */}

                <View
                    style ={{
                        position:'absolute',
                        bottom:10,
                        left:0,
                        right:0,
                        paddingHorizontal:SIZES.padding,
                    }}
                
                >

                    <Text
                        style ={{
                            color:COLORS.white,
                            ...FONTS.h3
                        }}
                    
                    >{cardName}

                    </Text>

                    <View
                        style={{
                            flexDirection:'row'
                        }}
                    
                    >
                        <Text
                            style ={{
                                flex: 1,
                                color:COLORS.white,
                                ...FONTS.body3
                                
                            }}
                        
                        > {cardNumber}


                        </Text>
                        <Text
                            style ={{
                               
                                color:COLORS.white,
                                ...FONTS.body3
                                
                            }}
                        
                        > {expiryDate}


                        </Text>

                    </View>


                </View>


            </ImageBackground>
        )
    }


    function renderForm() {
        return(

            <View style ={{marginTop:SIZES.padding * 2}}>

                {/* Card number */}

                <FromInput
                    label = "Card Number"
                    keyboardType = 'number-pad'
                    maxLength={16}
                    value ={cardNumber}
                    onChange ={(value) => {
                        // setCardNumber(value.replace(/\s/g,'').replace(/(\d{4})/g,'$1 ').trim())

                        // utils.validateInput(value,19,setCardNameError)

                    }}
                    errorMsg ={cardNumberError}
                    appendComponent = {

                        <FormInputCheck 
                            value ={cardNumber}
                            error ={cardNumberError}
                        
                        />
                        
                    }
                
                />

                {/* Cardholder name */}



                <FromInput
                    label = "Cardholder Name"
                    value ={cardName}

                    containerStyle ={{
                        marginTop: SIZES.radius
                    }}
                    onChange ={(value) => {
                        // 
                        // utils.validateInput(value,1,setCardNameError)
                        setCardName(value)
                        
                      

                    }}
                    errorMsg ={cardNumberError}
                    appendComponent = {

                        <FormInputCheck 
                            value ={cardNumber}
                            error ={cardNumberError}
                        
                        />
                        
                    }
                
                />
                {/* Expiry date / cvv */}

                <View style ={{
                    flexDirection: 'row',
                    marginTop:SIZES.radius,


                }}>

                <FromInput
                    label = "Expiry Date"
                    value ={expiryDate}

                    containerStyle ={{
                        flex: 1,
                    }}
                    maxLength ={5}
                    placeholder={'MM/YY'}
                    onChange ={(value) => {
                        // 
                        // utils.validateInput(value,1,setCardNameError)
                        setExpiryDate(value)
                        
                      

                    }}
                    errorMsg ={expiryDateError}
                    appendComponent = {

                        <FormInputCheck 
                            value ={expiryDate}
                            error ={expiryDateError}
                        
                        />
                        
                    }
                
                />


                <FromInput
                    label = "CVV"
                    value ={cvv}

                    containerStyle ={{
                        flex: 1,
                        marginLeft:SIZES.radius,
                    }}
                    maxLength ={3}
                    placeholder={'MM/YY'}
                    onChange ={(value) => {
                        // 
                        // utils.validateInput(value,1,setCardNameError)
                        setCvv(value)
                        
                      

                    }}
                    errorMsg ={cvvError}
                    appendComponent = {

                        <FormInputCheck 
                            value ={cvv}
                            error ={cvvError}
                        
                        />
                        
                    }
                
                />

                </View>

                <TouchableOpacity style ={{
                    alignItems:'flex-start',
                    marginTop:SIZES.padding,
                    flexDirection:'row',
                    
                }}

                onPress={() => {
                    setRemember(!isRemember)
                    console.log(isRemember)
                }}
                
                >
                        <Image
                    source ={isRemember ? icons.check_on : icons.check_off}

                        style ={{
                            width:25,
                            height:25,
                        }}
                    
                    />
                    <Text

                        style ={{marginLeft:10,color:COLORS.gray}}
                    
                    > Remember this card details.</Text>


                </TouchableOpacity>



                
            </View>




        )
    }

    function renderFooter(){
        return(
            <View
                style ={{
                    paddingTop:SIZES.radius,
                    paddingBottom:SIZES.padding,
                    // paddingHorizontal:SIZES.padding
                }}
            
            >   
            <TextButton
                label ={'Add Card'}
                disabled ={ !isEnableAddCard()}
                buttonContainerStyle ={{
                    height:60,
                    borderRadius:SIZES.radius,
                    backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.transparent,
                }}
                onPress={() =>{
                    navigation.goBack()

                }}
            
            
            />


            </View>


        )
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white,
                paddingHorizontal:SIZES.padding,
            }}
        >
           {/* Header */}

           

           {/* Body */}
           <KeyboardAwareScrollView
           showsVerticalScrollIndicator ={false}

            keyboardDismissMode ='on-drag'
            containerStyle ={{
                flexGrow:1,
                paddingHorizontal:SIZES.padding,
            }}


           
           
           >

               {renderCard()}

               {/* Forms */}
               {renderForm()}


           </KeyboardAwareScrollView>


           {/* Footer  */}
           {renderFooter()}

        </View>
    )
}

export default AddCard;