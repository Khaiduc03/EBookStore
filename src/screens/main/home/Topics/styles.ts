import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';
import {makeStyles, normalize} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  imgContainer: {
    height: Device.getDeviceHeight() * 0.12,
    width: Device.getDeviceWidth() * 0.42,
  },
  itemContainer: {
    marginBottom: normalize(15),
  },
}));

export default useStyles;