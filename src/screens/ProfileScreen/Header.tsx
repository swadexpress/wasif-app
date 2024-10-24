import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, icons } from "../../constants";

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