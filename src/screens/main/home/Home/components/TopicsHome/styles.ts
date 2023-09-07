import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  itemTopic: {
    height: Device.getDeviceHeight() * 0.11,
    width: Device.getDeviceWidth() * 0.45,
    marginRight: normalize(10),
  },
}));

export default useStyles;
