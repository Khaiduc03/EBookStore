import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';

const img = {
  uri: 'https://i.pinimg.com/originals/4e/d0/58/4ed058f5713dddec9c1bd68a106a22c5.jpg',
};

const ComicItem: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={props.viewStyle || styles.container}>
      <Image
        style={props.imageStyle || styles.imgComic}
        source={{uri: props.image}}
      />
      <View style={props.contentStyle || styles.content}>
        <Text style={styles.nameTopic}>{props.topic}</Text>
        <Text style={styles.nameComic}>{props.name}</Text>
        <View style={styles.rate}>
          <Icon name="star-half" size={24} />
          <Text style={styles.textRate}>{props.rate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ComicItem;
