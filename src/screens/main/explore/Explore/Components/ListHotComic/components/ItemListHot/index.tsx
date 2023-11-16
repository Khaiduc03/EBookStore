import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Image} from '@rneui/themed';
import {ComicType} from '../../../../../../../../redux';
import {Icon} from '@rneui/base';
import {GoogleIcon} from '../../../../../../../../assets/icons';
import {TopOneImage} from '../../../../../../../../assets/svg';

interface ItemListHotProps {
  data: ComicType;
  index: number;
}

const ItemListHot: React.FC<ItemListHotProps> = props => {
  const styles = useStyles();
  const comic: ComicType = props.data;

  return (
    <View style={styles.container}>
      {props.index == 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TopOneImage />
          <Text style={styles.textNumberOne}>1</Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.textNumber}>
            {props.index + 1}
          </Text>
        </View>
      )}
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: comic.image_url,
          }}
        />

        <View style={styles.content}>
          <Text style={styles.nameComic}>{comic.comic_name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="heart" type="ionicon" size={13} color={'#F89300'} />
            <Text style={styles.topic}>{comic.views}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemListHot;
