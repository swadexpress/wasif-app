import { useNavigation } from "@react-navigation/native";
import {
    Image,
    Text,
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
                alignItems: 'center'
            }
        }>

            <View
                style={{
                    // height: 40,
                    flexDirection: 'row',

                    alignItems: 'center',
                    width: SIZES.responsiveScreenWidth(97),
                    justifyContent: 'space-between',
                    height: 38
                }}
            >

                {isHomeRout ?
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 4,
                            marginTop: -5

                        }}

                    >

                        <Image
                            source={icons.location}

                            style={{
                                width: SIZES.responsiveScreenWidth(6),
                                height: SIZES.responsiveScreenWidth(6),
                                tintColor: COLORS.primary

                            }} />


                        <Text style={{
                            fontSize: 12,
                            fontWeight: '700',
                            color: COLORS.primary,
                            marginLeft: 5

                        }}>
                            H-1,R-2,Kalkini,Madaripur,Bangladesh

                        </Text>

                        <Image source={icons.down_arrow}
                            style={{
                                marginLeft: 5,
                                height: SIZES.responsiveScreenWidth(3),
                                width: SIZES.responsiveScreenWidth(3),
                                tintColor: COLORS.primary,
                                marginTop: 9

                            }} />

                    </TouchableOpacity>

                    :

                    <TouchableOpacity

                        activeOpacity={0.9}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: 4,
                            marginTop: 4
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
                }




                <TouchableOpacity

                    style={{
                        width: SIZES.responsiveScreenWidth(8),
                        height: SIZES.responsiveScreenWidth(8),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: -5
                        // backgroundColor:'#ccc'


                    }}

                >
                    <Image
                        source={icons.cart}
                        style={{
                            width: SIZES.responsiveScreenWidth(5.5),
                            height: SIZES.responsiveScreenWidth(5.5),


                            tintColor: COLORS.black,
                        }} />

                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: SIZES.responsiveScreenWidth(3.4),
                        width: SIZES.responsiveScreenWidth(3.4),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.responsiveScreenWidth(2),
                        backgroundColor: COLORS.primary
                    }}>

                        <Text

                            style={{
                                color: COLORS.white,

                                fontSize: SIZES.responsiveScreenFontSize(1),
                                // marginTop: 4-
                            }}

                        >
                            3
                        </Text>
                    </View>





                </TouchableOpacity>

            </View>
        </View>

    )

}

export default Header