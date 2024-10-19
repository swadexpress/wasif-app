import { Image, Text, TouchableOpacity, View } from "react-native";
import AppStatusBar from "../../components/AppStatusBar";
import { COLORS, SIZES, icons } from "../../constants";

const Header = ({ refRBSheetFilter }: any) => {


    return (

        <>
            <AppStatusBar />
            <View
                style={{
                    height: 40,
                    flexDirection: 'row',
                    marginTop: 1,
                    alignItems: 'center',
                    marginHorizontal: 8,
                    width: SIZES.responsiveScreenWidth(97),
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',

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

                <TouchableOpacity

                    style={{
                        width: SIZES.responsiveScreenWidth(8),
                        height: SIZES.responsiveScreenWidth(8),
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor:'#ccc'


                    }}

                >
                    {/* <Image
                        source={icons.notification}
                        style={{
                            width: SIZES.responsiveScreenWidth(5.5),
                            height: SIZES.responsiveScreenWidth(5.5),


                            tintColor: COLORS.black,
                        }} /> */}

                </TouchableOpacity>

            </View>

        </>

    )

}

export default Header