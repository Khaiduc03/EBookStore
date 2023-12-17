import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../../../../utils/font';
import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({ colors }) => ({
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
  },
}));

export default useStyles;