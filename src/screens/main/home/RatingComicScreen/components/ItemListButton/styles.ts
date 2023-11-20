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
  },
  viewRow: {
    flexDirection: 'row',
    paddingVertical: normalize(10),
  },

  scrollViewTitle: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.09),
  },
  scrollViewItem: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.9),
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
    width: normalize(WIDTH * 0.25),
    height: normalize(HEIGHT * 0.06),
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
  textApp: {
    color: colors.primary,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
  },
  viewText: {
    paddingVertical: normalize(5),
  },
  viewItem2: {
    paddingVertical: normalize(20),
  },
  viewAll: {
    gap: normalize(20),
  },
  viewSearch: {
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(20),
  },
  btnNextScreen: {
    flexDirection: 'row',
    gap: normalize(10),
    alignItems: 'center',
  },
}));

export default useStyles;
