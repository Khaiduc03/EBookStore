import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    paddingHorizontal: normalize(12),
  },
  viewItem: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewRowCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewItemFilters: {
    width: '100%',
    height: '80%',
  },
  colorIcon: {
    color: colors.black,
  },
  scrollViewItem: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.9),
  },
  backgroundColorCB: {
    backgroundColor: colors.whiteDefault,
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
  text: {
    color: colors.grey3,
    fontSize: normalize(9),
    fontFamily: fontFamilySetup.medium,
  },
  btnTitle: {
    width: normalize(WIDTH * 0.19),
    height: normalize(HEIGHT * 0.039),
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
  viewItemSort: {
    marginTop: normalize(30),
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.46),
    backgroundColor: colors.white,
    borderRadius: normalize(19),
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  textHeaderItem: {
    color: colors.blackDefault,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(WIDTH * 0.044),
    marginVertical: normalize(12),
  },
  textItem: {
    left: normalize(WIDTH * 0.001),
    padding: normalize(12),
    color: colors.blackDefault,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.bold,
  },
  viewUnderline: {
    width: normalize(WIDTH * 0.83),
    height: normalize(0.8),
    backgroundColor: colors.grey6,
    marginHorizontal: normalize(12),
  },
  viewItemPrice: {
    marginTop: normalize(30),
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.2),
    backgroundColor: colors.white,
    borderRadius: normalize(19),
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  viewItemRating: {
    marginTop: normalize(30),
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.26),
    backgroundColor: colors.white,
    borderRadius: normalize(19),
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  viewItemGenre: {
    marginTop: normalize(30),
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.86),
    backgroundColor: colors.white,
    borderRadius: normalize(19),
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  viewBtn: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.09),
    marginTop: normalize(13),
    paddingVertical: normalize(23),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    width: normalize(WIDTH * 0.39),
    height: normalize(HEIGHT * 0.06),
    borderRadius: normalize(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColorBtnReset: {
    backgroundColor: colors.divider,
  },
  backgroundColorBtnApply: {
    backgroundColor: colors.primary,
  },
  textBtnReset: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(13.9),
    color: colors.primary,
  },
  textBtnApply: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(13.9),
    color: colors.whiteDefault,
  },
}));

export default useStyles;
