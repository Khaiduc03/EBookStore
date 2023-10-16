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
  viewCenterHeader: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewiconLeft: {
    marginStart: normalize(-8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCenterMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: normalize(70),
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
    color: colors.black,
  },
  rightIcon: {
    color: colors.black,
  },
  centerIcon: {
    color: colors.primary,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
  },
  rightIconRight: {
    marginTop: normalize(6),
  },
  profileImage: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(26),
    left: normalize(20),
  },
  textFullName: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(14),
    left: normalize(28),
  },
  textUserStatus: {
    color: colors.grey4,
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(9),
    left: normalize(28),
  },
}));

export default useStyles;
