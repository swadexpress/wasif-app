import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SingleImageHeader from "../../components/SingleImageHeader";
import Wrapper from "../../components/Wrapper";
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











const FoodCategories = ({
    handelChangeCategory,
    selectedCategoryId,
    setSelectedCategoryId,
    selectedMenuType,


}: any) => {



    const navigation = useNavigation<any>()
    return (

        <Wrapper>

            <View style={{
                flex: 1,
                alignItems: 'center',

            }}>
                <SingleImageHeader
                    name={'Choose Category'}

                />


                <View style={{
                    flex: 1,
                    alignItems: 'center',

                }}>


                    <FlatList
                        data={categoryData}
                        keyExtractor={(item: any) => `${item.id}`}
                        horizontal={false}
                        numColumns={5}
                        // style={{
                        //     marginLeft: 8
                        // }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }: any) => (
                            <TouchableOpacity

                                style={{
                                    marginHorizontal: 3,
                                    marginTop: 8,
                                    marginBottom: 1
                                }}

                                onPress={() => {

                                    navigation.navigate('SearchingAndFiteringProducts')



                                }}

                            >

                                <LinearGradient
                                    style={{

                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: SIZES.responsiveScreenWidth(19),
                                        width: SIZES.responsiveScreenWidth(17.8),
                                        borderRadius: 6,
                                        elevation: 2,

                                    }}

                                    locations={[0, 1]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={20}>


                                    <Image source={item.image}
                                        style={{
                                            height: SIZES.responsiveScreenWidth(12),
                                            width: SIZES.responsiveScreenWidth(12),

                                        }} />
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                                        fontWeight: '800',
                                        color: COLORS.black,
                                        marginTop: 3
                                    }}>
                                        {item.name}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>


                        )}


                    />


                </View>
                <>


                    <TouchableOpacity

                        onPress={() => navigation.navigate('AccountSwitchScreen')}


                        activeOpacity={0.9}>

                        <LinearGradient
                            style={{
                                backgroundColor: COLORS.lightGray2,
                                borderRadius: 10,

                                width: SIZES.responsiveScreenWidth(80),
                                height: SIZES.responsiveScreenWidth(8.5),
                                elevation: 1,
                                marginBottom: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={90}>

                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.6),
                                fontWeight: '800',
                                color: COLORS.primary,
                                marginHorizontal: 5,

                                marginTop: 1
                            }}>
                                Continue
                            </Text>

                        </LinearGradient>


                    </TouchableOpacity>

                </>
            </View>

        </Wrapper>

    )
}

export default FoodCategories