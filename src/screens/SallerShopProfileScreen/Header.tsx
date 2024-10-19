import { Image, Pressable, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants"
import { useDispatch, useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppStatusBar from "../../../../src/screens/AppStatusBar";
import { useNavigation } from "@react-navigation/native";

const Header = ({ name }: any) => {
    const navigation = useNavigation<any>()


    return (

        <View style ={{
            backgroundColor:COLORS.primary
        }}>
           
            <View
                style={{
                    height: 40,
                    flexDirection: 'row',
                    marginTop: StatusBar.currentHeight,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width:SIZES.width,
                 
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}

                    style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft:8
                    
                    }}

                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white,
                        }} />

                </TouchableOpacity>

                <Text style={{
                    fontSize: 14.5,
                    fontWeight: '800',
                    color: COLORS.white
                }}>
                    {name}
                </Text>

                <View

                    style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight:8
              
                    }}

                />
                    

              


            </View>

        </View>

    )

}

export default Header