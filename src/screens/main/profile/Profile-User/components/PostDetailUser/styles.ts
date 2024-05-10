import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
  },
  avatarDummy: {
    width: '100%',
    height: normalize(400),
  },
  viewIcon: {
    flexDirection: 'row',
    paddingHorizontal: normalize(10),
    top: normalize(10),
    justifyContent: 'space-between',
  },
  test1: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(10),
  },
  text: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    paddingVertical: normalize(4),
  },
  viewInformation: {
    paddingHorizontal: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: normalize(0.2),
    borderColor: '#ffffff',
  },
  viewimage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(20),
  },
  avatarUser: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(99),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;
