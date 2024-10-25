import { FlatList, Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScalePress from "../../components/ScalePress";
import { COLORS, SIZES, icons } from "../../constants";
const aboutData = [
    {
        name: 'Gross Total',
        image: icons.graph,
        price: 3425,
        percentage: "-30",
        color: COLORS.green
    },
    {
        name: 'Service Free',
        image: icons.coupon,
        price: 3425,
        percentage: "-20",
        color: COLORS.orange
    },
    {
        name: 'Total Orders',
        image: icons.cart,
        price: 3425,
        percentage: "+90",
        color: COLORS.primary4
    },
    {
        name: 'New Orders',
        image: icons.order,
        price: 3425,
        percentage: "+60",
        color: COLORS.green
    },

    {
        name: 'Repeot Orders',
        image: icons.plus,
        price: 3425,
        percentage: "+25",
        color: COLORS.primary4
    },

    {
        name: 'Cancel Orders',
        image: icons.cross,
        price: 3425,
        percentage: "-25",
        color: COLORS.red
    },


]


const GrossSellInformation = ({ onPress, item }: any) => {

    console.log('dd')
    return (
        <FlatList
        horizontal={false}
        numColumns={3}

        data={aboutData}
        keyExtractor={item => `${item.name}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            marginTop: 10,
            marginBottom: 10,

        }}
        renderItem={({ item, index }:any) => (
            <ScalePress

            style={{
                // justifyContent: 'center',
                // alignItems: 'center',

            }}

            // onPress={}


        >


            <LinearGradient
                style={{

                    width: SIZES.responsiveScreenWidth(30),
                    height: SIZES.responsiveScreenWidth(20),


                    marginTop: 6,
                    marginLeft: 5,
                    borderRadius: 5,
                    elevation: 2,
                    marginBottom: 1,
                }}

                locations={[0, 1]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={20}>

                <Image

                    source={item.image}

                    style={{
                        width: SIZES.responsiveScreenWidth(5),
                        height: SIZES.responsiveScreenWidth(5),

                        tintColor: item.color,
                        marginLeft: 10,
                        marginTop: 8
                    }}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>





                    <Text style={{
                        color: COLORS.black,
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.9),
                        marginLeft: 4,
                    }}>{item.price}</Text>


                    <Text style={{
                        color: item.color,
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                        marginLeft: 4,
                    }}>{`${item.percentage}%`}</Text>
                </View>
                <Text style={{
                    color: COLORS.black,
                    fontWeight: '700',
                    fontSize: SIZES.responsiveScreenFontSize(1.3),

                    marginLeft: 10,
                    marginTop: 5
                }}>{`${item.name}`}</Text>
            </LinearGradient>
        </ScalePress>
           
        )}
    />
        
    )

}

export default GrossSellInformation