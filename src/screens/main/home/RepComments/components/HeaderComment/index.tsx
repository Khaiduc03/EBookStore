import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {backScreen} from '../../../../../../utils';
import {useAppSelector} from '../../../../../../hooks';
import {getTotaRepComment} from '../../../../../../redux/selectors/comment.chapter.selector';

const HeaderRepComment = () => {
  const totalComment = useAppSelector(getTotaRepComment);

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
      <Text style={styles.textHeader}>
        Replies({totalComment ? totalComment : '0'})
      </Text>
      <View style={{paddingRight: 16}} />
    </View>
  );
};

export default HeaderRepComment;
