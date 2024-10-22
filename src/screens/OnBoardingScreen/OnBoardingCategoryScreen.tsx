import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import ScalePress from "../../components/ScalePress";
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
        name: 'Bakery',
        image: icons.bakery,
        id: 11,

    },
    {
        name: 'Buger',
        image: icons.buger,
        id: 12,
    },
    {
        name: 'Coffee',
        image: icons.coffee,
        id: 13,
    },
    {
        name: 'Fish',
        image: icons.fish,
        id: 14,
    },
    {
        name: 'Icecream',
        image: icons.icecream,
        id: 15,
    },
    {
        name: 'Juice',
        image: icons.juice,
        id: 16,
    },
    {
        name: 'Kabab',
        image: icons.kabab,
        id: 17,
    },
    {
        name: 'Meat',
        image: icons.meat,
        id: 18,
    },
    {
        name: 'Sea Food',
        image: icons.sea_food,
        id: 19,
    },
    {
        name: 'Wine',
        image: icons.wine,
        id: 20,
    },




]











const FoodCategories = () => {

    const [data, setData] = useState<any>(categoryData)









    // array.push(element)
    const handelSelectedCategory = async (id: any) => {




        for (let i = 0; i < data.length; i++) {

            if (data[i].id == id) {

                if (data[i].selected == true) {
                    data[i].selected = false;
                    setData([...data]);

                }
                else {
                    data[i].selected = true;
                    setData([...data]);

                }

            }

        }


    }





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
                    <Animated.View entering={FadeInDown.delay(50).duration(900)}>


                        <FlatList
                            data={data}
                            keyExtractor={(item: any) => `${item.id}`}
                            horizontal={false}
                            numColumns={5}
                            style={{
                                marginTop: 15
                            }}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }: any) => (
                                <ScalePress



                                    onPress={() => {
                                        handelSelectedCategory(item.id)
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
                                            marginHorizontal: 3,
                                            marginTop: 8,
                                            marginBottom: 1

                                        }}

                                        locations={[0, 1]}
                                        colors={[COLORS.darkRed, item.selected ? COLORS.lightOrange3 : COLORS.lightBlue,]}
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
                                </ScalePress>


                            )}


                        />
                    </Animated.View>

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