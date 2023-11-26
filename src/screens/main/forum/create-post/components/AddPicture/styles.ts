import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  buttonImage: {
    width: normalize(126),
    height: normalize(32),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: normalize(9),
    borderRadius: normalize(6),
    backgroundColor: colors.primary,
    paddingHorizontal: normalize(10),
  },
  textbtnImage: {
    color: colors.black,
    fontSize: normalize(14.4),
    fontFamily: fontFamilySetup.bold,
  },
  icon: {
    color: colors.grey10,
  },
}));

export default useStyles;
