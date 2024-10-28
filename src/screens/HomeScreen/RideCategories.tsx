import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { FlatList, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScalePress from "../../components/ScalePress";
import { COLORS, SIZES, animations, icons } from "../../constants";


const categoryData = [
    {
        name: 'Bike',
        image: icons.bakery,
        animation: animations.car,
        id: 1,
        navigationScreen:'DestinationSearchScreen',

    },
    {
        name: 'Car',
        image: icons.buger,
        animation: animations.car,
        navigationScreen:'DestinationSearchScreen',
        id: 2,
    },
    {
        name: 'Rental',
        image: icons.coffee,
        animation: animations.car_rent,
        navigationScreen:'DestinationSearchScreen',

        id: 3,
    },
    {
        name: 'Food',
        image: icons.fish,
        animation: animations.location,
        navigation:'DestinationSearchScreen',
        navigationScreen:'DestinationSearchScreen',
        id: 4,
    },
    {
        name: 'Parcel',
        image: icons.icecream,
        animation: animations.location,
        navigationScreen:'DestinationSearchScreen',
        id: 5,
    },
    {
        name: 'Courier',
        image: icons.juice,
        animation: animations.location,
        navigationScreen:'DestinationSearchScreen',
        id: 6,
    },
    {
        name: 'Tong',
        image: icons.juice,
        animation: animations.location,
        navigationScreen:'DestinationSearchScreen',
        id: 7,
    },
    {
        name: 'Shop',
        image: icons.juice,
        animation: animations.location,
        navigationScreen:'DestinationSearchScreen',
        id: 8,
    },
    {
        name: 'Tracking',
        image: icons.juice,
        animation: animations.location,
        navigationScreen:'DestinationSearchScreen',
        id: 9,
    },
    {
        name: 'Parma',
        image: icons.juice,
        animation: animations.location,
        navigationScreen:'DestinationSearchScreen',
        id: 10,

    },




]











const FoodCategories = ({ item }: any) => {






    const navigation = useNavigation<any>()
    return (

        <FlatList
            data={categoryData}
            keyExtractor={(item: any) => `${item.id}`}
            // horizontal={false}
            numColumns={5}
            style={{
                marginLeft: 8
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }: any) => (

                <ScalePress


                    style={{

                    }}
                    onPress={() => {
                        // if (item.name == 'More') {
                        //     navigation.navigate('CategoryScreen')
                        //     return
                        // }
                        navigation.navigate(item.navigationScreen)

                    }}

                >


                    <LinearGradient
                        style={{


                            alignItems: 'center',
                            justifyContent: 'center',
                            height: SIZES.responsiveScreenWidth(18),
                            width: SIZES.responsiveScreenWidth(17),
                            marginTop: 10,
                            borderRadius: 5,
                            marginRight: 8,

                            elevation: 2,
                            marginBottom: 1
                        }}

                        locations={[0, 1]}
                        colors={[COLORS.lightRed, COLORS.lightBlue,]}
                        useAngle={true}
                        angle={190}>
                        {/* <Image source={item.image}
                            style={{
                                height: SIZES.responsiveScreenWidth(11),
                                width: SIZES.responsiveScreenWidth(11),

                            }} /> */}

                        <LottieView
                            source={item.animation}
                            style={{
                                width: SIZES.responsiveScreenWidth(11),
                                height: SIZES.responsiveScreenWidth(11),
                            }}
                            loop={true}
                            autoPlay
                            cacheComposition={true}
                            hardwareAccelerationAndroid
                        />




                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '700',
                            color: COLORS.black,
                            marginTop: 2
                        }}>
                            {item.name}
                        </Text>
                    </LinearGradient>

                </ScalePress>




            )}


        />

    )
}

export default FoodCategories