import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants"
import { useDispatch, useSelector } from "react-redux";
import { LOADED_SHOW_CUSTOM_DRAWER } from "../../stores/actions/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppStatusBar from "../../../../src/screens/AppStatusBar";
import CartQuantityButton from "../../components/CartQuantityButton";

const Header = ({ setShowFilterModel }: any) => {

    const dispatch = useDispatch<any>();
    const { showCustomDrawer } = useSelector((state: any) => state.product);

    const insets = useSafeAreaInsets();
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
                }}

            >

                <TouchableOpacity

                    style={{
                        marginLeft: 4
                    }}
                    onPress={() => {

                        console.log(showCustomDrawer, 'kkk')
                        if (showCustomDrawer) {
                            dispatch({
                                type: LOADED_SHOW_CUSTOM_DRAWER,
                                payload: false,
                            });
                        }
                        else {

                            dispatch({
                                type: LOADED_SHOW_CUSTOM_DRAWER,
                                payload: true,
                            });

                        }

                    }}>
                    <Image
                        source={icons.menu}

                        style={{
                            width: 22,
                            height: 22,
                            tintColor: COLORS.primary

                        }} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'center',
                        marginTop:10
                    }}

                >

                    <Image
                        source={icons.location}

                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.primary

                        }} />
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '700',
                        color: COLORS.black,
                        marginLeft: 5

                    }}>
                        {dummyData.myProfile?.address}

                    </Text>

                    <Image source={icons.down_arrow}
                        style={{
                            marginLeft: 5,
                            height: 13,
                            width: 13,
                            tintColor: COLORS.primary,
                            marginTop: 7

                        }} />

                </TouchableOpacity>

                <TouchableOpacity

                    style={{
                        width: 35,
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
            

                    }}

                >
                    <Image
                        source={icons.cart}
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: COLORS.black,
                        }} />

                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: 15,
                        width: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}>

                        <Text

                            style={{
                                color: COLORS.white,
                                ...FONTS.body5,
                                fontSize: 10,
                                marginTop: -4
                            }}

                        >
                            3
                        </Text>
                    </View>





                </TouchableOpacity>



            </View>






            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: 10,
                    marginVertical: 5,
                    borderRadius: 5,
                    elevation: 1,

                    backgroundColor: COLORS.lightGray2,
                }}
            >





                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.primary,
                        marginLeft: 5
                    }}

                />

                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body5,
                    }}
                    placeholder="Search food..." />

                <TouchableOpacity
                    style={{
                        marginRight: 4
                    }}
                    onPress={() => {
                        setShowFilterModel(true)

                    }}


                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                        }}

                    />
                </TouchableOpacity>



            </View>
        </>

    )

}

export default Header