import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  scrollView: {
    maxWidth: '100%',
    maxHeight: normalize(70),
    padding: normalize(10),
  },
  viewConten: {
    flexDirection: 'row',
    gap: normalize(10),
  },
}));
export default useStyles;
