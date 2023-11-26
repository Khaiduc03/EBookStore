import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  buttonSelect: {
    backgroundColor: colors.primary,
    width: normalize(130),
    height: normalize(32),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(6),
  },
  dropdownStyle: {
    borderRadius: normalize(0),
  },
  viewbackgroundColor: {
    backgroundColor: colors.grey6,
  },
  iconleft: {
    position: 'absolute',
    right: normalize(95),
    top: normalize(4.4),
  },
  textButtonSelect: {
    color: colors.black,
    fontSize: normalize(14.4),
    fontFamily: fontFamilySetup.bold,
  },
  textrowSelect: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
  },
  icon: {
    color: colors.grey10,
  },
}));

export default useStyles;
