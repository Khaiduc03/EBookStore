import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flex: 1,
    width: '100%',
    height: '40%',
    backgroundColor: colors.secondary,
  },
  headerIMage: {
    width: '100%',
    height: '100%',
  },
  body: {
    alignItems: 'center',
    padding: normalize(24),
    paddingTop: normalize(10),
    flex: 1,
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(HEIGHT * 0.035),
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },
  colors: {
    color: colors.primary,
  },
  subTitle: {
    fontSize: normalize(HEIGHT * 0.021),
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    fontWeight: '400',
    color: colors.black,
    paddingHorizontal: normalize(WIDTH * 0.05),
  },
  bottom: {
    flex: 1,
    paddingTop: normalize(20),
  },
  button: {
    borderRadius: normalize(99),
    width: normalize(WIDTH * 0.8),
    height: normalize(HEIGHT * 0.06),
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    marginVertical: normalize(HEIGHT * 0.01),
  },
  buttonText: {
    fontSize: normalize(HEIGHT * 0.02),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
  },
  backgroundColors: {
    backgroundColor: colors.primary,
  },
  colorWhite: {
    color: colors.grey0,
  },
  backgroundColorsSecondary: {
    backgroundColor: colors.secondary,
  },
  colorBlack: {
    color: colors.black,
  },
}));

export default usestyles;
