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
            // backgroundColor:COLORS.primary
            marginTop:7,
            

        }}>
           
            <View
                style={{
                    height: 38,
                    flexDirection: 'row',
                    marginTop: StatusBar.currentHeight,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: SIZES.responsiveScreenWidth(97),
                 
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}

                    style={{
                        width: 30,
                        height: 30,
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
                    fontSize: 14.5,
                    fontWeight: '800',
                    color: COLORS.black
                }}>
                    {name}
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}

                    style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                      
              
                    }}

                >
                    <Image
                        source={icons.setting}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.black,
                        }} />

                </TouchableOpacity>


            </View>

        </View>

    )

}

export default Header