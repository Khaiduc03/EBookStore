import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },

  body: {
    flex: 1,
    padding: normalize(24),
    height: Device.getDeviceHeight(),
  },
  formContainer: {
    flex: normalize(1),
    marginTop: normalize(12),
    backgroundColor: colors.background,
  },
  titleInput: {
    fontSize: normalize(16),
    color: colors.black,
    letterSpacing: normalize(0.2),
    fontFamily: fontFamilySetup.bold,
  },

  checkbox: {
    marginLeft: normalize(-18),
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCheckbox: {
    fontSize: normalize(14),
    color: colors.black,
    fontFamily: fontFamilySetup.regular,
  },
  color: {
    color: colors.primary,
  },
  textNor: {
    fontFamily: fontFamilySetup.regular,
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
    borderWidth: normalize(1),
  },
  bottom: {
    marginBottom: normalize(70),
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  error: {
    color: colors.red,
    fontWeight: 'bold',
  },
  Buttoncolor: {
    backgroundColor: colors.primary,
    width: '100%',
    height: normalize(56),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));

export default useStyles;
