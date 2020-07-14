import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from "react-native-chart-kit";

import { styles } from '../style';

const screenWidth = Dimensions.get("window").width;

const UserChart = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const data = [
        {
            name: "Absent",
            population: 17,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Present",
            population: 83,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },


    ];
    return (
        <View style={styles.groupIcon}>
            <View style={styles.test}>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>

        </View>
    )
}
export default UserChart