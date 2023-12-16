import { makeStyles, normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../../../../../utils/font';
import { Device } from '../../../../../../utils';
import { Dimensions } from 'react-native';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const screenWidth = Dimensions.get('window').width;

const useStyles = makeStyles(({ colors }) => ({
  description: {
    padding: normalize(10),
    paddingBottom: normalize(9),
    marginLeft: normalize(3),
  },
  textDescription: {
    fontSize: normalize(13.9),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    lineHeight: normalize(21),
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
    top: normalize(16),
    right: normalize(16),
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
