import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: normalize(120),
    height: normalize(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  skeletonStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textTitle: {
    fontSize: normalize(13),
    color: colors.white,
    fontFamily: fontFamilySetup.bold,
    fontStyle: 'normal',
    lineHeight: normalize(25.6),
    position: 'absolute',
    bottom: 0,
    left: normalize(2),
  },
  containerProps: {
    marginLeft: normalize(10),
    marginBottom: normalize(16),
  },
}));

export default useStyles;
