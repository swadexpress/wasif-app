import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../../constants';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import React from 'react';
import StepperInput from '../../components/StepperInput'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';



const data = [
    {
        id: 1,
        qty: 1,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 2,
        qty: 2,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 3,
        qty: 3,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },
]
const MyCart = ({ }) => {

    const [myCartList, setMyCartList] = React.useState(data)



    const navigation = useNavigation()
    const updateQuantityHandler = (newQty: number, id: number) => {
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? { ...cl, qty: newQty } : cl
        ))
        setMyCartList(newMyCartList)

    }

    const removeMyCartHandler = (id: any) => {
        let newMyCartList = [...myCartList]
        const index = newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)

    }





    return (
        <>
            <FlatList
                data={myCartList}

                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => (
                    <View style={{
                        height: 90,

                        flexDirection: 'row',
                        backgroundColor: COLORS.lightGray2,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: SIZES.width * 0.97,
                        marginTop: 10,
                        borderRadius: 10



                    }}>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}

                        >

                            <Image

                                source={{ uri: item.image }}
                                resizeMode={'cover'}
                                style={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: COLORS.primary,
                                    borderRadius: 5,
                                }} />
                            <View
                                style={{
                                    justifyContent: 'center',
                                    // alignItems: 'center',
                                    marginHorizontal: 8
                                }}
                            >


                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: '700',
                                        color: COLORS.black
                                    }}

                                >{`${item.name.slice(0, 30)}...`}</Text>



                                <StepperInput

                                    containerStyle={{
                                        height: 25,
                                        width: 110,
                                        marginTop: 18,
                                        backgroundColor: COLORS.primary,
                                        marginRight: 7
                                    }}
                                    value={item.qty}

                                    onAdd={() => {
                                        updateQuantityHandler(
                                            item.qty + 1, item.id
                                        )

                                    }}

                                    onMinus={() => {
                                        if (item.qty > 1) {
                                            updateQuantityHandler(
                                                item.qty - 1, item.id

                                            )

                                        }
                                    }}

                                />

                            </View>
                        </View>


                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 8
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 26,
                                    height: 26,
                                    borderRadius: 5,
                                    backgroundColor: COLORS.primary


                                }}
                            >
                                <Image

                                    source={icons.check}

                                    style={{
                                        width: 18,
                                        height: 18,
                                        tintColor: COLORS.white

                                    }}

                                />

                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop:20
                                   

                                }}
                            >
                                <Text style={{
                                    color: COLORS.primary4,
                                    fontSize: 14,
                                    fontWeight: '700'
                                }}>
                                    ৳{20}
                                </Text>

                            </View>


                        </View>




                    </View>
                )}
            />

        </>
    )
}


const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: SIZES.radius
    }
})

export default MyCart;