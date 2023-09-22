import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    height: Device.getDeviceWithScreen() * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: colors.white,
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextLeft: {
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: normalize(22),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(8),
    lineHeight: normalize(35.2),
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
    marginRight: normalize(20),
  },
  rightIconRight: {
    marginRight: normalize(10),
  },
  profileImage: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(22),
    left: normalize(20),
  },
  textFullName: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(19),
    left: normalize(28),
  },
  textUserStatus: {
    color: colors.grey4,
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(12),
    left: normalize(28),
  },
}));

export default useStyles;
