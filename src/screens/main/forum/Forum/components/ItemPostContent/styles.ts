import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  description: {
    padding: normalize(10),
    marginLeft: normalize(3),
  },
  textDescription: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
  },
    imageContainer: {
    position: 'relative',
  },
    viewImagesLength: {
    width: normalize(46),
    height: normalize(24),
    backgroundColor: colors.blackDefault,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(26),
    borderWidth: normalize(0.6),
    borderColor: colors.whiteDefault,
    position: 'absolute',
    top: normalize(10),
    right: normalize(10),
  },
  textImagesLength: {
    color: colors.whiteDefault,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.bold,
  },
    viewIconClose: {
    position: 'absolute',
    top: normalize(10),
    right: normalize(10),
    zIndex: normalize(1000),
    alignItems: 'flex-end',
  },
  iconClose: {
    position: 'relative',
  },
  colorIconClose: {
    color: colors.primary,
  },
    viewModalImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black1,
  },
}));

export default useStyles;
