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
  viewgido: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.3,
    borderColor: '#ffffff',
    borderRadius: 9,
  },
  viewimage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
}));
export default useStyles;
