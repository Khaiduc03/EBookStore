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
    width: 33,
    height: 33,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view2: {
    width: normalize(96),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: normalize(1),
    borderRadius: normalize(25),
    borderColor: '#D5D8DC',
  },
  view3: {
    width: normalize(30),
    marginLeft: normalize(10),
    marginRight: normalize(20),
  },
  view4: {
    width: '30%',
    height: 1,
    marginTop: 20,
    backgroundColor: '#AEB6BF',
  },
  view5: {
    width: '40%',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
    color: colors.black,
  },
  introduction: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    color: colors.black,
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    marginTop: normalize(20),
  },
  titleInput: {
    marginLeft: normalize(10),
    fontSize: normalize(17),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  checkbox: {
    marginLeft: normalize(-10),
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
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
    marginHorizontal: normalize(24),
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
}));
export default useStyles;
