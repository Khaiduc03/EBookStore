import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../../../../utils';

const useStyles = makeStyles(({colors}) => ({
  container: {
    alignItems: 'center',
  },
  comicItem: {
    width: '100%',
    height: normalize(180),
    flexDirection: 'row',
    marginBottom: normalize(15),
    paddingLeft: normalize(15),
  },
  imgComic: {
    width: '36%',
    borderRadius: normalize(10),
    marginRight: '2%',
  },
  content: {
    width: '62%',
  },
}));

export default useStyles;