import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';
import {Image} from '@rneui/themed';
import {Comic} from '../../../types';
import {NavigationService} from '../../../navigation';
import {routes} from '../../../constants';

const ComicItem: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const comic: Comic = props.data;
  return (
    <View style={props.viewStyle || styles.container}>
      <Image
        onPress={() => NavigationService.navigate(routes.COMICDETAIL)}
        style={props.imageStyle || styles.imgComic}
        source={{uri: comic.image}}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View style={props.contentStyle || styles.content}>
        <Text style={styles.nameTopic}>{comic.topic}</Text>
        <Text style={styles.nameComic}>{comic.name}</Text>
        <View style={styles.rate}>
          <Icon name="star-half" size={20} />
          <Text style={styles.textRate}>{comic.rate}</Text>
        </View>
      </View>
    </View>
  );
};

export default ComicItem;
