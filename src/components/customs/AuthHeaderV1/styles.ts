import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';
const HEGHIT = Device.getDeviceHeight();
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: 'blue',
  },
  form: {
    paddingVertical: normalize(24),
  },
  title: {
    fontSize: normalize(29),
    fontWeight: '600',
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
  },
  subTitle: {
    fontSize: normalize(14),
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
    marginTop: normalize(8),
  },
  titleComicverse: {
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
    color: colors.primary,
    marginTop: normalize(8),
  },
  textInput: {
    fontSize: normalize(20),
    fontWeight: '600',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  input: {
    backgroundColor: colors.white,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarStyle: {
    width: normalize(100),
    height: normalize(100),
    backgroundColor: colors.grey5,
  },
  avatarColor: {
    color: colors.black,
  },
}));

export default useStyles;
