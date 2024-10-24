import { useCollapsibleContext } from "@r0b0t3d/react-native-collapsible";
import {
    Image,
    Text,
    TouchableOpacity, View
} from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import RollingBar from 'react-native-rolling-bar';
import { COLORS, SIZES, icons } from "../../constants";


const noticeHeight = -(SIZES.noticeHeaght)


const searchingData = [
    'sweets, milk, piza,😍',
    'buger, milk, sweets',
    'fish, milk, buger😍',
    'buger, milk, sweets😍',


]
const Header = ({ refRBSheetFilter }: any) => {

    const { scrollY } = useCollapsibleContext()

    const haderAnimatedStyle = useAnimatedStyle(() => {

        const opacity = interpolate(
            scrollY.value, [0, 120], [1, 0]
        )
        return { backgroundColor: COLORS.lightRed }
    })


    return (

        <View
            style={{
                flexDirection: 'row',
                height: SIZES.responsiveScreenWidth(7),
                width: SIZES.responsiveScreenWidth(81),

                alignItems: 'center',
                borderRadius: 6,
                marginVertical:8,
                marginBottom: 2,
                borderWidth:1,
                borderColor:COLORS.primary
                // elevation: 1,
            


            }}
        >





            <Image
                source={icons.search}
                style={{
                    width: SIZES.responsiveScreenWidth(5.5),
                    height: SIZES.responsiveScreenWidth(5.5),
                    tintColor: COLORS.primary,
                    marginLeft: 5
                }}

            />

            <RollingBar
                interval={3000} defaultStyle={false}
                customStyle={{
                    marginLeft: 4

                }}

            >

                {searchingData.map((v) => {
                    return (
                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '500',
                            color: COLORS.black
                        }}>
                            {`Search for ${v}`}
                        </Text>

                    )
                })}

            </RollingBar>



            <TouchableOpacity
                style={{
                    marginRight: 10
                }}
                onPress={() => {
                    refRBSheetFilter.current.open()
                }}
            >
                <Image
                    source={icons.filter}
                    style={{
                        width: SIZES.responsiveScreenWidth(4.6),
                        height: SIZES.responsiveScreenWidth(4.6),
                        tintColor: COLORS.primary,
                    }}
                />
            </TouchableOpacity>

        </View>
    )

}

export default Header