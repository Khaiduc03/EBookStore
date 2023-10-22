import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {fontFamilySetup} from '../../../../utils/font';

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
  text2: {
    marginTop: normalize(8),
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  checkbox: {
    marginTop: normalize(10),
    marginLeft: normalize(-20),
  },
  textCheckbox: {
    marginLeft: normalize(2),
    marginTop: normalize(-2),
    fontFamily: fontFamilySetup.thin,
    fontSize: normalize(14),
    color: colors.black,
  },
  textRM: {
    marginLeft: normalize(-10),
    marginTop: normalize(16),
    color: colors.black,
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(13),
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewBottom: {
    flex: normalize(0.93),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContinue: {
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
    fontFamily: fontFamilySetup.bold,
    textAlign: 'center',
    fontSize: normalize(16),
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  iconLeftStyle: {
    color: colors.black,
  },
}));
export default useStyles;
