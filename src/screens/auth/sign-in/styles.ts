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
    padding: normalize(24),
  },
  body: {
    flex: 1,
    marginTop: normalize(12),
  },
  viewCA: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImage: {
    width: normalize(30),
    height: normalize(30),
  },
  view2: {
    width: normalize(80),
    height: normalize(49),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: normalize(1),
    borderRadius: normalize(25),
    borderColor: colors.borderColorLogin,
  },
  viewUnderLine: {
    width: normalize(WIDTH * 0.26),
    height: normalize(0.8),
    backgroundColor: colors.grey4,
  },
  textOSIW: {
    width: normalize(WIDTH * 0.3),
    alignSelf: 'center',
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    textAlign: 'center',
    color: colors.grey4,
  },
  title: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(19),
    color: colors.black,
  },
  introduction: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    color: colors.black,
  },
  viewRP: {
    flexDirection: 'row',
    paddingHorizontal: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    marginTop: normalize(32),
  },
  titleInput: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    letterSpacing: normalize(0.2),
    marginTop: normalize(10),
  },
  viewCBFP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(3),
  },
  viewUO: {
    flex: 1,
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewNR: {
    flex: 2,
    marginTop: normalize(20),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  viewBtnGoogle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textNot: {
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.grey4,
    fontFamily: fontFamilySetup.medium,
  },
  textCA: {
    marginLeft: normalize(6),
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.primary,
    fontFamily: fontFamilySetup.bold,
  },
  checkbox: {
    marginTop: normalize(2),
    marginLeft: normalize(-19),
  },
  textCheckbox: {
    marginLeft: normalize(2),
    marginTop: normalize(-2),
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    color: colors.black,
  },
  color: {
    color: colors.primary,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.2),
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  marginOriginal: {
    marginBottom: normalize(-6),
  },
  marginError: {
    marginBottom: normalize(14),
  },
  optionView: {
    alignItems: 'flex-end',
    marginTop: normalize(-12),
  },
  backgroundcolor: {
    color: colors.primary,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: normalize(30),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(24),
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
  viewBtnLogin: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFP: {
    width: 'auto',
    height: normalize(24),
    marginVertical: normalize(15),
  },
  btnSignIn: {
    color: colors.whiteDefault,
  },
  Headers: {
    marginTop: normalize(24),
  },
  backgroundColorsWhite: {
    backgroundColor: colors.whiteDefault,
  },
  buttonText: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.medium,
    letterSpacing: normalize(0.2),
    color: colors.blackDefault,
  },
}));
export default useStyles;
