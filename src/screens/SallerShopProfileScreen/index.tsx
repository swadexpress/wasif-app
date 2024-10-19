import { COLORS, SIZES, dummyData, icons, images } from '../../constants';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AllProducts from './AllProducts';
import Review from './Review';
import AboutUs from './AboutUs';
import ProfileValueTop from '../ProfileScreen/ProfileValueTop';
import Wrapper from '../../components/Wrapper';
import Header from '../ProfileScreen/Header';
import ProfileHeader from '../ProfileScreen/ProfileHeader';

const aboutData = [
    {
        name: 'All Product'
    },
    {
        name: 'About us'
    },
    {
        name: 'Review'
    },
    {
        name: 'Map'
    },

]

const MyAccount = () => {

    const [selectedShowDetails, setSelectedShowDetails] = useState('Products');

    const navigation = useNavigation<any>()




    return (
        <Wrapper>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Header name={'Shop Profile'} />


                <ScrollView
                    style={{
                        flexGrow: 1,

                    }}

                >
                    <View style={{
                        alignItems: 'center',
                        marginBottom: 70
                    }}>

                        <ProfileHeader
                            isProfile={true}
                            setSelectedShowDetails={setSelectedShowDetails}
                        />

                        {/* {renderAboutButton()} */}
                        {selectedShowDetails == 'Products' ?
                            <AllProducts />
                            : null
                        }
                        {selectedShowDetails == 'Review' ?
                            <Review />
                            : null
                        }
                        {selectedShowDetails == 'About us' ?
                            <AboutUs />
                            : null
                        }
                    </View>


                </ScrollView>

            </View>
        </Wrapper>
    )
}

export default MyAccount;