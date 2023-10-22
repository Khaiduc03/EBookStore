import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  ButtonSmall: {
    width: normalize(100),
    height: normalize(45),
    borderRadius: normalize(10),
    backgroundColor: '#f89300',
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(10),
    borderWidth: normalize(0.5),
    marginBottom: normalize(10),
  },
  txtButtonSmall: {
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    fontSize: normalize(15),
    fontWeight: '700',
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  viewButtonSmall: {
    marginStart: normalize(10),
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
    color: 'black',
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
    backgroundColor: '#FFF2F3',
  },
}));
export default useStyles;
