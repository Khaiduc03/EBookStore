import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/base';

const ItemCommnentPostDetail = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.avatarStyle}
        source={{
          uri: 'https://gamek.mediacdn.vn/133514250583805952/2022/1/2/solo-leveling-1620917554185396197198-16410674690231914720800.jpg',
        }}
      />
      <View style={styles.content}>
        <Text style={styles.nameStyle}>SugarDuckfly</Text>
        <Text style={styles.day}>Jul 13,2020</Text>
        <Text style={styles.commentStyle}>
          Any other unique identifier from your data is used as the key for each
          rendered item.
        </Text>
        <View style={styles.repContent}>
          <View style={styles.rep}>
            <Icon
              name="chatbox-outline"
              type="ionicon"
              color={styles.iconStyle.color}
              size={15}
            />
            <Text style={styles.numberRepStyle}>10</Text>
          </View>
          <Icon
            name="ellipsis-vertical"
            type="ionicon"
            size={15}
            color={styles.iconStyle.color}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCommnentPostDetail;
