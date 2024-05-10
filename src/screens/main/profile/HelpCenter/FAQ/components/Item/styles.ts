import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../../../utils';
import { fontFamilySetup } from '../../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  viewItem: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(10),
  },
  scrollViewItem: {
    width: normalize(WIDTH),
    height: normalize(HEIGHT * 0.86),
    paddingHorizontal: normalize(12),
  },
  textTitle: {
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.bold,
  },
  colorsTextTitleFocus: {
    color: colors.whiteDefault,
  },
  colorsTextTitleBlur: {
    color: colors.primary,
  },
  btnTitle: {
    width: normalize(WIDTH * 0.19),
    height: normalize(HEIGHT * 0.046),
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
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.bold,
  },
  viewText: {
    paddingVertical: normalize(16),
  },
  viewItem2: {
    paddingVertical: normalize(20),
  },
  viewSearch: {
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(20),
  },
}));

export default useStyles;
