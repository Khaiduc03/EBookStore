import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../../navigation';
import {ForumType} from '../../../../../../redux/types/forum.type';
import useStyles from './styles';

interface HeaderCommentProps {
  currentCommentCount: number; // new prop
}

const HeaderComment: React.FC<HeaderCommentProps> = ({currentCommentCount}) => {
  const styles = useStyles();

  const route = useRoute();

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
        Comment({currentCommentCount ? currentCommentCount : '0'})
      </Text>
      <View style={styles.viewPDR} />
    </View>
  );
};

export default HeaderComment;
