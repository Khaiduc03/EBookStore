import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(10),
    borderWidth: normalize(1),
    borderColor: '#ccc',
    borderRadius: normalize(10),
  },
  iconContainer: {
    marginRight: normalize(10),
  },
  contentContainer: {
    flex: normalize(1),
    paddingVertical: normalize(10),
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
  Name: {
    fontSize: normalize(15),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  content: {
    fontSize: normalize(14),
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    paddingVertical: normalize(10),
  },
  line: {
    borderBottomWidth: normalize(0.3),
    width: normalize(250),
    alignItems: 'center',
    borderColor: 'gray',
    paddingVertical: normalize(5),
  },
}));
export default useStyles;
