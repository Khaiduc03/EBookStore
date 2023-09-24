import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerButtonBig: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonBig: {
    width: normalize(360),
    height: normalize(65),
    borderRadius: 20,
    backgroundColor: '#FEF4E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtButtonBig: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 0.12,
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
  },
  ButtonSmall: {
    width: normalize(100),
    height: normalize(45),
    borderRadius: 10,
    backgroundColor: '#f89300',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
  },
  txtButtonSmall: {
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  viewButtonSmall: {
    marginStart: 10,
  },
  ButtonService: {
    width: normalize(300),
    height: normalize(50),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderWidth: 0.5,
    backgroundColor: '#F4E4CC',
  },
  name: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
    marginStart: 20,
    color: 'black',
  },
  ButtonMeta: {
    width: normalize(300),
    height: normalize(50),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderWidth: 0.5,
    backgroundColor: '#DCF7F7',
  },
  ButtonGoogle: {
    width: normalize(300),
    height: normalize(50),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    borderWidth: 0.5,
    backgroundColor: '#FFF2F3',
  },
}));
export default useStyles;
