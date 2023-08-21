import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';

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
  formContainer: {
    flex: 1,
    marginTop: normalize(12),
    backgroundColor: colors.background,
  },
  titleInput: {
    fontSize: normalize(15),
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
    letterSpacing: normalize(0.2),
  },

  checkbox: {
    marginLeft: normalize(-18),
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCheckbox: {
    fontFamily: 'Urbanist-Regular',
    fontSize: normalize(14),
    fontWeight: '600',
    color: colors.black,
  },
  color: {
    color: colors.primary,
  },
  textNor: {
    fontFamily: 'Urbanist-Regular',
    fontSize: normalize(14),
    fontWeight: '400',
    color: colors.black,
    letterSpacing: normalize(0.2),
    marginTop: normalize(10),
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: normalize(14),
    alignItems: 'center',
  },
  backgroundcolor: {
    color: colors.primary,
  },
  button: {
    borderRadius: normalize(30),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(24),
    borderWidth: 1,
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  errorInput: {
    borderColor: 'red',
  },
}));
export default useStyles;
