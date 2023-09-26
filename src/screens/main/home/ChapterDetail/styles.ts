import {makeStyles} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  imageStyle: {
    width: WIDTH,
    height: 200,
  },
}));

export default useStyles;
