import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScalePress from "../../components/ScalePress";
import { COLORS, SIZES, icons } from "../../constants";


const categoryData = [
    {
        name: 'Car Plus',
        image: icons.transaction,
        dis: 'Affordable rides for your daily commute',
        id: 1,
        seats:4

    },
    {
        name: 'Car prime',
        image: icons.transaction,
        dis: 'Premium rides for prime comfort &safety',
        seats:4,
        id: 2,
    },
    {
        name: 'Car Max',
        image: icons.transaction,
        dis: 'Spacious rides for larger groups & occasions',
        seats:8,
        id: 3,
    },



]











const FoodCategories = ({setSelectCarTypeData}:any) => {

    const [selectedId, setSelectedId] = useState<any>(categoryData[0].id)



    useEffect(()=>{
        setSelectCarTypeData(categoryData[0])
    },[])



    return (




        <View style={{

            alignItems: 'center',

        }}>


            {categoryData.map((item: any) => {
                return (
                    <ScalePress
                        onPress={() => {
                            setSelectedId(item.id)
                            setSelectCarTypeData(item)
                        }}
                    >

                        <LinearGradient
                            style={{

                                alignItems: 'center',
                                // justifyContent: 'center',
                                height: SIZES.responsiveScreenWidth(13),
                                width: SIZES.responsiveScreenWidth(95),
                                borderRadius: 6,
                                elevation: 0.5,
                                marginHorizontal: 3,
                                marginTop: 5,
                                marginBottom: 1,
                                flexDirection: 'row'

                            }}

                            locations={[0, 1]}
                            colors={[COLORS.darkRed, item.id == selectedId ? COLORS.lightOrange3 : COLORS.lightBlue,]}
                            useAngle={true}
                            angle={15}>


                            <Image source={item.image}
                                style={{
                                    height: SIZES.responsiveScreenWidth(6),
                                    width: SIZES.responsiveScreenWidth(6),
                                    marginLeft: 8

                                }} />
                            <View style={{
                                marginLeft: 8
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                                        fontWeight: '800',
                                        color: COLORS.black,

                                    }}>
                                        {item.name}
                                    </Text>


                                    <Image source={icons.profile}
                                        style={{
                                            height: SIZES.responsiveScreenWidth(3),
                                            width: SIZES.responsiveScreenWidth(3),
                                            marginLeft: 13,
                                            tintColor: COLORS.primary

                                        }} />

                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.1),
                                        fontWeight: '800',
                                        color: COLORS.gray,
                                        marginLeft:2

                                    }}>
                                        {item.seats}{' Seats'}
                                    </Text>
                                </View>




                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.3),
                                    fontWeight: '800',
                                    color: COLORS.gray,
                                    marginTop: 2

                                }}>
                                    {item.dis}
                                </Text>
                            </View>
                        </LinearGradient>
                    </ScalePress>
                )
            })}


        </View>



    )
}

export default FoodCategories