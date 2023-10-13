import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import TextCustom from '../../../../../../components/customs/Text';

const ItemFollow = () => {
  const styles = useStyles();
  return (
    <View style={styles.viewAvatarFollow}>
      <Image style={styles.avatar} source={images.avata} />
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
