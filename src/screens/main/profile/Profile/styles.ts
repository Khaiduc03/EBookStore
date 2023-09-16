import { makeStyles, normalize } from '@rneui/themed';
import { Device } from '../../../../utils';
import { StyleSheet } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
  },
  viewCircle: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  viewAvatar: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
    flexDirection: 'row',
  },

  ViewClick: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(15)
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: normalize(50),
  },
  ViewText: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  }
}));

export default usestyles;
