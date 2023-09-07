import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  imgBackground: {
    justifyContent: 'flex-end',
  },
  textTitle: {
    fontSize: normalize(16),
    color: colors.white,
    fontFamily: fontFamilySetup.bold,
    fontStyle: 'normal',
    lineHeight: normalize(25.6),
  },
}));

export default useStyles;
