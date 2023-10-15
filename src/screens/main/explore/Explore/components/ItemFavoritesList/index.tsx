import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';
import {Image} from '@rneui/themed';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {Comic} from '../../../../../../types';
import FastImage from 'react-native-fast-image';

const ItemFavoritesList: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const comic: Comic = props.data;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => NavigationService.navigate(routes.COMICDETAIL)}
        style={styles.imgComic}>
        <FastImage
          style={{width: '100%', height: '100%', borderRadius: 6}}
          source={{uri: comic.image}}
        />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.nameComic}>{comic.name}</Text>
          <View style={styles.rate}>
            <Icon name="star-half" size={18} />
            <Text style={styles.textRate}>{comic.rate}</Text>
          </View>
          <View style={styles.topicsContainer}>
            {props.data.topic.map((text, index) => (
              <View key={index} style={styles.itemTopics}>
                <Text style={styles.textTopics}>{text}</Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.ellipsiIcon}>
          <Icon
            name="ellipsis-vertical-sharp"
            type="ionicon"
            size={20}
            color={styles.ellipsiIconStyle.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFavoritesList;
