import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  viewClick: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(15),
  },
  viewDarkMode: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
  },
}));

export default useStyles;
