import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    height: normalize(44),
    paddingLeft: normalize(-20),
    marginBottom: normalize(10),
  },
  containerFocus: {
    width: '100%',
    height: normalize(44),
    paddingLeft: normalize(-20),
    marginBottom: normalize(10),
  },
  inputContainer: {
    borderBottomWidth: normalize(0.5),
    borderColor: colors.grey5,
  },
  inputContainerFocus: {
    borderBottomWidth: normalize(0.5),
    borderColor: colors.primary,
  },
  input: {
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.regular,
    letterSpacing: normalize(0.2),
  },
  placeholderColor: {
    color: colors.black,
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  leftIcon: {
    color: colors.primary,
  },
}));

export default useStyles;
