import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  name: {
    color: colors.black,
    fontSize: normalize(20),
    fontFamily: fontFamilySetup.bold,
    paddingVertical: normalize(20),
  },
  textInput: {
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
  },
  viewinput: {
    backgroundColor: colors.grey7,
    height: normalize(55),
    borderWidth: normalize(0.3),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
  },
  viewinputbig: {
    backgroundColor: colors.grey7,
    height: normalize(149),
    borderWidth: normalize(0.3),
    borderRadius: normalize(12),
    paddingHorizontal: normalize(10),
    borderColor: colors.black,
  },
  viewbtn: {
    padding: normalize(20),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;
