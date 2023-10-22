import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    padding: normalize(24),
  },
  Headers: {
    marginTop: normalize(24),
    marginBottom: normalize(10),
  },
  formContainer: {
    flex: 1,
  },
  viewBtnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: normalize(30),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(24),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  textOTP: {
    width: normalize(46),
    height: normalize(46),
    borderWidth: normalize(1.5),
    borderColor: colors.black,
    borderRadius: normalize(6),
    margin: normalize(14),
    textAlign: 'center',
    fontSize: normalize(12),
    color: colors.black,
  },
  text3: {
    marginVertical: normalize(16),
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(14),
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  text4: {
    color: colors.black,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  text5: {
    color: colors.primary,
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  textCT: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    letterSpacing: normalize(0.12),
  },
  textinitial: {
    color: colors.black,
  },
  text6: {
    color: colors.black,
  },
  viewBottom: {
    flex: normalize(0.93),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContinue: {
    marginHorizontal: normalize(24),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(18),
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: {
      width: normalize(4),
      height: normalize(8),
    },
    shadowRadius: normalize(24),
    shadowOpacity: normalize(1),
    borderRadius: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(10),
    alignSelf: 'stretch',
  },
  textContinue: {
    color: colors.white,
    textAlign: 'center',
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
}));
export default useStyles;
