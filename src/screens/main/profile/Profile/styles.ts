import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {StyleSheet} from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewAvatar: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
    flexDirection: 'row',
  },
  avatar: {
    width: normalize(64),
    height: normalize(64),
    borderRadius: normalize(50),
  },
  btnMyProfile: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
}));

export default useStyles;
