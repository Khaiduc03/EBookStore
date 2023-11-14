import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    gap: normalize(20),
  },
}));

export default useStyles;
