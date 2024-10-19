import {COLORS, FONTS, SIZES, constants, dummyData, icons, images} from '../../constants';
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';

import CartQuantityButton from '../../components/CartQuantityButton'

import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import LineDivider from '../../components/LineDivider'
import Rating from '../../components/Rating'
import React from 'react';
import StepperInput from '../../components/StepperInput'
import TextButton from '../../components/TextButton'
import SingleImageHeader from '../../components/SingleImageHeader';

const FoodDetail = ({ navigation}) => {




    const [foodItem,setFoodItem] =React.useState(dummyData.vegBiryani)
    const [selectedSize,setSelectedSize] =React.useState("")
    const [qty,setQty] =React.useState(1)



    function renderDetails (){
        return(
            <View
                style ={{
                    marginTop:SIZES.radius,
                    marginBottom:SIZES.padding,
                    paddingHorizontal:SIZES.padding
                }}
            
            >
                <View
                    style ={{
                        height:190,
                        borderRadius:15,
                        backgroundColor:COLORS.lightGray2

                    }}>

                        {/* Calories & Favourite */}

                        <View
                            style ={{
                                flexDirection: "row",
                                justifyContent:'space-between',
                                marginTop: SIZES.base,
                                paddingHorizontal:SIZES.radius
                            }}
                        
                        
                            >
                                {/* Calories */}
                                <View style={{
                                    flexDirection: "row",

                                }}>


                                    <Image source={icons.calories}
                                        style ={{
                                            width:30, height:30
                                        }}/>

                                        <Text
                                            style ={{
                                                color:COLORS.darkGray2,
                                                ...FONTS.body4

                                            }}
                                        
                                        >
                                            {foodItem?.calories} calories
                                        </Text>



                                </View>

                                {/* Favourite */}
                                <Image
                                    source ={icons.love}
                                    style ={{
                                        width:20,
                                        height:20,
                                        tintColor:foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                                    }}/>

                        </View>

                        {/* Food Image */}
                        <Image 
                            source ={foodItem?.image}
                            resizeMode ='contain'
                            style ={{
                                height:170,
                                width:'100%'
                            }}/>

                    </View>

                    {/* Food Information */}

                    <View style={{
                        marginTop:SIZES.padding,
                    }}>
                        <Text
                            style ={{
                                ...FONTS.h1
                            }}
                        
                        >
                            {foodItem?.name}
                        </Text>


                        <Text
                            style ={{
                                ...FONTS.body3,
                                marginTop:SIZES.base,
                                color:COLORS.darkGray,
                                textAlign:'justify'
                               
                            }}
                        
                        >
                            {foodItem?.description}
                        </Text>

                        {/* Ratings Duration and Shipping */}

                        <View style={{
                            flexDirection:'row',
                            marginTop:SIZES.padding

                        }}>
                            {/* Ratings */}


                            

                            <IconLabel

                                containerStyle ={{
                                    backgroundColor:COLORS.primary,
                                    
                                    }}

                                icon ={icons.star}
                                label ='4.5'
                                labelStyle ={{
                                    color:COLORS.white,
                                    
                                }}
                                
                            
                            />

                            {/* duration */}
                            <IconLabel
                                containerStyle ={{
                                    marginLeft:SIZES.radius,
                                    paddingHorizontal:0,
                                    
                                    }}
                                icon ={icons.clock}
                                label ='30 Mins'
                                iconStyle ={{
                                    tintColor:COLORS.black
                                }}
                                labelStyle ={{
                                    color:COLORS.black,
                                    
                                }}


                                />




                            {/* Shipping */}

                            <IconLabel
                                containerStyle ={{
                                    marginLeft:SIZES.radius,
                                    paddingHorizontal:0,
                                    
                                    }}
                                icon ={icons.dollar}
                                label ='Free Shipping'
                                iconStyle ={{
                                    tintColor:COLORS.black
                                }}
                                labelStyle ={{
                                    color:COLORS.black,
                                    
                                }}


                                />











                        </View>

                        {/* Sizes  */}


                        <View
                            style={{

                                flexDirection:'row',
                                marginTop: SIZES.padding,
                                alignItems: 'center'



                            }}>
                                <Text style={{...FONTS.h3}}>Sizes:</Text>

                                <View style ={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginLeft: SIZES.padding
                                }}>

                                    {dummyData.sizes.map((item,index)=>{
                                        return(
                                            <TextButton
                                                key ={`Sizes-${index}`}
                                                buttonContainerStyle ={{
                                                    width:55,
                                                    height:55,
                                                    margin:SIZES.base,
                                                    borderWidth:1,
                                                    borderRadius:SIZES.radius,
                                                    borderColor:selectedSize ==item.id ? COLORS.primary: COLORS.gray2,
                                                    backgroundColor:selectedSize ==item.id ?COLORS.primary: null
                                                }}

                                                label ={item.label}
                                                labelStyle ={{
                                                    color:selectedSize ==item.id ?COLORS.white :COLORS.gray2,
                                                    ...FONTS.body2
                                                }}
                                                onPress = {() =>setSelectedSize(item.id)}
                                            
                                            />



                                            
                                        )
                                    })}




                                </View>


                        </View>







                    </View>

            </View>
        )
    }

    function renderRestaurant (){
        return (
            <View

                style ={{
                    flexDirection: 'row',
                    marginVertical:SIZES.padding,
                    paddingHorizontal:SIZES.padding,
                    alignItems: 'center',

                }}
                >
                    <Image 

                        source ={images.profile}
                        style ={{
                            width:50,
                            height:50,
                            borderRadius: SIZES.radius

                        }}
                        
                        
                        />

                        {/* Info */}

                        <View 
                            style ={{
                                flex: 1,
                                marginLeft:SIZES.radius,
                                justifyContent: 'center',

                            }}
                        
                        >
                            <Text style={{
                                ...FONTS.h3
                            }}>SwadeXpress</Text>

                            <Text style={{color:COLORS.gray,...FONTS.body3}}>1.5 KM away from you</Text>



                        </View>


                        {/* Ratings */}
                        <Rating
                        
                        rating ={4}
                        iconStyle ={{
                            marginLeft:3
                        }}
                        />

                       





            </View>



        )
    }




function renderFooter (){
    return (
        <View
            style ={{
                flexDirection: 'row',
                height:120,
                alignItems: 'center',
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.radius
            }}
        
        >

            {/* Stepper Input */}

            <StepperInput 
                value ={qty}
                onAdd ={()=>{
                    setQty(qty+1)
                }}

                onMinus ={()=>{
                    if(qty >1 ){
                        setQty(qty-1)
                    }
                }}
            
            
            />
            {/* TextButton  */}

            <TextButton
                buttonContainerStyle ={{
                    flex: 1,
                    flexDirection:'row',
                    height:60,
                    marginLeft:SIZES.radius,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.primary,
                    paddingHorizontal:SIZES.radius
                }}
                label ='Buy Now'
                label2='৳99.00'

                onPress ={()=>{
                    navigation.navigate('MyCart')


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

            {/* Header */}
            <SingleImageHeader
                name={'Check Out'}

            />



            {/* Body  */}

            <ScrollView>
                {/* Food Details */}
                {renderDetails()}

                <LineDivider/>

                {/* Restaurant  */}

                {renderRestaurant()}

                <LineDivider/>




            </ScrollView>

{/* Footer  */}

{renderFooter()}

           
        </View>
    )
}

export default FoodDetail;