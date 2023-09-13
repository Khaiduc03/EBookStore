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
    paddingVertical: 20,
    flexDirection: 'row',
  },
  viewText: {
    width: '100%',
    right: 45,
    top: 10
  }


}));

export default usestyles;
