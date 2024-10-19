import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { COLORS, SIZES, icons, images } from "../../constants"


const data = [
    {
        id: 1,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 2,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 3,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },

    {
        id: 4,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },

]

const Review = ({ }: any) => {

    console.log('dd')
    return (
        <View style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center'
            // marginHorizontal:8

        }}>


            <FlatList
                style={{

                }}
                data={data}
                keyExtractor={item => `${item.id}`}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (

                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <View style={{
                            backgroundColor: COLORS.lightGray2,
                            borderRadius: 10,
                            marginTop: 8,
                            width: SIZES.width * 0.95,
                            elevation: 1,
                            marginBottom: 1,

                        }}>



                            <View style={{
                                flexDirection: 'row',
                                // alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 5,


                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  


                                }}>
                                    <FastImage

                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 10

                                        }}
                                        source={{ uri: item.image }}
                                        resizeMode={'cover'}

                                    />
                                    <View>

                                 
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '700',
                                        color: COLORS.black,
                                        marginHorizontal: 5
                                    }}>
                                        {`${item.profile_name}`}
                                    </Text>
                                    <Text style={{
                                        fontSize: 10,
                                        fontWeight: '700',
                                        color: COLORS.gray,
                                        marginHorizontal: 5,
                                        fontStyle:'italic'
                                    }}>
                                       10-11-2024
                                    </Text>
                                    </View>

                                </View>


                                <View style={{
                                    flexDirection: 'row',
                                    alignItems:'center'
                                }}>
                                    <Image

                                        style={{
                                            width: 12,
                                            height: 12,
                                            marginLeft:5,
                                            tintColor:COLORS.orange
                                        }}
                                        source={icons.star}
                                    />
                                
                                    <Image

                                        style={{
                                            width: 12,
                                            height: 12,
                                            marginLeft:5,
                                            tintColor:COLORS.orange
                                        }}
                                        source={icons.star}
                                    />
                                    <Image

                                        style={{
                                            width: 12,
                                            height: 12,
                                            marginLeft:5,
                                            tintColor:COLORS.orange
                                        }}
                                        source={icons.star}
                                    />
                                    <Image

                                        style={{
                                            width: 12,
                                            height: 12,
                                            marginLeft:5,
                                            tintColor:COLORS.orange
                                        }}
                                        source={icons.star}
                                    />
                                    <Image

                                        style={{
                                            width: 12,
                                            height: 12,
                                            marginLeft:5,
                                            marginRight:8,
                                            tintColor:COLORS.orange
                                        }}
                                        source={icons.star}
                                    />
                            
                                </View>


                            </View>

                            <Text style={{
                                fontSize: 12,
                                fontWeight: '700',
                                color: COLORS.gray,
                                marginHorizontal: 10,
                                marginTop:10,
                                marginBottom:10
                            }}>
                                {`${item.name}`}
                            </Text>

                        </View>

                    </TouchableOpacity>


                )}

            />
        </View>
    )

}

export default Review