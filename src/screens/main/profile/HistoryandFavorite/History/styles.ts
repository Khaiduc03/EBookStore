import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.black,
    fontSize: normalize(30),
  },
}));
export default useStyles;
