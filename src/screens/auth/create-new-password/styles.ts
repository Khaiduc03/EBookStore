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
  text2: {
    marginTop: normalize(16),
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(15),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  checkBox: {
    marginLeft: normalize(-21),
    marginTop: normalize(-10),
  },
  textRM: {
    marginLeft: normalize(-10),
    color: colors.black,
    fontFamily: 'Urbanist',
    fontSize: normalize(13),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(22.4),
    letterSpacing: normalize(0.2),
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewBottom: {
    flex: 0.93,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContinue: {
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
