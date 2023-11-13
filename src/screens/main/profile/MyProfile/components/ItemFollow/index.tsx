import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import TextCustom from '../../../../../../components/customs/Text';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';

const ItemFollow = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);

  return (
    <View style={styles.viewAvatarFollow}>
      <Image style={styles.avatar} source={{uri: user.image_url}} />
      <View style={styles.viewAll}>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>100</Text>
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>{user.followercount}</Text>
          <Text style={styles.text}>Follower</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>{user.followingcount}</Text>
          <Text style={styles.text}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFollow;
