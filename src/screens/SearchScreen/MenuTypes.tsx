import { FlatList, Text, TouchableOpacity } from "react-native"
import { COLORS, SIZES, dummyData } from "../../constants"
import { useState } from "react";

const MenuTypes = () => {
    
    const [selectedMenuType, setSelectedMenuType] = useState(1);

    return (
   
   
   
        <FlatList
            horizontal
            data={dummyData.menu}
            keyExtractor={item => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                marginTop: 10,
                marginBottom: 15

            }}
            renderItem={({ item, index }:any) => (

                <TouchableOpacity

                    activeOpacity={0.9}
                    style={{
                        marginLeft: 10,
                        backgroundColor: COLORS.primary,
                        borderRadius: 5,
                        marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0

                    }}

                    onPress={() => {
                        setSelectedMenuType(item.id)

                    }}


                >

                    <Text style={{
                        color: selectedMenuType == item.id ? COLORS.white : COLORS.gray,
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.4),
                        marginHorizontal: 9,
                        marginVertical: 3

                    }}>{item.name}</Text>
                </TouchableOpacity>
            )}


        />
    )
}


export default  MenuTypes