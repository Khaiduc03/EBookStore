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
    fontSize: normalize(18),
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    paddingBottom: normalize(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: normalize(10),
    paddingRight: normalize(16),
  },
}));

export default useStyles;
