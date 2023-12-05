import {Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppSelector} from '../../../../../../hooks';
import {getCountCommentForum} from '../../../../../../redux';
import {backScreen} from '../../../../../../utils';
import useStyles from './styles';
import {useRoute} from '@react-navigation/native';

const HeaderComment = () => {
  const styles = useStyles();

  const route = useRoute();

  const totalComment = useAppSelector(getCountCommentForum);
  // Access the comment_count parameter from route.params

  // const totalComment =
  //   (route.params as {comment_count?: number})?.comment_count || 0;

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
        {/* Comments({totalComment}) */}
      </Text>
      <View style={styles.viewPDR} />
    </View>
  );
};

export default HeaderComment;
