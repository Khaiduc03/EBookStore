import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {backScreen} from '../../../../../../utils';
import useStyles from './styles';

interface HeaderRepCommentProps {
  currentRepCommentCount: number; // new prop
}

const HeaderRepComment: React.FC<HeaderRepCommentProps> = ({
  currentRepCommentCount,
}) => {
  const styles = useStyles();
  const route = useRoute();

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
        Reply({currentRepCommentCount ? currentRepCommentCount : '0'})
      </Text>
      <View style={styles.viewPDR} />
    </View>
  );
};

export default HeaderRepComment;
