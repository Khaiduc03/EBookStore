import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import useStyles from './style';
import {CustomTopicsProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const TopicItem: React.FunctionComponent<CustomTopicsProps> = props => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={{height: 100, width: 100}}>
      <ImageBackground source={image}>
        <Text style={{fontSize: 16, color: '#000'}}>{props.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TopicItem;
