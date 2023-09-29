import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useStyles from './styles';

const FooterChapter = () => {
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
        <TouchableOpacity style={styles.nextChapter}>
          <Icon
            name="caret-back-outline"
            size={24}
            type="ionicon"
            color={styles.iconStyle.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextChapter}>
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
