import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import {backScreen} from '../../../../../../utils';

const HeaderChapter = () => {
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
        <Text style={styles.textChapter}>Chapter 1</Text>
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
