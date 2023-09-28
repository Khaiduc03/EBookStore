import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: WIDTH,
    backgroundColor: colors.backgroundChapter,
    position: 'absolute',
    top: 0,
    height: HEIGHT * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
  },

  contentContainer: {flexDirection: 'row', alignItems: 'center'},
  textChapter: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(20),
    color: colors.white,
    marginLeft: normalize(10),
  },
  iconStyle: {
    color: colors.white,
  },
}));

export default useStyles;
