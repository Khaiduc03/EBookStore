import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  itemTopic: {
    height: Device.getDeviceHeight() * 0.08,
    width: Device.getDeviceWidth() * 0.35,
    // marginRight: normalize(10),
    // paddingLeft: 10,
  },
  textTitle: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
}));

export default useStyles;
