import { useNavigation } from "@react-navigation/native";
import {
    Image,
    StatusBar,
    TouchableOpacity, View
} from "react-native";
import { useDispatch } from "react-redux";
import { COLORS, SIZES, icons } from "../../constants";




const Header = ({ isHomeRout }: any) => {

    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>();


    return (

        <View style={
            {
                alignItems: 'center',
                justifyContent: 'center',
                position:'absolute',
                left:0,
                right:0,
                zIndex:999,
                marginTop:StatusBar.currentHeight+5

          
            }
        }>

            <View
                style={{
                    // height: 40,
                    flexDirection: 'row',

                    alignItems: 'center',
                    width: SIZES.responsiveScreenWidth(97),
                    height: SIZES.responsiveScreenWidth(7),
                    justifyContent: 'space-between',
                    // height: SIZES.responsiveScreenWidth(35),
                }}
            >


                <TouchableOpacity

                    activeOpacity={0.9}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',

                        marginTop: 4,
                        borderRadius: 5,
                        
                        height: SIZES.responsiveScreenWidth(7),
                        width: SIZES.responsiveScreenWidth(7),
                        backgroundColor:COLORS.lightBlue,
                    }}

                    onPress={() => navigation.goBack()}

                >

                    <Image
                        source={icons.back}
                        style={{
                            width: SIZES.responsiveScreenWidth(4.5),
                            height: SIZES.responsiveScreenWidth(4.5),
                            tintColor: COLORS.primary

                        }} />
                </TouchableOpacity>

                {/* <BluerSearchBar /> */}





                <TouchableOpacity

                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',

                        marginTop: 4,
                        borderRadius: 5,
                        
                        height: SIZES.responsiveScreenWidth(7),
                        width: SIZES.responsiveScreenWidth(7),
                        backgroundColor:COLORS.lightBlue,


                    }}

                >
                    <Image
                        source={icons.cart}
                        style={{
                            width: SIZES.responsiveScreenWidth(5),
                            height: SIZES.responsiveScreenWidth(5),


                            tintColor: COLORS.black,
                        }} />


                </TouchableOpacity>

            </View>
        </View>

    )

}

export default Header