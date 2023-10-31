import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  avatar: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(50),
  },
  viewAvatarFollow: {
    paddingVertical: normalize(24),
    paddingHorizontal: normalize(24),
    flexDirection: 'row',
  },
  viewFollow: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: normalize(10),
  },
}));
export default useStyles;
