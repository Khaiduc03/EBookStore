import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: normalize(610),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: normalize(3),
    color: 'black',
  },
  dot: {
    margin: normalize(3),
    color: 'white',
  },
  scrollView: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
}));

export default useStyles;
