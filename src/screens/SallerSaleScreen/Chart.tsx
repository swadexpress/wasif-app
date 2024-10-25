import { Text, View } from "react-native";
import {
    LineChart
} from "react-native-chart-kit";
import { COLORS, SIZES } from "../../constants";


const Chart = ({ }: any) => {

    console.log('dd')
    return (
        <View>
            <Text style={{
                fontSize: SIZES.responsiveScreenFontSize(1.8),
                fontWeight: '800',
                color: COLORS.primary
            }}>Sale Graph</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={SIZES.responsiveScreenWidth(96)} // from react-native
                height={220}
                yAxisLabel="৳"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: COLORS.primary,
                    backgroundGradientFrom: COLORS.lightOrange3,
                    backgroundGradientTo: COLORS.primary4,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: COLORS.primary4
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 10
                }}
            />
        </View>
    )

}

export default Chart