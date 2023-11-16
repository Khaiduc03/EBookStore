import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  leftIcon: {
    color: colors.black,
    marginRight: normalize(10),
    fontSize: 28,
  },
  rightLeftIcon: {
    fontSize: 28,
  },
}));

export default useStyles;
