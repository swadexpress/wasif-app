import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { COLORS, SIZES, icons, images } from "../../constants"
import * as Progress from 'react-native-progress';
import AnimatedProgressWheel from 'react-native-progress-wheel';


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

const AllProducts = ({ }: any) => {

    return (
        <View style={{
            marginTop: 5,
            alignItems: 'center',
            justifyContent: 'center'
            // marginHorizontal:8

        }}>



            <Text style={{
                fontSize: 15,
                alignSelf: 'flex-start',
                fontWeight: '700',
                color: COLORS.black,
                marginTop: 3,
                marginBottom: 8,
                marginLeft: 4,
            }}>
                Top item over view
            </Text>




            <FlatList
                style={{

                }}
                data={data}
                keyExtractor={item => `${item.id}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // numColumns={2}
                renderItem={({ item, index }) => (

                    <TouchableOpacity


                        activeOpacity={0.7}>



                        <View style={{
                            backgroundColor: COLORS.lightBlue2,
                            borderRadius: 7,
                            marginTop: 8,
                            width: 170,
                            // elevation: 0.5,
                            marginRight: 8,
                            marginBottom: 1,

                        }}>




                            <FastImage

                                style={{
                                    width: 170,
                                    height: 95,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10
                                }}
                                source={{ uri: item.image }}
                                resizeMode={'stretch'}

                            />


                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 5,
                                marginHorizontal:5,
                                marginBottom:5,


                            }}>
                                <View style ={{
                                    marginLeft:3
                                }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '700',
                                        color: COLORS.black,

                                    }}>
                                        {`${item.name.slice(0, 10)}...`}
                                    </Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: '700',
                                        color: COLORS.black,
                                        marginTop:4,
                                       
                                    }}>
                                        {`${index + 99}`}
                                    </Text>
                                </View>





                                <AnimatedProgressWheel
                                    showProgressLabel={true}
                                    showPercentageSymbol={true}
                                    rotation={'-90deg'}
                                    labelStyle={{
                                        color: COLORS.green,
                                        fontSize: 12,
                                        fontWeight: '700'
                                    }}
                                    // progress={45}


                                    {...{
                                        color: COLORS.primary4,
                                        backgroundColor: COLORS.primary2,
                                        size: 42,
                                        width: 3,
                                        duration: 500,
                                        progress: 70,
                                        rounded: true
                                    }}

                                />
                            </View>
                        </View>

                    </TouchableOpacity>


                )}

            />
        </View>
    )

}

export default AllProducts