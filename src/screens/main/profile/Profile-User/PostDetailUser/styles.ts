import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  avatarDummy: {
    width: '100%',
    height: normalize(400),
  },
  viewIcon: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    top: normalize(10),
    justifyContent: 'space-between',
  },
  test1: {
    padding: 10,
  },
  text: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    paddingVertical: 4,
  },
}));
export default useStyles;
