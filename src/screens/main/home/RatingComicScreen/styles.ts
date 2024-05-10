import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  content: {
    padding: normalize(15),
  },
  footer: {},
}));

export default useStyles;
