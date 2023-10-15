import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  inputContainer: {
    width: '100%',
    height: normalize(50),
    backgroundColor: colors.white,
    marginBottom: normalize(10),
    borderBottomWidth: normalize(0.5),
    borderColor: colors.grey5,
  },
  inputContainerFocus: {
    width: '100%',
    height: normalize(50),
    backgroundColor: colors.white,
    marginBottom: normalize(10),
    borderColor: colors.white,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
  },
  inputFocus: {
    width: '100%',
    borderBottomWidth: normalize(0.5),
    borderBottomColor: colors.primary,
    fontSize: normalize(15),
    fontFamily: fontFamilySetup.regular,
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  placeHolder: {
    color: colors.grey5,
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
