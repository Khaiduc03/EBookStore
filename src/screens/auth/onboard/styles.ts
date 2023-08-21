import {makeStyles, normalize} from '@rneui/themed';

import {color, fonts} from '@rneui/base';

import {Dimensions} from 'react-native';
import {Device} from '../../../utils';

const {width, height} = Dimensions.get('screen');
const HEIGHT = Device.getDeviceHeight();
const WIGHT = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    width: width * 0.7,
  },
  content: {
    flex: 0.4,
    width,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'Urbanist-Regular',
  },
  description: {
    fontSize: 15,
    marginVertical: 12,
    color: colors.grey4,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    right: 16,
    width: '30%',
  },
  nextButton: {
    width: '70%',
  },
  backButton: {
    width: '40%',
    position: 'absolute',
    left: -32,
  },
}));

export default useStyles;
