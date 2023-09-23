import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  dotContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
  },
  dotActive: {
    color: colors.white,
    marginRight: normalize(10),
    fontSize: normalize(18),
  },
  dot: {
    color: colors.grey2,
    marginRight: normalize(10),
    fontSize: normalize(18),
  },
}));

export default useStyles;
