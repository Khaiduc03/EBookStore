import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewCenter: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewItem: {
    height: normalize(HEIGHT * 0.36),
  },
  imageContainer: {
    borderRadius: normalize(34),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    textAlignVertical: 'auto',
    color: colors.black1,
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(18),
    marginVertical: normalize(9),
  },
  category: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    color: colors.red,
    marginVertical: normalize(2),
  },
}));

export default useStyles;
