import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },

  body: {
    flex: normalize(1),
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
    borderWidth: normalize(1),
  },
  bottom: {
    flex: normalize(1),
    justifyContent: 'flex-end',
    marginBottom: normalize(50),
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
    color: 'red',
    fontWeight: 'bold',
  },
  Buttoncolor: {
    backgroundColor: 'red',
    width: '100%',
    height: normalize(56),
  },
}));

export default useStyles;
