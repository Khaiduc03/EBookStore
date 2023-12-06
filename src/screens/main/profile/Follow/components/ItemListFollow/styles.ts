import {makeStyles, normalize} from '@rneui/themed';
import {color} from '@rneui/base';
import {fontFamilySetup} from '../../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container: {
    marginTop: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyle: {
    height: normalize(50),
    width: normalize(50),
    borderRadius: 100,
  },
  name: {
    width: '60%',
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(10),
  },
  textBtn: {
    color: colors.black,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
  },
  textBtnF: {
    color: colors.white,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
  },
  btn: {
    height: normalize(30),
    width: normalize(70),
    backgroundColor: colors.grey6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnF: {
    height: normalize(30),
    width: normalize(70),
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
}));

export default useStyles;
