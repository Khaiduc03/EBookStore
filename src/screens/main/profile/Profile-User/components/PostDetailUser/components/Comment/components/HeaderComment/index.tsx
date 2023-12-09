import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {backScreen} from '../../../../../../../../../../utils';

const HeaderCommentPostUserDetail = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backScreen()} style={{paddingLeft: 16}}>
        <Icon
          name="arrow-back-outline"
          size={24}
          type="ionicon"
          color={styles.iconStylle.color}
        />
      </TouchableOpacity>
      <Text style={styles.textHeader}>Comments (13)</Text>
      <View style={{paddingRight: 16}} />
    </View>
  );
};

export default HeaderCommentPostUserDetail;

const styles = StyleSheet.create({});
