import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {CustomTopicsProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../navigation';

import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {ComicActions} from '../../../redux';

const TopicItem: React.FunctionComponent<CustomTopicsProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const onPressTopic = () => {
    dispatch(ComicActions.clearListDataByComic());
    NavigationService.navigate(routes.COMICBYTOPIC, {
      uuid: props.uuid,
      name: props.title,
    });
  };

  return (
    <TouchableOpacity
      onPress={onPressTopic}
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
