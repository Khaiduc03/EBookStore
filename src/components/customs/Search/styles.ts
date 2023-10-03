import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fontFamilySetup} from '../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#F89300',
    height: normalize(56),
    borderRadius: 16,
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: normalize(18),
    lineHeight: normalize(20),
    fontFamily: fontFamilySetup.medium,
    color: colors.black,
    marginLeft: normalize(5),
  },
  backGroundInputNoFocus: {
    backgroundColor: colors.input1,
    borderWidth: 0,
  },
  backGroundInputFocus: {
    backgroundColor: colors.input2,
    borderWidth: 1,
  },
  clearIcon: {
    color: colors.primary,
  },
  cancelIcon: {
    color: colors.black,
  },
}));

export default useStyles;
