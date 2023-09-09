import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import useStyles from './style';
import {CustomTopicsProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopicItem: React.FunctionComponent<CustomTopicsProps> = props => {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <ImageBackground
        borderRadius={10}
        resizeMode="cover"
        style={[styles.imgBackground, props.viewStyle]}
        source={{uri: props.image}}>
        <Text style={[styles.textTitle, props.titleStyle]}>{props.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TopicItem;
