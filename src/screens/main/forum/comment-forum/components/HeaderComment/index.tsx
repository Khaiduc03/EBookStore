import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../../navigation';
import {ForumType} from '../../../../../../redux/types/forum.type';
import useStyles from './styles';

interface ParentsUuidComment {
  parents_comment_uuid: string;
  data: ForumType;
}

const HeaderComment = () => {
  const styles = useStyles();

  const route = useRoute();

  const totalComment = (route.params as {comment_count?: number})
    ?.comment_count;

  useEffect(() => {}, [totalComment]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          NavigationService.goBack();
        }}
        style={styles.btnBack}>
        <Icon
          name="arrow-back-outline"
          size={24}
          type="ionicon"
          color={styles.iconStylle.color}
        />
      </TouchableOpacity>
      <Text style={styles.textHeader}>
        Comment({totalComment ? totalComment : '0'})
      </Text>
      <View style={styles.viewPDR} />
    </View>
  );
};

export default HeaderComment;
