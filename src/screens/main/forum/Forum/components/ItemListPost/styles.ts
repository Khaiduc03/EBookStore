import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  content: {
    width: WIDTH,
    height: 'auto',
    justifyContent: 'space-between',
    borderTopWidth: normalize(3),
    borderColor: colors.grey9,
    paddingTop: normalize(13),
    paddingHorizontal: normalize(WIDTH * 0.024),
    backgroundColor: colors.background,
  },
    header: {
    width: '100%',
    height: normalize(66),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },
    image: {
    width: normalize(38),
    height: normalize(38),
    borderRadius: normalize(50),
  },
    buttonHeader: {
    width: normalize(WIDTH * 0.66),
    height: normalize(WIDTH * 0.09),
    borderWidth: normalize(0.4),
    borderRadius: normalize(50),
    borderColor: colors.grey4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(16),
  },
    textButtonHeader: {
    color: colors.black,
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.regular,
  },
}));

export default useStyles;
