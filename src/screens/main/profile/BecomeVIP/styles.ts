import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../utils';
import {fontFamilySetup} from '../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.bold,
    color: colors.black,
    width: '100%',
    marginTop: normalize(12),
  },
  iconLeftStyle: {
    color: colors.black,
  },
  line: {
    borderWidth: normalize(0.2),
    width: '100%',
    borderColor: colors.grey5,
  },
  btnBill: {
    width: '90%',
    height: normalize(188),
    backgroundColor: colors.grey7,
    borderRadius: normalize(20),
    alignItems: 'center',
  },
  textBill: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    letterSpacing: normalize(0.5),
    color: colors.grey5,
  },
  money: {
    fontSize: normalize(16),
    fontFamily: fontFamilySetup.bold,
    letterSpacing: normalize(1.5),
    color: colors.black,
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(19),
    paddingTop: normalize(31),
    width: '100%',
  },
  viewTax: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(19),
    paddingTop: normalize(29),
    width: '100%',
  },
  lineBill: {
    borderWidth: normalize(0.2),
    marginTop: normalize(30),
    width: normalize(280),
    borderColor: colors.grey5,
  },
  viewTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(19),
    paddingTop: normalize(16),
    width: '100%',
  },
  viewBtnBill:{
    alignItems: 'center', paddingVertical: 31
  }
}));
export default useStyles;
