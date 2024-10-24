import { AnimationObject } from 'lottie-react-native';
import { COLORS, SIZES, animations } from '../../constants';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
  backgroundColor2: string;
  width: number;
  height: number;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: animations.logo,
    text: `
    Hungry? BiteDash is here to satisfy your cravings, no matter the time or place. Whether you’re in the mood for pizza, sushi, burgers, or something fresh and healthy, we bring your favorite meals straight to your door—hot, fresh, and ready to enjoy.
    `,
    textColor: COLORS.primary,
    // backgroundColor: '#FEC8E0',
    backgroundColor: COLORS.darkRed,
    backgroundColor2: COLORS.lightBlue,
    // backgroundColor: '#CBDFFB',
    // backgroundColor2: '#FEC8E0',
    width:SIZES.responsiveScreenWidth(60),
    height:SIZES.responsiveScreenWidth(60),
  },
  {
    id: 2,
    animation: animations.true_food,
    text: `Explore a world of flavors at your fingertips! With a wide selection of restaurants, food trucks, and hidden gems, Crave helps you discover new places to eat — from your neighborhood to the other side of town.
    
    `,
    textColor: COLORS.primary,
    backgroundColor: '#FEC8E0',
    backgroundColor2: '#FCDF9B',
    width:SIZES.responsiveScreenWidth(70),
    height:SIZES.responsiveScreenWidth(70),

  },
  {
    id: 3,
    animation: animations.serving_catering_food,
    text: `
    Not sure what you’re in the mood for? Let BiteDash help! Explore personalized recommendations, local gems, trending dishes, and curated meal options based on your preferences and past orders.
    `,
    textColor:COLORS.primary,
    backgroundColor: '#FDBFA9',
    backgroundColor2:'#F1726E', 
    width:SIZES.responsiveScreenWidth(70),
    height:SIZES.responsiveScreenWidth(70),

  },
  {
    id: 4,
    animation: animations.loading,
    text: `
    Not sure what you’re in the mood for? Let BiteDash help! Explore personalized recommendations, local gems, trending dishes, and curated meal options based on your preferences and past orders.
    `,
    textColor: COLORS.primary,
    backgroundColor: '#F1726E',
    backgroundColor2: COLORS.lightOrange3,
    width:SIZES.responsiveScreenWidth(70),
    height:SIZES.responsiveScreenWidth(70),

  },
  {
    id: 5,
    animation: animations.location,
    text: `
    Who doesn’t love a good deal? With BiteDash, enjoy exclusive discounts, daily offers, and special promotions to make your meal even more satisfying.
    `
    ,
    textColor: COLORS.primary,
    backgroundColor: '#F9D2D1', 
    backgroundColor2:'#E57999',
    width:SIZES.responsiveScreenWidth(70),
    height:SIZES.responsiveScreenWidth(70),

  },
  {
    id: 6,
    animation: animations.delivery,
    text: `
    You want it now—and we deliver it now! With real-time tracking, you’ll know exactly when your food is arriving, so you can skip the wait and get back to what matters.
    `,
    textColor: COLORS.primary,
    backgroundColor: '#FEC8E0',
    backgroundColor2: COLORS.darkYellow,
    width:SIZES.responsiveScreenWidth(70),
    height:SIZES.responsiveScreenWidth(70),

  },
];

export default data;