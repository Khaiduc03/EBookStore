import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TextCustom from '../../../../../../components/customs/Text';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import useStyles from './styles';

const ItemFollow = () => {
  const styles = useStyles();

  const user = useAppSelector(getAuthUserProfile);
  return (
    <View style={styles.viewAvatarFollow}>
      <Image style={styles.avatar} source={{uri: user.image_url}} />
      <TouchableOpacity style={styles.viewFollow}>
        <Text>{user.followercount}</Text>
        <TextCustom textLight title="Follower" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <Text>{user.followingcount}</Text>
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
