import {
    Text,
    View
} from 'react-native';
import { COLORS, SIZES } from '../../constants';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React from 'react';

// import MultiSlider from 'react-native-multi-slider';


const TowPointSlider = ({ values, min, max, prefix, postfix, onValuesChange }: any) => {

    return (
        <MultiSlider
            values={values}
            sliderLength={SIZES.width * 0.84}
            min={min}

            max={max}
            step={0.5}
            markerOffsetY={15}
            trackStyle={{
                height: 5,
                borderRadius: 10,
                backgroundColor: COLORS.gray
            }}

            selectedStyle={{
                backgroundColor: COLORS.primary
            }}
            minMarkerOverlapDistance={0}

            customMarker={(e) => {

                return (
                    <>
                        {e.currentValue != 0 ?
                            <View style={{

                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>

                                <View style={{
                                    height: SIZES.responsiveScreenWidth(3.4),
                                    width: SIZES.responsiveScreenWidth(3.4),
                                    borderRadius: 3,
                                    marginTop: -SIZES.responsiveScreenWidth(1.5),
                                    borderColor: COLORS.white,
                                    backgroundColor: COLORS.primary,
                                }} />

                                <Text style={{
                                    marginTop: 3,
                                    marginRight: 5,
                                    fontWeight: '700',
                                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                                    color: COLORS.darkGray,
                                    marginHorizontal: 3
                                }}>
                                    {e.currentValue}{postfix}{prefix}
                                </Text>


                            </View>
                            : null

                        }
                    </>
                )

            }}
            onValuesChange={(values) => onValuesChange(values)}
        />



    )



}



export default TowPointSlider;









