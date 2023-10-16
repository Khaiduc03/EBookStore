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
  view4: {
    width: '35%',
    height: normalize(1),
    marginTop: normalize(20),
    backgroundColor: colors.backgroundViewWidth,
  },
  view5: {
    width: '36%',
    marginHorizontal: normalize(10),
    alignItems: 'center',
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
    marginTop: normalize(9),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    marginTop: normalize(30),
  },
  titleInput: {
    fontSize: normalize(17),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  checkbox: {
    marginTop: normalize(-9),
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
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
  },
  text: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    color: colors.black,
    letterSpacing: normalize(0.2),
    marginTop: normalize(10),
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(14),
    marginHorizontal: normalize(8),
  },
  backgroundcolor: {
    color: colors.primary,
  },
  button: {
    borderRadius: normalize(30),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(24),
    borderWidth: 1,
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  btnFP: {
    height: '20%',
    marginVertical: normalize(10),
  },
  btnSignIn: {
    color: colors.whiteDefault,
  },
}));
export default useStyles;
