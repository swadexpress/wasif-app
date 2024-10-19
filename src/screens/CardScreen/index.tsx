import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, SIZES, dummyData } from '../../constants';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import CardItem from './CardItem';

const MyCard = ({ navigation }) => {
    const [selectedCard, setSelectedCard] = React.useState(null)


    function renderMyCards() {
        return (
            <View>
                {dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCards-${item.id}`}
                            item={item}
                            isSelected={selectedCard && `${selectedCard.key}-${selectedCard.id}` == `MyCard-${item.id}`}

                            onPress={() => {
                                setSelectedCard({ ...item, key: 'MyCard' })
                            }}


                        />



                    )
                })}


            </View>
        )
    }



    return (

        <Wrapper>


            <View
                style={{
                    flex: 1,

                }}
            >


                <SingleImageHeader
                    name={'Payment'}

                />


                <ScrollView

                    showsVerticalScrollIndicator={false}
                    style={{
                        flexGrow: 1,

                    }}

                >

                    <View style={{
                        alignItems: 'center'
                    }}>



                        {/* My Cards */}
                        {renderMyCards()}


                        {/* Add New Card */}
                        <View
                            style={{
                                marginTop: 25,
                                marginBottom: 20
                            }}

                        >
                            <Text
                                style={{
                                    fontWeight: '700',
                                    fontSize: 16,
                                    color: COLORS.black

                                }}

                            >Add New card


                            </Text>

                            {dummyData.allCards.map((item, index) => {
                                return (
                                    <CardItem
                                        key={`NewCard-${item.id}`}
                                        item={item}
                                        isSelected={selectedCard && `${selectedCard.key}-${selectedCard.id}` == `NewCard-${item.id}`}

                                        onPress={() => {
                                            setSelectedCard({ ...item, key: 'NewCard' })
                                        }}


                                    />



                                )
                            })}





                        </View>




                        <TouchableOpacity

                        activeOpacity={0.9}

                            disabled={selectedCard == null}

                            style={{
                               
                                marginTop: 10,
                                marginBottom: 20

                            }}
                            onPress={() => {
                                if (selectedCard?.key == 'NewCard') {
                                    navigation.navigate("AddNewCardScreen", {
                                        selectedCard: selectedCard
                                    })
                                }
                                else {
                                    navigation.navigate("CheckoutScreen", {
                                        selectedCard: selectedCard
                                    })

                                }
                            }}



                        >



                            <LinearGradient
                                style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(80),
                                    height: SIZES.responsiveScreenWidth(8.5),
                                    elevation: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}

                                locations={[0, 1,]}
                                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={90}>

                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.7),
                                    fontWeight: '800',
                                    color: COLORS.primary,
                                    marginHorizontal: 5,

                                    marginTop: 1
                                }}>
                                    {selectedCard ? selectedCard?.key == 'NewCard' ? 'Add' : "Place your Order" : 'Choose a Card'}

                                </Text>

                            </LinearGradient>











                        </TouchableOpacity>



                    </View>
                </ScrollView>




            </View>

        </Wrapper>
    )
}

export default MyCard;