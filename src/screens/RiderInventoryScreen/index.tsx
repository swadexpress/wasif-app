import {
    ScrollView,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import SingleImageHeaderWithoutBack from '../../components/SingleImageHeaderWithoutBack';
import Wrapper from '../../components/Wrapper';
import GrossSellInformation from '../SallerSaleScreen/GrossSellInformation';
import MonthlyRevenueProgressView from '../SallerSaleScreen/MonthlyRevenueProgressView';
import Chart from './Chart';
import Header from './Header';



const SallerSaleScreen = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");

    const [selectedShowDetails, setSelectedShowDetails] = useState('All Product');

    const { navigate } = useNavigation();

    const navigation = useNavigation()














    return (
        <Wrapper>
            <View
                style={{
                    flex: 1,
                    // backgroundColor:COLORS.white

                }}
            >
                <SingleImageHeaderWithoutBack
                    name={'Sale Details'}

                />

                <ScrollView
                    style={{
                        flexGrow: 1,
                        paddingHorizontal: 10,
                    }}

                >

                    <Header />

                    <GrossSellInformation />
                    <Chart />


                    {/* ========== Weekly prograse bar===== */}
                    <MonthlyRevenueProgressView />

                </ScrollView>

            </View>
        </Wrapper>
    )
}

export default SallerSaleScreen;