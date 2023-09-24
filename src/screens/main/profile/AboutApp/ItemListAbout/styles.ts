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
  viewTextBig: {
    width: '90%',
    height: normalize(90),
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 24,
    borderColor: '#6F6969',
  },
  name: {
    fontSize: normalize(HEIGHT * 0.04),
    letterSpacing: normalize(0.5),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  colorBlack: {
    color: colors.black,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  text: {
    fontSize: normalize(HEIGHT * 0.021),
    letterSpacing: normalize(0.5),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.grey5,
  },
}));
export default useStyles;
