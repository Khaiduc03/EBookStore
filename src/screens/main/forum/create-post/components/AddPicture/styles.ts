import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  buttonImage: {
    width: normalize(140),
    height: normalize(32),
    borderRadius: normalize(6),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: normalize(10),
  },
  textbtnImage: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
  },
}));

export default useStyles;
