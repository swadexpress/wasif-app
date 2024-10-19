import { View, Image, Text } from "react-native"
import { images, SIZES, FONTS, COLORS, icons } from "../../constants"

function Header() {
    return (
        <View
            style={{
            }}

        >

        



            {/* =====Profile User Name ==== */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 13,
                marginTop: 5
            }}>
                <Image
                        source={icons.dollar}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.black
                        }}

                    />

                <Text style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: COLORS.black,
                    marginLeft:-3
                }}>
                540
                </Text>
                <Text style={{
                    fontSize: 11,
                    fontWeight: '600',
                    color: COLORS.black,
                    marginTop:4,
                    marginLeft:7
                }}>
                Total
                </Text>

  
            </View>

        </View>
    )
}

export default Header