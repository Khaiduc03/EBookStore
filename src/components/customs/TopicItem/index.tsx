import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {CustomTopicsProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../navigation';

import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {ComicActions} from '../../../redux';
import FastImage from 'react-native-fast-image';
import {Skeleton} from '@rneui/base';
import {ActivityIndicator} from 'react-native';

const TopicItem: React.FunctionComponent<CustomTopicsProps> = props => {
  const {image_url, name, description, uuid} = props.item;
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(true);

  const onLoadStart = () => {
    setLoading(true);
  };
  const onLoadEnd = () => {
    setLoading(false);
  };

  const onPressTopic = () => {
    dispatch(ComicActions.clearListDataByComic());
    NavigationService.navigate(routes.COMICBYTOPIC, {
      name: name,
    });
  };

  return (
    <TouchableOpacity
      onPress={onPressTopic}
      style={props.viewStyle || styles.container}>
      <FastImage
        onLoadEnd={onLoadEnd}
        onLoadStart={onLoadStart}
        style={styles.imageStyle}
        source={{uri: image_url}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={props.textStyle || styles.textTitle}>{name}</Text>
      {isLoading && (
        <Skeleton animation="wave" style={styles.skeletonStyle}></Skeleton>
      )}
      {isLoading && (
        <ActivityIndicator
          color={'#F89300'}
          size={'large'}
          style={{
            position: 'absolute',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TopicItem;
