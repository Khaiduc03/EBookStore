import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
  },
  viewButton: {
    height: '30%',
    padding: normalize(24),
  },
  viewCustomerService: {
    paddingVertical: normalize(24),
  },
  viewFacebook: {
    paddingVertical: normalize(70),
  },
  viewWebsite: {
    paddingVertical: normalize(13),
  },
}));
export default useStyles;
