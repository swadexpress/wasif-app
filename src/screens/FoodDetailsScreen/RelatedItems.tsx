import { FlatList, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import LinearGradient from "react-native-linear-gradient"
import { COLORS, SIZES, images } from "../../constants"


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
    {
        id: 5,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 6,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },



]

const NearbyFoods = ({ recommends }: any) => {

    return (
        <View style={{
            marginTop: 15,

            // marginHorizontal:8

        }}>



            <Text style={{
                fontSize: SIZES.responsiveScreenFontSize(2),
                fontWeight: '800',
                color: COLORS.black,
                marginTop: 3,
                marginBottom: 8,
                marginLeft: 8,

            }}>
                Related Items
            </Text>



            <FlatList
                style={{

                }}
                data={data}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (

                    <TouchableOpacity


                        activeOpacity={0.7}>

                        <LinearGradient
                            style={{
                                backgroundColor: COLORS.lightBlue2,
                                borderRadius: 7,
                                width: SIZES.responsiveScreenWidth(26),
                                elevation: 1,
                                marginRight: 8,
                                marginLeft: index == 0 ? 8 : 0,
                                alignItems: 'center',
                                marginBottom: 1
                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.lightRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={90}>




                            <FastImage

                                style={{
                                    width: SIZES.responsiveScreenWidth(26),
                                    height: SIZES.responsiveScreenWidth(22),
                                    borderRadius: SIZES.responsiveScreenWidth(1),
                                    marginTop: 5
                                }}
                                source={{ uri: item.image }}
                                resizeMode={'cover'}
                            // resizeMode={'stretch'}

                            />




                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.5),
                                fontWeight: '700',
                                color: COLORS.black,
                                marginTop: 7,
                                marginBottom: 8
                            }}>
                                {`${item.name.slice(0,11)}...`}
                            </Text>



                        </LinearGradient>

                    </TouchableOpacity>


                )}


                ListFooterComponent={<View style={{
                    marginRight: 10


                }} />}

            />
        </View>
    )

}

export default NearbyFoods