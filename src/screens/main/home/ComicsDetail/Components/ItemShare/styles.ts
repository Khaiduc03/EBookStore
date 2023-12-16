import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',

    marginVertical: normalize(8),
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  avatarStyle: {
    marginRight: normalize(10),
  },
  status_offline: {
    backgroundColor: colors.grey5,
  },
  status_online: {
    backgroundColor: colors.green,
  },
  status: {
    borderRadius: normalize(100),
    width: normalize(12),
    height: normalize(12),

    position: 'absolute',
    bottom: normalize(2),
    right: normalize(2),
    borderColor: colors.white,
    borderWidth: normalize(3),
  },
  textStyle: {
    width: '60%',
    fontFamily: 'Roboto-Regular',
    fontSize: normalize(14),
    color: colors.black,
  },
  sendStyle: {
    height: normalize(25),
    width: normalize(45),
    backgroundColor: '#F89300',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textSend: {
    fontSize: normalize(11),
    fontFamily: fontFamilySetup.medium,
    color: colors.white,
  },
}));

export default useStyles;
