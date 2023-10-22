import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {CustomTopicsProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../navigation';

import {routes} from '../../../constants';

const TopicItem: React.FunctionComponent<CustomTopicsProps> = props => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigate(routes.COMICBYTOPIC, {uuid: props.uuid})
      }
      style={styles.container || props.viewStyle}>
      <ImageBackground
        borderRadius={6}
        resizeMode="cover"
        style={[styles.imgBackground, props.viewStyle]}
        source={{uri: props.image}}>
        <Text style={[styles.textTitle, props.titleStyle]}>{props.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TopicItem;
