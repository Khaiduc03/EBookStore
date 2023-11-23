import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../utils';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  iconLeftStyle: {
    color: colors.black,
  },

  selectedImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(10),
  },
  imageContainer: {
    width: normalize(100),
    height: normalize(100),
  },
  imageText: {},
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(10),
  },
}));

export default useStyles;
