import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/font';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },
  Headers: {
    marginTop: normalize(24),
    marginBottom: normalize(35),
  },
  body: {
    flex: 1,
    padding: normalize(24),
  },
  marginOriginal: {
    marginBottom: normalize(-6),
  },
  marginError: {
    marginBottom: normalize(14),
  },
  formContainer: {
    flex: 1,
    marginTop: normalize(12),
    backgroundColor: colors.background,
  },
  titleInput: {
    fontSize: normalize(15),
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  viewCBFP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(3),
  },
  checkbox: {
    marginTop: normalize(-12),
    marginLeft: normalize(-19),
  },
  textCheckbox: {
    marginLeft: normalize(2),
    marginTop: normalize(-2),
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    color: colors.black,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    color: colors.primary,
  },
  textNor: {
    fontFamily: 'Urbanist-Regular',
    fontSize: normalize(14),
    fontWeight: '400',
    color: colors.black,
    letterSpacing: normalize(0.2),
    marginTop: normalize(10),
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: normalize(14),
    alignItems: 'center',
  },
  backgroundcolor: {
    color: colors.primary,
  },
  button: {
    borderRadius: normalize(30),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(24),
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  viewBtnLogin: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewUO: {
    flex: 1,
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewUnderLine: {
    width: normalize(WIDTH * 0.26),
    height: normalize(0.8),
    backgroundColor: colors.grey4,
  },
  viewBtnGoogle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textOSIW: {
    width: normalize(WIDTH * 0.3),
    alignSelf: 'center',
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    textAlign: 'center',
    color: colors.grey4,
  },
  backgroundColorsWhite: {
    backgroundColor: colors.whiteDefault,
  },
  buttonGG: {
    width: '100%',
    height: normalize(HEIGHT * 0.058),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(99),
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    marginVertical: normalize(HEIGHT * 0.01),
  },
  buttonText: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.2),
    color: colors.blackDefault,
  },
  viewAR: {
    flex: 2,
    marginTop: normalize(20),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textAhaa: {
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.grey4,
    fontFamily: fontFamilySetup.medium,
  },
  textSih: {
    marginLeft: normalize(6),
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.primary,
    fontFamily: fontFamilySetup.bold,
  },
}));
export default useStyles;
