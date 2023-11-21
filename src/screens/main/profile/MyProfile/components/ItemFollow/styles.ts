import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  avatar: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(50),
  },
  viewAvatarFollow: {
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(15),
    flexDirection: 'row',
  },
  viewAll: {
    width: '90%',
    flexDirection: 'row',
  },
  viewFollow: {
    width: '27%',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: normalize(5),
  },
  countNumber: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  text: {
    color: colors.black2,
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
}));
export default useStyles;
