import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import TextCustom from '../../../../../../components/customs/Text';
import useStyles from './styles';

const ItemFollow = () => {
  const styles = useStyles();
  return (
    <View style={styles.viewAvatarFollow}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
        }}
      />
      <TouchableOpacity style={styles.viewFollow}>
        <TextCustom number={100} />
        <TextCustom textLight title="Follower" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <TextCustom number={100} />
        <TextCustom textLight title="Follow" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <TextCustom number={100} />
        <TextCustom textLight title="Post" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemFollow;
