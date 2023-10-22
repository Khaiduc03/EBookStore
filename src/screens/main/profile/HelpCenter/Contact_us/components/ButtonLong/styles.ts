import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerButtonBig: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  ButtonService: {
    width: normalize(300),
    height: normalize(50),
    borderRadius: normalize(15),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    borderWidth: normalize(0.5),
    backgroundColor: '#F4E4CC',
  },
  name: {
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
    marginStart: normalize(20),
    color: colors.black1,
  },
  ButtonMeta: {
    width: normalize(300),
    height: normalize(50),
    borderRadius: normalize(15),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    borderWidth: normalize(0.5),
    backgroundColor: '#DCF7F7',
  },
  ButtonGoogle: {
    width: normalize(300),
    height: normalize(50),
    borderRadius: normalize(15),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    borderWidth: normalize(0.5),
    backgroundColor: '#D2E3FC',
  },
}));
export default useStyles;
