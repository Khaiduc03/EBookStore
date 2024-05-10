import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
  },
  viewButton: {
    paddingVertical: normalize(40),
    paddingHorizontal: normalize(20),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;
