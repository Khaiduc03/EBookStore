import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../utils';
const HEGHIT = Device.getDeviceHeight();
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  colorSVG: {
    color: colors.black,
  },
}));

export default useStyles;
