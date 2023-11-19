import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.background,
    marginTop: normalize(20),
  },
  ItemContainer: {
    width: WIDTH,
  },
  titleStyle: {
    paddingLeft: normalize(10),
    fontSize: normalize(18),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    paddingBottom: normalize(10),
  },
}));

export default useStyles;
