import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/font';

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
  view3: {
    width: normalize(30),
  },
  line: {
    width: '100%',
    height: normalize(0.8),
    marginTop: normalize(10),
    backgroundColor: colors.backgroundViewWidth,
  },
  linehafl: {
    width: '33%',
    height: normalize(0.8),
    marginTop: normalize(10),
    backgroundColor: colors.backgroundViewWidth,
    marginHorizontal: normalize(4),
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
  },
  titleInput: {
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    letterSpacing: normalize(0.2),
    marginTop: normalize(10),
  },
  checkbox: {
    marginLeft: normalize(-20),
  },
  textCheckbox: {
    marginLeft: normalize(2),
    marginTop: normalize(-2),
    fontFamily: fontFamilySetup.thin,
    fontSize: normalize(14),
    color: colors.black,
  },
  color: {
    color: colors.primary,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
    letterSpacing: normalize(0.2),
    borderBottomColor: colors.primary,
    borderBottomWidth: 0.8,
  },
  text: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  optionView: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundcolor: {
    color: colors.primary,
  },
  button: {
    borderRadius: normalize(30),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(24),
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  btnFP: {
    marginVertical: normalize(15),
  },
  btnSignIn: {
    color: colors.whiteDefault,
  },
  Headers: {
    marginTop: normalize(16),
  },
}));
export default useStyles;
