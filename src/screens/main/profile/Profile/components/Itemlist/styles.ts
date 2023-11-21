import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  line: {
    borderWidth: normalize(0.2),
    borderColor: 'gray',
  },
  viewList: {
    paddingHorizontal: normalize(18),
  },
  textName: {
    color: colors.black,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(20),
    paddingVertical: 10,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  iconList:{
    color: colors.black,
  }
}));

export default useStyles;
