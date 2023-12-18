import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    width: normalize(WIDTH),
    height: normalize(HEIGHT),
    backgroundColor: colors.background,
  },
  body: {
    paddingHorizontal: normalize(12),
  },
}));
export default useStyles;
