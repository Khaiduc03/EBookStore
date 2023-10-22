import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewButton: {
    paddingVertical: normalize(40),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;
