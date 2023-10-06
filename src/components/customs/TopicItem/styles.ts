import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {},
  imgBackground: {
    justifyContent: 'flex-end',
  },
  textTitle: {
    fontSize: normalize(13),
    color: colors.white,
    fontFamily: fontFamilySetup.bold,
    fontStyle: 'normal',
    lineHeight: normalize(25.6),
  },
  containerProps: {
    marginLeft: normalize(10),
    marginBottom: normalize(16),
  },
}));

export default useStyles;
