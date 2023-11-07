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
