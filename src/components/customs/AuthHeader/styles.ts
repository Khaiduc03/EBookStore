import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
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
    fontSize: normalize(23),
    fontWeight: '600',
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
  },
  subTitle: {
    fontSize: normalize(14),
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
    marginTop: normalize(4),
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
    backgroundColor: colors.grey5,
    borderRadius: normalize(50),
  },
}));

export default useStyles;
