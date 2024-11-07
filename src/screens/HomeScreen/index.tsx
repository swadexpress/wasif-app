import {
    StatusBar
} from 'react-native';
import { images } from '../../constants';

import {
    withCollapsibleContext
} from '@r0b0t3d/react-native-collapsible';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { endpointdajngobackend } from '../../../profileconstants';
import AppStatusBar from '../../components/AppStatusBar';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';
import TinderCard from './TinderCard';

let noticeHeight2 = 75
const noticeHeight = -(noticeHeight2 + StatusBar.currentHeight)



const data = [
    {
        id: 1,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        price:704,
        delivery_time: '10-15',
        name: 'Bikini Set 1 Set Pink Colour / Bikini Bra Pantie Set For Girls And Women / Swim Bikini Dress For Ladies',
        dis: 'Bikini Set 1 Set Pink Colour / Bikini Bra Pantie Set For Girls And Women / Swim Bikini Dress For Ladies',
        image: 'https://img.drz.lazcdn.com/static/bd/p/c510f4d4df5881aea3567d70a50eab72.jpg_720x720q80.jpg',
    },
    {
        id: 2,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        price:504,

        name: '2024 Sexy Lace-up White Pearl Micro Mini Bikini Set in Pink        ',
        dis: 'Bikini Set 1 Set Pink Colour / Bikini Bra Pantie Set For Girls And Women / Swim Bikini Dress For Ladies',

        image: 'https://www.dhresource.com/webp/m/0x0/f2/albu/g20/M00/16/67/rBVaqWGF1nqAXVJiAAhzd03Yg7s448.jpg',
    },
    {
        id: 3,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        price:304,
        delivery_time: '10-15',
        name: "GHXCJ Women's Tie Knot Front Spaghetti Strap High Cut Bikini Set Swimsuit",
        dis: 'Bikini Set 1 Set Pink Colour / Bikini Bra Pantie Set For Girls And Women / Swim Bikini Dress For Ladies',

        image: 'https://m.media-amazon.com/images/I/81wmcUGVt5L.jpg',
    },



]


const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [productData, setProductData] = useState();







    const  handelProductUpload = async () => {

        // axios
        axios
          .get(`${endpointdajngobackend}/home/AllProduct/`)
          .then(res => {

            console.log(res.data)

            setProductData(res.data.data)
            
          })
          .catch(err => {});
      };


      useEffect(()=>{
        handelProductUpload()
      },[0])
    
    

    return (
        <>
            {productData ?

                <Wrapper>

                    <AppStatusBar />


                    <TinderCard data ={productData}/>

                </Wrapper>
                :

                <LoadingScreen />
            }
        </>
    )
}





export default withCollapsibleContext(Home);