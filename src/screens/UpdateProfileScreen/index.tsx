import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../../constants';
import {
    ScrollView,
    Text,
    View,
    Image
} from 'react-native';

import CardItem from '../../components/CardItem'
import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import { Header } from '@react-navigation/stack';
import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import React from 'react';
import TextButton from '../../components/TextButton'
import Rating from '../../components/Rating'
import TextIconButton from '../../components/TextIconButton'
import FromInput from '../../components/FromInput'
import LineDivider from '../../components/LineDivider'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import SingleImageHeader from '../../components/SingleImageHeader';

const MyAccountUpdate = ({ navigation }) => {
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [ratings, setRatings] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [idCard, setIdCard] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");

    const { navigate } = useNavigation();


    function renderProfile() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 15
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


            </View>
        )
    }

    function renderBodyTop() {
        return (
            <View >

                <View
                    style={{
                        paddingHorizontal: 10,
                        marginTop: SIZES.base,
                        borderRadius: 10,
                        backgroundColor: COLORS.lightGray2,


                    }}

                >

                    <FromInput
                        label="Name"
                        autocomplete='email'
                        containerStyle={{ marginTop: 10 }}
                        inputContentStyle={{
                            paddingHorizontal: 0

                        }}

                        inputStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
                        onChange={(value) => {
                            setName(value)
                        }}
                    />

                    <FromInput
                        label="Phone"
                        containerStyle={{ marginTop: 10 }}

                        autocomplete='email'
                        inputContentStyle={{
                            paddingHorizontal: 0

                        }}
                        height={50}
                        inputStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
                        onChange={(value) => {
                            setPhone(value)
                        }}
                    />





                    <FromInput
                        label="ID Card "
                        containerStyle={{ marginTop: 10 }}

                        autocomplete='email'
                        inputContentStyle={{
                            paddingHorizontal: 0

                        }}
                        height={50}
                        inputStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
                        onChange={(value) => {
                            setPhone(value)
                        }}
                    />





                    <FromInput
                        label="Date of Birth "
                        containerStyle={{ marginTop: 10 }}

                        autocomplete='email'
                        inputContentStyle={{
                            paddingHorizontal: 0

                        }}
                        height={50}
                        inputStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
                        onChange={(value) => {
                            setPhone(value)
                        }}
                    />





                    <FromInput
                        label="Email"
                        containerStyle={{ marginTop: 10 }}

                        autocomplete='email'
                        inputContentStyle={{
                            paddingHorizontal: 0

                        }}
                        height={50}
                        inputStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
                        onChange={(value) => {
                            setEmail(value)
                        }}
                    />






                    <FromInput
                        label="Address"
                        containerStyle={{ marginTop: 10 }}

                        autocomplete='email'
                        inputContentStyle={{
                            paddingHorizontal: 0

                        }}
                        height={50}
                        inputStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
                        onChange={(value) => {
                            setAddress(value)
                        }}
                    />

                    <View style={{ marginBottom: 20 }} />














                </View>


            </View>


        )
    }




    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}

            >
                <TextButton

                    buttonContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                    }}
                    label={'Save'}

                    onPress={() => {

                        navigate('Home')

                    }}


                />


            </View>


        )
    }




    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >


            <SingleImageHeader
                name={'Check Out'}

            />

            <ScrollView
                style={{
                    flexGrow: 1,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}

            >

                {/* My Cards */}
                {renderProfile()}
                {renderBodyTop()}
                <View style={{ marginBottom: 50 }} />



                {/* Add New Card */}
                {/* {renderComment()} */}





            </ScrollView>

            {renderFooter()}

        </View>
    )
}

export default MyAccountUpdate;