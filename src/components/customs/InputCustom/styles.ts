import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  inputContainer: {
    backgroundColor: colors.white,
    width: Device.getDeviceWidth() - normalize(48),
    marginLeft: normalize(-10),
    marginVertical: normalize(3),
  },
  inputBlur: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey0,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.blackDefault,
    letterSpacing: normalize(0.2),
    paddingStart: normalize(10),
  },
  inputFocus: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.primary,
    letterSpacing: normalize(0.2),
    paddingStart: normalize(10),
  },
  placeHolder: {
    color: colors.grey5,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  leftIcon: {
    color: colors.primary,
  },
}));

export default useStyles;
