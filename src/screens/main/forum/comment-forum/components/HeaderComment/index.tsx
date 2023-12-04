import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {backScreen} from '../../../../../../utils';
import {useAppSelector} from '../../../../../../hooks';
import {getTotaComment} from '../../../../../../redux/selectors/comment.chapter.selector';
import {getCountComment} from '../../../../../../redux/selectors/comic.selector';

const HeaderComment = () => {
  const styles = useStyles();
  const totalComment = useAppSelector(getCountComment);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backScreen()} style={styles.btnBack}>
        <Icon
          name="arrow-back-outline"
          size={24}
          type="ionicon"
          color={styles.iconStylle.color}
        />
      </TouchableOpacity>
      <Text style={styles.textHeader}>
        Comments({totalComment ? totalComment : '0'})
      </Text>
      <View style={styles.viewPDR} />
    </View>
  );
};

export default HeaderComment;
