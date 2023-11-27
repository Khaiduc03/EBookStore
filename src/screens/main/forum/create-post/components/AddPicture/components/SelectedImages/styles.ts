import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../../../utils';
import {Dimensions} from 'react-native';
import {fontFamilySetup} from '../../../../../../../../utils/font';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const useStyles = makeStyles(({colors}) => ({
  container: {
    marginVertical: normalize(6),
  },
  selectedImage: {
    width: WIDTH,
    height: undefined,
    aspectRatio: WIDTH / HEIGHT,
    backgroundColor: colors.blackDefault,
    resizeMode: 'contain',
    marginBottom: normalize(6),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // viewImagesLengh: {
  //   width: 'auto',
  //   height: normalize(24),
  //   paddingHorizontal: normalize(6),
  //   backgroundColor: colors.blackDefault,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: normalize(26),
  //   borderWidth: normalize(0.6),
  //   borderColor: colors.whiteDefault,
  //   position: 'absolute',
  //   top: normalize(10),
  //   right: normalize(10),
  // },
  // textImagesLengh: {
  //   color: colors.whiteDefault,
  //   fontSize: normalize(12),
  //   fontFamily: fontFamilySetup.bold,
  // },
}));

export default useStyles;
