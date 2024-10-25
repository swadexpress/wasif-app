import { Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ProgressBar } from "../../components/ReactNativeMulticolorProgressBar";
import { COLORS, SIZES, icons } from "../../constants";

const MonthlyRevenueProgressView = ({ }: any) => {

    return (
        <>


            <LinearGradient
                style={{
                    width: SIZES.responsiveScreenWidth(95),
                    borderRadius: 5,
                    marginTop: 8,
                    marginBottom: 90,
                    elevation: 1,
                }}

                locations={[0, 1]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={190}>



                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginBottom: 8,
                    marginHorizontal: 8


                }}>

                    <Text style={{
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.8),
                        color: COLORS.black,
                    }}>
                        Monthly Revenue

                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 16,
                                height: 16,
                                tintColor: COLORS.gray
                            }}


                        />


                        <Text style={{
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.3),
                            color: COLORS.gray,
                            marginLeft: 3
                        }}>
                            Monthly Revenue

                        </Text>
                    </View>
                </View>

                <View style={{

                    alignItems: 'center',

                    marginHorizontal: 8,
                    marginTop: 7,
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 5

                    }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.4),

                            color: COLORS.gray,
                        }}>
                            Week-1

                        </Text>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: SIZES.responsiveScreenFontSize(1.3),
                            color: COLORS.gray,
                        }}>
                            10-11-2024

                        </Text>

                    </View>

                    <ProgressBar
                        textStyle={{
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            color: COLORS.black,
                            fontWeight: '700',
                            // fontW

                        }}

                        backgroundBarStyle={
                            {
                                alignItems: 'stretch',
                                backgroundColor: '#EFF1F5',
                                borderRadius: 4,
                                height: 16
                            }

                        }
                        onStartProgressStyle={
                            {
                                borderTopLeftRadius: 3,
                                borderBottomLeftRadius: 3
                            }

                        }
                        onEndProgressStyle={
                            {
                                borderTopLeftRadius: 3,
                                borderBottomLeftRadius: 3
                            }

                        }
                        arrayOfProgressObjects={[
                            {
                                color: COLORS.primary4,
                                value: 0.6,
                                nameToDisplay: "60%"
                            },
                            {
                                color: COLORS.lightGray1,
                                value: 0.4,
                                opacity: 0.5
                            },
                        ]}
                    />
                </View>
                <View style={{

                    alignItems: 'center',

                    marginHorizontal: 8,
                    marginTop: 10,
                    marginBottom: 15
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 5

                    }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.4),

                            color: COLORS.gray,
                        }}>
                            Week-1

                        </Text>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: SIZES.responsiveScreenFontSize(1.3),
                            color: COLORS.gray,
                        }}>
                            10-11-2024

                        </Text>

                    </View>

                    <ProgressBar
                        textStyle={{
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            color: COLORS.black,
                            fontWeight: '700',
                            // fontW

                        }}

                        backgroundBarStyle={
                            {
                                alignItems: 'stretch',
                                backgroundColor: '#EFF1F5',
                                borderRadius: 4,
                                height: 16
                            }

                        }
                        onStartProgressStyle={
                            {
                                borderTopLeftRadius: 3,
                                borderBottomLeftRadius: 3
                            }

                        }
                        onEndProgressStyle={
                            {
                                borderTopLeftRadius: 3,
                                borderBottomLeftRadius: 3
                            }

                        }
                        arrayOfProgressObjects={[
                            {
                                color: COLORS.primary4,
                                value: 0.6,
                                nameToDisplay: "60%"
                            },
                            {
                                color: COLORS.lightGray1,
                                value: 0.4,
                                opacity: 0.5
                            },
                        ]}
                    />
                </View>





            </LinearGradient>


        </>
    )

}

export default MonthlyRevenueProgressView