import {StyleSheet} from 'react-native';
import {Device} from '../../../utils';
import {makeStyles, normalize} from '@rneui/themed';

const PADDING = 40;

const useStyles = makeStyles(({colors}) => ({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
  },
  container: {
    width: Device.getDeviceWidth() - PADDING * 3,
     height: Device.getDeviceHeight() / 2.4,

    // backgroundColor: colors.background,
    backgroundColor: 'rgba(256, 256, 256, 2)',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lottieView: {
    width: normalize(900),
    height: normalize(90),
    marginTop: normalize(16),
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: normalize(8),
    color: colors.primary,
  },
  descriptionStyle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',

    paddingHorizontal: normalize(16),
    paddingBottom: normalize(32),
  },
  buttonOkStyle: {
    width: '90%',
    height: Device.getDeviceHeight() / 16,
    borderRadius: 99,
    backgroundColor: colors.primary,
    marginTop: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancelStyle: {
    width: '90%',
    height: Device.getDeviceHeight() / 16,
    borderRadius: 99,
    backgroundColor: colors.grey2,
    marginTop: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(16),
    backgroundColor: colors.background,
    position: 'absolute',
    bottom: -30,
    height: '45%',

    paddingBottom: normalize(16),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },

  topContainer: {
    width: '100%',
    alignItems: 'center',
    top:0
    ,marginBottom:20
  },
  buttonTextStyle: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: colors.white,
  },
}));

export default useStyles;
