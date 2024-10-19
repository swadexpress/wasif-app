import {COLORS, FONTS, SIZES, dummyData, icons} from '../../constants';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import IconButton from '../../components/IconButton'
import React from 'react';
import StepperInput from '../../components/StepperInput'
import { SwipeListView } from 'react-native-swipe-list-view';

const Favourite = ({ navigation }) => {

    const [myCartList,setMyCartList] = React.useState(dummyData.myCart)

    const updateQuantityHandler =(newQty,id)=>{
        const newMyCartList = myCartList.map(cl=>(
            cl.id === id ? {...cl,qty:newQty} :cl
            ))
        setMyCartList(newMyCartList)


    }

    const removeMyCartHandler =(id)=>{
        let newMyCartList = [...myCartList]
        const index = newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)

    }


    function renderCartList(){
        return(

        <SwipeListView
            data={myCartList}
            key={item =>`${item.id}`}
            contentContainerStyle =
                {{
                marginTop:SIZES.radius,
                paddingHorizontal:SIZES.padding,
                paddingBottom:SIZES.padding * 2
                    }}

            disableRightSwipe={true}
            renderItem={ (data, rowMap) => (
                <View style ={{
                    height:100, 
                    backgroundColor:COLORS.lightGray2,
                    ...styles.cartItemContainer
                    
                    }}>
                    {/* <Text>{data.item.name}</Text> */}
                    {/* Food Image */}
                    <View style ={{
                        width:90,
                        height:100,
                        marginLeft:-10,
                    }}>
                        <Image 

                            source={data.item.image}
                            style={{
                                width:'100%',
                                height:'100%',
                                position:'absolute',
                                top:10
                            }}/>



                    </View>

                    {/* Food Information */}
                    <View
                        style ={{
                            flex:1,
                        }}
                    
                    >
                        <Text
                            style ={{
                                ...FONTS.body3
                            }}
                        
                        >{data.item.name}</Text>

                        <Text style ={{color:COLORS.primary,...FONTS.h3}}>
                        ৳{data.item.price}
                        </Text>


                    </View>

                    {/* Quantity */}

                    <StepperInput

                    containerStyle ={{
                        height:50,
                        width:125,
                        backgroundColor: COLORS.white
                    }}
                    value ={data.item.qty}

                    onAdd={()=>{
                        updateQuantityHandler(
                            data.item.qty + 1 ,data.item.id
                        )

                    }}
                    
                    onMinus={()=>{
                        if (data.item.qty > 1){
                            updateQuantityHandler(
                                data.item.qty - 1 ,data.item.id
                                
                            )

                    }
                    }}


                    />


                </View>
            )}

            renderHiddenItem={ (data, rowMap) => (
                <IconButton
                    containerStyle ={{
                            flex: 1,
                            justifyContent:'flex-end',
                            backgroundColor:COLORS.primary,
                            ...styles.cartItemContainer

                    }}
                    icon={icons.delete_icon}
                    iconStyle ={{
                        marginRight:10,
                        
                    }}

                    onPress ={()=>{
                        removeMyCartHandler(data.item.id)
                    }}


                
                />
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        />




        )
    }




    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >

          

                {/* Cart List */}
                {renderCartList()}


            
        </View>
    )
}


const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:SIZES.radius,
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.radius
    }
})

export default Favourite;