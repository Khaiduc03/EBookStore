import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
  },
  scrollView: {
    maxWidth: '100%',
    maxHeight: normalize(70),
    padding: normalize(10),
  },
  viewConten: {
    flexDirection: 'row',
    gap: normalize(10),
  },
  viewSearch: {
    paddingHorizontal: normalize(20),
  },
  viewToggleable: {
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(24),
  },
  viewItemBtnSmall: {
    width: '100%',
    height: normalize(90),
    paddingVertical: normalize(10),
  },
}));
export default useStyles;
