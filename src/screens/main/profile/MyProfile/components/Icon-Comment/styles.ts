import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    paddingVertical: normalize(10),
    backgroundColor: colors.background,
  },
  avatarDummy: {
    width: '100%',
    height: normalize(400),
  },
  viewIcon: {
    paddingTop: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
  },
}));
export default useStyles;
