import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import {backScreen} from '../../../../../../utils';

interface HeaderChapterProps {
  chapter_name: string;
  chapter_number: number;
}

const HeaderChapter: React.FC<HeaderChapterProps> = props => {
  console.log('chater', props.chapter_number);
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => backScreen()}>
          <Icon
            name="list-outline"
            type="ionicon"
            size={24}
            color={styles.iconStyle.color}
          />
        </TouchableOpacity>
        <Text style={styles.textChapter}>Chapter {props.chapter_number}</Text>
      </View>
      <TouchableOpacity>
        <Icon
          name="ellipsis-vertical"
          type="ionicon"
          size={24}
          color={styles.iconStyle.color}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderChapter;
