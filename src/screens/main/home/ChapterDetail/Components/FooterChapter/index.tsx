import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import useStyles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../../../../../hooks';
import {ComicActions} from '../../../../../../redux';

const FooterChapter: React.FC = props => {
  const dispath = useAppDispatch();

  const onPressNext = () => {};

  const onPressPrevious = () => {};

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.commentButtonStyle}>
        <Icon
          name="chatbubble-ellipses"
          type="ionicon"
          size={24}
          color={styles.iconStyle.color}
        />
        <Text style={styles.textComment}>5,0555</Text>
      </TouchableOpacity>
      <View style={styles.navChapter}>
        <TouchableOpacity style={styles.nextChapter} onPress={onPressPrevious}>
          <Icon
            name="caret-back-outline"
            size={24}
            type="ionicon"
            color={styles.iconStyle.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextChapter} onPress={onPressNext}>
          <Icon
            name="caret-forward-outline"
            size={24}
            type="ionicon"
            color={styles.iconStyle.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterChapter;
