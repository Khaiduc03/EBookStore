import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  header: {
    paddingHorizontal: normalize(17),
  },
  image: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(100),
  },
}));

export default useStyles;
