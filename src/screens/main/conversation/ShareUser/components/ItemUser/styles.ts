import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {},
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: normalize(16),
    marginVertical: normalize(8),
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  avatarStyle: {
    marginRight: normalize(10),
  },
  status_offline: {
    backgroundColor: colors.grey5,
  },
  status_online: {
    backgroundColor: colors.green,
  },
  status: {
    borderRadius: normalize(100),
    width: normalize(12),
    height: normalize(12),

    position: 'absolute',
    bottom: normalize(2),
    right: normalize(2),
    borderColor: colors.white,
    borderWidth: normalize(3),
  },
  textStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: normalize(14),
    color: colors.black,
  },
}));

export default useStyles;
