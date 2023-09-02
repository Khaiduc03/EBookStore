import {color} from '@rneui/base';
import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';

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
  marginHeader: {
    marginHorizontal: normalize(24),
    marginTop: normalize(26),
  },
  textTitleFP: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: normalize(32),
    color: colors.black,
    marginTop: normalize(34),
    marginHorizontal: normalize(24),
    lineHeight: normalize(51.2),
  },
  text1: {
    marginTop: normalize(12),
    marginBottom: normalize(32),
    marginHorizontal: normalize(24),
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(18),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: normalize(25.2),
    letterSpacing: normalize(0.2),
  },
  text2: {
    marginTop: normalize(16),
    marginHorizontal: normalize(24),
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  viewCB: {
    marginTop: normalize(10),
    marginLeft: normalize(5),
  },
  checkBox: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(5),
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(10),
  },
  textRM: {
    marginTop: normalize(25),
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  textInput: {
    marginHorizontal: normalize(24),
    borderBottomWidth: normalize(1),
    borderColor: colors.primary,
    fontSize: normalize(30),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewBottom: {
    flex: 0.93,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textCheckbox: {
    fontFamily: 'Urbanist-Regular',
    fontSize: normalize(14),
    fontWeight: '600',
    color: colors.black,
  },
  eye: {
    top: normalize(44),
    right: normalize(25),
    position: 'absolute',
    transform: [{translateY: normalize(16)}],
  },
  btnContinue: {
    marginHorizontal: normalize(24),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(18),
    backgroundColor: colors.primary,
    shadowColor: 'rgba(248, 147, 0, 0.25)',
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
    color: colors.secondary,
    textAlign: 'center',
    fontFamily: 'Urbanist',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
}));
export default useStyles;
