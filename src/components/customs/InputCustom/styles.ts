import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';

const useStyles = makeStyles(({colors}) => ({
  inputContainer: {
    backgroundColor: colors.white,
    // borderRadius: normalize(8),
    // borderWidth: 1,

    width: Device.getDeviceWidth() - normalize(48),
    marginLeft: normalize(-10),
    marginVertical: normalize(12),
    // borderBottomColor: colors.grey4,
    // borderColor: colors.grey4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey4,
    fontSize: normalize(16),
    fontWeight: '400',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
    letterSpacing: normalize(0.2),
    // paddingStart: normalize(10),
  },
  placeHolder: {
    color: colors.grey5,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: normalize(30),
    height: normalize(30),
    zIndex: 1000,
  },
  iconLeft: {
    paddingStart: normalize(10),
  },
}));

export default useStyles;
