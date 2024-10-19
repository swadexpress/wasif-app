import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, icons } from "../constants";
import AppStatusBar from "./AppStatusBar";

const Header = ({ name }: any) => {
    const navigation = useNavigation<any>()


    return (

        <>
            <AppStatusBar />
            <View
                style={{
                    height: 40,
                    flexDirection: 'row',
                    marginTop: 1,
                    alignItems: 'center',
                    marginHorizontal: 6,
                    justifyContent: 'space-between',
                    width: SIZES.responsiveScreenWidth(97)

                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}

                    style={{
                        width: SIZES.responsiveScreenWidth(10),
                        height:SIZES.responsiveScreenWidth(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.black,
                        }} />

                </TouchableOpacity>

                <Text style={{
                    fontSize: SIZES.responsiveScreenFontSize(1.9),
                    fontWeight: '800',
                    color: COLORS.primary
                }}>
                    {name}
                </Text>

                <View

                    style={{
                        width: 35,
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                />


            </View>

        </>

    )

}

export default Header