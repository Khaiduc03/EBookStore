import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewButton: {
    paddingVertical: normalize(40),
    paddingHorizontal: normalize(20),
  },
  iconLeftStyle: {
    color: colors.black,
  },
  inputStyle: {
    width: '100%',
    height: normalize(45),
    paddingHorizontal: normalize(15),
    backgroundColor: colors.white,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  countText: {
    alignSelf: 'flex-end',
    marginRight: normalize(20),
    color: colors.black,
  },
}));
export default useStyles;
