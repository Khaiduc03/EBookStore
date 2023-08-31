import { normalize, makeStyles } from '@rneui/themed';
import { Device } from '../../../utils';

Device.getDeviceWidth();
const useStyles = makeStyles(({ colors }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    height: Device.getDeviceWithScreen() * 0.1,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),

  },
  iconRight: {
    right: 0,
    position: 'absolute',
    marginHorizontal: normalize(24),
  },
  iconleft: {

    marginHorizontal: normalize(24),

  },
  iconAdd: {
    right: 45,
    position: 'absolute',
    marginHorizontal: normalize(24),
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorBlack: {
    color: colors.black,
  },
  caseIcon: {
    flex: 1,
    alignItems: 'center',
  },
  NameProfile: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  Title: {
    color: '#000000',
    fontFamily: 'Urbanist',
    fontSize: 22,
    fontWeight: '900',
    lineHeight: 21,
    letterSpacing: 0.12,
    marginStart: 10,
    marginTop: 10
  },

}));

export default useStyles;
