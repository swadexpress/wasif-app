import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../../constants';
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import CardItem from '../../components/CardItem'
import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import React, { useState } from 'react';
import TextButton from '../../components/TextButton'
import Rating from '../../components/Rating'
import TextIconButton from '../../components/TextIconButton'
import LineDivider from '../../components/LineDivider'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import Header from './Header';
import AllProducts from './AllProducts';
import Review from './Review';
import AboutUs from './AboutUs';
import SingleImageHeader from '../../components/SingleImageHeader';

const aboutData = [
    {
        name: 'Add Item',
        image: icons.edit,
    },
    {
        name: 'All Product',
        image: icons.edit,
    },
    {
        name: 'About us',
        image: icons.edit,

    },
    {
        name: 'Review',
        image: icons.edit,
    },
    {
        name: 'Map',
        image: icons.edit,
    },
    {
        name: 'Edit',
        image: icons.edit,
    },

]

const MyAccount = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");

    const [selectedShowDetails, setSelectedShowDetails] = useState('All Product');

    const { navigate } = useNavigation();

    const navigation = useNavigation()





    const renderAboutButton = () => {
        return (
            <View style={{
                alignItems: 'center'
            }}>


                <FlatList
                    horizontal ={false}
                    numColumns={3}
                
                    data={aboutData}
                    keyExtractor={item => `${item.name}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        marginBottom:10,

                    }}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity

                            activeOpacity={0.7}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems:'center',
                                width: SIZES.width * 0.3,
                                height:28,
                                marginTop:6,

                                marginLeft: 5,
                                backgroundColor: COLORS.primary,
                                borderRadius: 5,
                                marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0

                            }}

                            onPress={() => {
                                setSelectedShowDetails(item.name)

                            }}


                        >

                            <Image

                                source={item.image}

                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.white,
                                    // marginVertical:5,
                                    // marginLeft:9
                                }}


                            />

                            <Text style={{
                                color: selectedShowDetails == item.name ? COLORS.white : COLORS.gray,
                                fontWeight: '700',
                                fontSize: 13,

                                marginLeft: 4,
                                // marginRight:10,
                                // marginVertical:5,


                            }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }











    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
             <SingleImageHeader
                name={'Check Out'}

            />

            <ScrollView
                style={{
                    flexGrow: 1,
                    paddingHorizontal: 10,
                }}

            >

                <Header />

                {renderAboutButton()}

                {selectedShowDetails == 'All Product' ?
                    <AllProducts />
                    : null
                }
                {selectedShowDetails == 'Review' ?
                    <Review />
                    : null
                }
                {selectedShowDetails == 'About us' ?
                    <AboutUs />
                    : null
                }



            </ScrollView>

        </View>
    )
}

export default MyAccount;