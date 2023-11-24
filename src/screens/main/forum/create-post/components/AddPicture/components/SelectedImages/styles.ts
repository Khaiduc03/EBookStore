import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(10),
  },
  selectedImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(10),
  },
  imageContainer: {
    width: normalize(100),
    height: normalize(100),
  },
}));

export default useStyles;
