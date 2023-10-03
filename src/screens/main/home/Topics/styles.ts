import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  imgContainer: {
    height: Device.getDeviceHeight() * 0.12,
    width: Device.getDeviceWidth() * 0.42,
  },
  itemContainer: {
    marginBottom: normalize(15),
  },
  listTopicContainer: {
    width: '100%',
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
