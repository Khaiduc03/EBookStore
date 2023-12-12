import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  viewLikeComment: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
  viewNumberCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.4,
    paddingVertical: normalize(10),
    borderColor: colors.grey8,
  },
  iconText: {
    flexDirection: 'row',
    gap: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLike: {
    width: normalize(21),
    height: normalize(21),
    borderRadius: normalize(100),
    backgroundColor: colors.primary,
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerPost: {
    width: normalize(WIDTH),
    height: normalize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  colorIconHeartBlur: {
    color: colors.black,
  },
  colorIconHeartFocus: {
    color: colors.primary,
  },
  textBlur: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
  textFocus: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.primary,
    lineHeight: normalize(21),
  },
}));

export default useStyles;
