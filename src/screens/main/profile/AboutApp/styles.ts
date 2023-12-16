import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  viewTextBig: {
    width: '90%',
    height: normalize(90),
    borderBottomWidth: normalize(1),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginStart: normalize(24),
    borderColor: '#6F6969',
  },
  name: {
    fontSize: normalize(34),
    letterSpacing: normalize(1),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.primary,
  },
  colorBlack: {
    color: colors.black,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(18),
  },
  text: {
    fontSize: normalize(21),
    letterSpacing: normalize(0.5),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.grey5,
  },
  iconLeftStyle: {
    color: colors.black,
  },
  listContent: {
    flex: 1,
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(20),
  },
}));
export default useStyles;
