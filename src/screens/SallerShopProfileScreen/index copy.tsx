import {
    ScrollView,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Wrapper from '../../components/Wrapper';
import Header from '../ProfileScreen/Header';
import AboutUs from './AboutUs';
import AllProducts from './AllProducts';
import ProfileHeader from './ProfileHeader';
import Review from './Review';



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
                <Header name={'Shop Profiles'} />


                <ScrollView
                   showsVerticalScrollIndicator={false}>
                    <View style={{
                        alignItems: 'center',
                        marginBottom: 70
                    }}>

                        <ProfileHeader
                            isProfile={false}
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