import {COLORS, FONTS, SIZES, constants, dummyData, icons, images} from '../../constants';
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import CardItem from '../../components/CardItem'
import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import {Header} from '@react-navigation/stack';
import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import React from 'react';
import TextButton from '../../components/TextButton'
import Rating from '../../components/Rating'
import TextIconButton from '../../components/TextIconButton'
import LineDivider from '../../components/LineDivider'
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import SingleImageHeader from '../../components/SingleImageHeader';

const Settings = ({ navigation }) => {
    const [selectedCard,setSelectedCard] =React.useState(null)
    const [ratings,setRatings] =React.useState("");
    const [comment,setComment] =React.useState("");
    const {navigate} = useNavigation();
    const data =[
        {

            name :'Change Password'
        },

        {

            name :'Preferences'
        },

        {

            name :'Notifications'
        },
        {

            name :'Data use'
        },
        {

            name :'Language'
        },
        {

            name :'Check Update'
        },
        {

            name :'Contact Us'
        },
        {

            name :'Privacy Policy'
        },
        {

            name :'Terms & Conditions'
        },
        {

            name :'Logout'
        },





    ]





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

                {data.map((v,index)=>{
                    return(
                        <View key ={`item${index}`}>
                             <View style ={{
                                borderBottomWidth:1,
                                borderBottomColor: index == 0 ? COLORS.white : COLORS.gray3 ,
                            }}
                            />

                            <TouchableOpacity
                            onPress={() => navigation.navigate('ChangePassword')}
                            
                            
                            >
                     
                            <View style ={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:"space-between",
                                marginTop:15,
                                marginBottom:15,
                                
                                }}>
                                <Text style ={{...FONTS.h4,color:COLORS.black}}>{v.name} </Text>
                            </View>

                            </TouchableOpacity>
                           
                    </View>



                    )
                })}


                    



                </View>
         












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


                {renderBodyTop()}






            </ScrollView>
          
        </View>
    )
}

export default Settings;