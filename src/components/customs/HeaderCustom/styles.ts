import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';
import {color} from '@rneui/base';

Device.getDeviceWidth();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    height: Device.getDeviceWithScreen() * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    paddingHorizontal: normalize(24)
  },
  textTitle: {
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(35.2),
    marginStart: normalize(25),
    color: colors.black,
  },
  leftIcon: {
    color: colors.primary,
  },
  rightIcon: {
    color: colors.black,
  },
  rightContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rightIconLeft: {
    marginRight: normalize(10),
  },
}));

export default useStyles;
