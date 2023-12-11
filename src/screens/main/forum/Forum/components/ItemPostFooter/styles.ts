import { makeStyles, normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../../../../../utils/font';
import { Device } from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  viewRow: {
    flexDirection: 'row',
  },
  imageTitle: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(50),
  },
  viewTextPost: {
    width: '60%',
    marginStart: normalize(12),
    justifyContent: 'center',
  },
  name: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(21),
  },
  viewImageText: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewCreateAt: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: normalize(WIDTH * 0.01),
  },
  createAt: {
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.regular,
    color: '#666666',
    marginEnd: normalize(3),
  },
  leftIcon: {
    left: normalize(WIDTH * 0.16),
  },
  textTitleAlert: {
    color: colors.alertTextTitleMessage,
    fontSize: normalize(19),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    textAlign: 'center',
  },
  textMessageAlert: {
    color: colors.alertTextTitleMessage,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    textAlign: 'center',
  },
  textCancelAlert: {
    color: colors.whiteDefault,
    fontSize: normalize(11),
    fontFamily: fontFamilySetup.regular,
    lineHeight: normalize(21),
    textAlign: 'center',
    marginHorizontal: normalize(10),
  },
  textConfirmAlert: {
    color: colors.whiteDefault,
    fontSize: normalize(11),
    fontFamily: fontFamilySetup.regular,
    lineHeight: normalize(21),
    textAlign: 'center',
    marginHorizontal: normalize(10),
  },
  contentContainerStyle: {
    backgroundColor: colors.black1,
  }
}));

export default useStyles;
