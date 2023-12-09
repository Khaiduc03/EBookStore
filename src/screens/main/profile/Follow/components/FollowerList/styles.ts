import {makeStyles, normalize} from '@rneui/themed';
import {color} from '@rneui/base';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: normalize(10),
  },
}));

export default useStyles;
