import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import ScalePress from "../../components/ScalePress";
import { COLORS, SIZES, icons } from "../../constants";


const categoryData = [
    {
        name: 'Bakery',
        image: icons.bakery,
        id: 1,

    },
    {
        name: 'Buger',
        image: icons.buger,
        id: 2,
    },
    {
        name: 'Coffee',
        image: icons.coffee,
        id: 3,
    },
    {
        name: 'Fish',
        image: icons.fish,
        id: 4,
    },
    {
        name: 'Icecream',
        image: icons.icecream,
        id: 5,
    },
    {
        name: 'Juice',
        image: icons.juice,
        id: 6,
    },
    {
        name: 'Kabab',
        image: icons.kabab,
        id: 7,
    },
    {
        name: 'Meat',
        image: icons.meat,
        id: 8,
    },
    {
        name: 'Sea Food',
        image: icons.sea_food,
        id: 9,
    },
    {
        name: 'Wine',
        image: icons.wine,
        id: 10,
    },
    {
        name: 'More',
        image: icons.see_more,
        id: 11,
    },



]











const FoodCategories = ({ item }: any) => {






    const navigation = useNavigation<any>()
    return (

        <FlatList
            data={categoryData}
            keyExtractor={(item: any) => `${item.id}`}
            horizontal={true}
            // numColumns={7}
            style={{
                marginLeft: 8
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }: any) => (
                <Animated.View
                
                // entering={FadeInDown.delay(50).duration(900)}
                
                
                >

              
                <ScalePress

             
                    style={{

                    }}
                    onPress={() => {
                        if (item.name == 'More') {
                            navigation.navigate('CategoryScreen')
                            return
                        }
                        navigation.navigate('SearchingAndFiteringProducts')

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
                        <Image source={item.image}
                            style={{
                                height: SIZES.responsiveScreenWidth(11),
                                width: SIZES.responsiveScreenWidth(11),

                            }} />
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

                </Animated.View>


            )}


        />

    )
}

export default FoodCategories