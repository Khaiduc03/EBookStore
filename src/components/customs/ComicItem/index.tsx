import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';

const ComicItem: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      style={[
        props.viewStyle
          ? props.viewStyle
          : props.index % 2 !== 0
          ? {marginLeft: 15}
          : {marginLeft: 0} || styles.container,
        ,
      ]}>
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
