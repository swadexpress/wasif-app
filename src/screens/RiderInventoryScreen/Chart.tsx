import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { COLORS, SIZES, icons, images } from "../../constants"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const Chart = ({ }: any) => {

    console.log('dd')
    return (
        <View>
            <Text style={{
                fontSize: 14,
                fontWeight: '700',
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
                width={SIZES.width * 0.96} // from react-native
                height={220}
                yAxisLabel="$"
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
                    borderRadius: 16
                }}
            />
        </View>
    )

}

export default Chart