import { View, Image, Text } from "react-native"
import { images, SIZES, FONTS, COLORS, icons } from "../../constants"

function Header() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}

        >

            <Image
                source={images.profile}
                style={{
                    width: 90,
                    height: 90,
                    borderRadius: SIZES.radius
                }}
            />





            {/* =====Profile User Name ==== */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 13,
                marginTop: 5
            }}>

                <Text style={{
                    fontSize: 15,
                    fontWeight: '700',
                    color: COLORS.black,
                }}>
                    Kawsar Khan
                </Text>

                <View style={{
                    width: 13,
                    height: 13,
                    backgroundColor: '#2797FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    marginLeft: 4
                }}>

                    <Image
                        source={icons.correct}
                        style={{
                            width: 13,
                            height: 13,
                            tintColor: COLORS.white
                        }}

                    />
                </View>
            </View>


            {/* =====Open status ==== */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',

                marginTop: 5
            }}>

                <Image
                    source={icons.clock}
                    style={{
                        width: 12,
                        height: 12,
                        tintColor: COLORS.primary
                    }}

                />

                <Text style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: COLORS.primary,
                    marginLeft: 3
                }}>
                    Open All Days
                </Text>


            </View>



        
        </View>
    )
}

export default Header