import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "../components/ResponsiveDimensions";

export const COLORS = {
    primary: "#19253D", //orange
    primary2: "#FFBC01", //orange
    primary3: "#191C25", //orange
    primary4: "#0ecba1", //orangebackgroundColor
    linearGradientPrimary: "#FDC4A2", //orangebackgroundColor
    linearGradientPrimary2: "#FFC8EC", //orangebackgroundColor
    linearGradientSecondary: "#FFC8EC", //orangebackgroundColor
    linearGradientSecondary2: "#FFC8EC", //orangebackgroundColor
    backgroundColor:'#ffffff',
    backgroundColor2:'#ffffff',
    orange: "#FFA133",
    lightOrange: "#FFA133",
    lightOrange2: "#FDDED4",
    lightOrange3: '#FFD9AD',
    green: "#37BD6A",
    blue: '#0064C0',
    blue2: '#28aeff',
    red: '#FC2626', // Red
    red2: '#d5151d',
    yellow: '#ffde17',
    borderColor: '#4f6e',
    lightGreen: '#81C9AD',
    darkGray: "#525C67",
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    lightYellow: '#FCF3D7',
    darkYellow: '#F4E9C8',
    lightRed: '#FFE0DE',
    darkRed: '#F9D2D1',
    lightBlue: '#D7DFFF',
    darkBlue: '#D3D8FC',
    lightBlue2: '#E9F6FF',
    white2: "#FBFBFB",
    white: '#FFFFFF',
    black: "#000000",
    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
