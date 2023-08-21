import {normalize, makeStyles} from '@rneui/themed';
import {Device} from '../../../utils';

Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: normalize(12),
    height: Device.getDeviceWithScreen()*0.04
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },

  iconRight: {
    right: 0,
    position: 'absolute',
  },
  iconleft: {
    left: 0,
    position: 'absolute',
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorBlack: {
    color: colors.black,
  },
  caseIcon: {
    flex: 1,
    alignItems: 'center',
  },
}));

export default useStyles;
