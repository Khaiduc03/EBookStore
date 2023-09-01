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
  formContainer: {
    flex: 1,
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
  marginHeader: {
    marginHorizontal: 24,
    marginTop: 26,
  },
  textTitle: {
    fontFamily: 'Urbanist',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 32,
    color: '#212121',
    marginTop: 34,
    marginHorizontal: 24,
    lineHeight: 51.2,
  },
  text1: {
    marginTop: 12,
    marginBottom: 32,
    marginHorizontal: 24,
    color: '#212121',
    fontFamily: 'Urbanist',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25.2,
    letterSpacing: 0.2,
  },
  text2: {
    marginTop: 16,
    marginHorizontal: 24,
    color: '#212121',
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22.4,
    letterSpacing: 0.2,
  },
  textInput: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: '#F89300',
  },
  viewBottom: {
    flex: 0.93,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContinue: {
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: '#F89300',
    shadowColor: 'rgba(248, 147, 0, 0.25)',
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowRadius: 24,
    shadowOpacity: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
  },
  textContinue: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22.4,
    letterSpacing: 0.2,
  },
}));
export default useStyles;
