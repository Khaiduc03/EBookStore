import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(15),
  },
  imgContainer: {
    height: Device.getDeviceHeight() * 0.11,
    width: (WIDTH - 48) / 2,
    marginBottom: normalize(16),
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
}));

export default useStyles;