import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
const styles = StyleSheet.create({
  container: {
    width: wp(87),
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
  },
  flagButtonView: {
    width: wp(20),
    height: '100%',
    minWidth: 32,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagButtonExtraWidth: {
    width: wp(20),
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderWidth:1.5,
    borderColor:COLORS.primary
  },
  dropDownImage: {
    height: 14,
    width: 12,
  },
  textContainer: {
    flex: 1,
    // backgroundColor: '#1239',
    // opacity:0.2,
    paddingHorizontal: wp(4),
    paddingVertical: hp(0),
    textAlign: 'left',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    // borderWidth:1,
    // borderColor:COLORS.primary

    borderLeftWidth:1.5,
    borderLeftColor:COLORS.primary




  },
  codeText: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '900',
    color:  COLORS.black,
  },
  numberText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight:'900',
    flex: 1,
  },
});

export default styles;
