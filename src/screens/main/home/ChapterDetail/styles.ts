import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';
import {Device} from '../../../../utils';

const WIDTH = Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },

  skeletonStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
