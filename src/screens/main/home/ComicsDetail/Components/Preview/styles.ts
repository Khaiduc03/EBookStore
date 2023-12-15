import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../utils/font';
import {Device} from '../../../../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textHeader: {
    marginTop: normalize(10),
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    lineHeight: normalize(35),
  },
  textDescribe: {
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    lineHeight: normalize(22),
    color: colors.black,
    textAlign: 'justify',
  },
  textTitle: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
  },
  content: {
    paddingHorizontal: normalize(10),
  },
}));

export default useStyles;
