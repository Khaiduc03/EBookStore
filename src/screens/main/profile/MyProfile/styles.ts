import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: normalize(1),
    backgroundColor: colors.background,
  },
  nameUser: {
    paddingHorizontal: normalize(24),
  },
  viewExplore: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPost: {
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(20),
    color: colors.black,
  },
  viewMyPost: {
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderColor: '#8a8a8a',
    marginTop: normalize(15),
  },
}));
export default useStyles;
