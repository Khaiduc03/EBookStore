import {StyleSheet} from 'react-native';

import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';
import {fontFamilySetup} from '../../../../../../utils/font';
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width: '100%',
    height: normalize(55),
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#E4E4E4',
    position: 'absolute',
    top: 0,
  },
  btnBack: {
    paddingLeft: normalize(16),
  },
  textHeader: {
    color: colors.black,
    fontSize: normalize(18),
    fontFamily: fontFamilySetup.bold,
  },
  iconStylle: {
    color: colors.black,
  },
  viewPDR: {
    paddingRight: normalize(16),
  },
}));

export default useStyles;
