import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../../../../utils/font';
import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    marginTop: normalize(25),
  },
  avatarStyle: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: 100,
    marginRight: normalize(10),
  },
  content: {
    flex: 1,
  },
  nameStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
  },
  day: {
    fontSize: normalize(10),
    fontFamily: fontFamilySetup.medium,
    color: '#9E9E9E',
    paddingVertical: normalize(5),
  },
  commentStyle: {
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.regular,
    color: colors.nameComment,
    lineHeight: normalize(18),
  },
  repContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(8),
  },
  like: {
    width: normalize(WIDTH * 0.2),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(40),
  },
  rep: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: normalize(5),
  },
  numberRepStyle: {
    paddingLeft: normalize(5),
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    color: '#A5A6AA',
  },
  iconStyleFocus: {
    color: colors.primary,
  },
  iconStyleBlur: {
    color: '#A5A6AA',
  },
  viewItemBtn: {
    width: normalize(WIDTH / 2 - 20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
