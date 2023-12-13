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
  nameContainer: {width: '60%'},
  imgStyle: {
    height: normalize(50),
    width: normalize(50),
    borderRadius: 100,
  },
  name: {
    color: colors.black,
    fontSize: normalize(14),
    fontFamily: fontFamilySetup.bold,
    marginLeft: normalize(10),
  },
  email: {
    width: '100%',
    color: colors.grey5,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
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
  dotStyle: {
    width: normalize(7),
    height: normalize(7),
    backgroundColor: colors.grey6,
    borderRadius: 100,
    marginRight: normalize(5),
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
  textFollow: {
    color: colors.blue,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
  },
  textTitleAlert: {
    color: colors.black,
    fontSize: normalize(19),
    fontFamily: fontFamilySetup.bold,
    lineHeight: normalize(21),
    textAlign: 'center',
  },
  textMessageAlert: {
    color: colors.black,
    fontSize: normalize(12),
    fontFamily: fontFamilySetup.medium,
    textAlign: 'center',
  },
  textCancelAlert: {
    color: colors.whiteDefault,
    fontSize: normalize(11),
    fontFamily: fontFamilySetup.regular,
    lineHeight: normalize(21),
    textAlign: 'center',
    marginHorizontal: normalize(10),
  },
  textConfirmAlert: {
    color: colors.whiteDefault,
    fontSize: normalize(11),
    fontFamily: fontFamilySetup.regular,
    lineHeight: normalize(21),
    textAlign: 'center',
    marginHorizontal: normalize(10),
  },
}));

export default useStyles;
