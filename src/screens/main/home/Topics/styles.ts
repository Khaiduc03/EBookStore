import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(15),
    color: colors.white,
    position: 'absolute',
    bottom: normalize(5),
    left: normalize(10),
  },
  imgContainer: {
    height: Device.getDeviceHeight() * 0.11,
    width: (WIDTH - normalize(48)) / 2,
    marginBottom: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    marginBottom: normalize(15),
  },
  listTopicContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: normalize(10),
  },
  leftIcon: {
    color: colors.black,
    marginRight: normalize(10),
    fontSize: 28,
  },
  rightLeftIcon: {
    fontSize: 28,
  },
  columnStyle: {
    gap: normalize(16),
  },
}));

export default useStyles;
