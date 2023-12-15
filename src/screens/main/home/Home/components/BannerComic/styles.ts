import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  dotContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
  },
  skeletonStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  dotActive: {
    color: colors.white,
    marginRight: normalize(10),
    fontSize: normalize(15),
  },
  dot: {
    color: colors.grey2,
    marginRight: normalize(10),
    fontSize: normalize(15),
  },
}));

export default useStyles;
