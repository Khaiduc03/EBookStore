import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  viewItem: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT,
  },
  viewRow: {
    flexDirection: 'row',
    paddingVertical: normalize(10),
  },

  scrollViewTitle: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.09),
    borderTopWidth: normalize(0.4),
    paddingVertical: normalize(5),
    borderColor: colors.grey11,
  },
  scrollViewItem: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.9),
    borderTopWidth: normalize(0.4),
  },

  textTitle: {
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
  },
  colorsTextTitleFocus: {
    color: colors.whiteDefault,
  },
  colorsTextTitleBlur: {
    color: colors.primary,
  },

  btnTitle: {
    width: normalize(WIDTH * 0.22),
    height: normalize(HEIGHT * 0.045),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(26),
    borderWidth: 1,
    borderColor: colors.primary,
    marginHorizontal: normalize(6),
  },
  backgroundBtnTitleFocus: {
    backgroundColor: colors.primary,
  },
  backgroundBtnTitleBlur: {
    backgroundColor: colors.whiteDefault,
  },

  viewItem2: {
    paddingVertical: normalize(20),
  },
  btnNextScreen: {
    flexDirection: 'row',
    gap: normalize(10),
    alignItems: 'center',
  },
  avatar: {
    width: normalize(53),
    height: normalize(55),
    borderRadius: normalize(50),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(10),
  },
  viewavt: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(15),
  },
  nameUser: {
    color: colors.black,
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    width: normalize(130),
  },
  numberStar: {
    width: normalize(WIDTH * 0.19),
    height: normalize(HEIGHT * 0.04),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: normalize(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(14),
  },
  numberStarText: {
    fontSize: normalize(16),
    color: colors.primary,
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
  },
  content: {
    paddingHorizontal: normalize(22),
    paddingVertical: normalize(14),
  },
  description: {
    width: normalize(300),
    color: colors.black,
    fontSize: normalize(14),
    fontStyle: 'normal',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: normalize(22),
    gap: normalize(15),
    alignItems: 'center',
  },
  createAt: {
    color: colors.black,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
  },
}));

export default useStyles;
