import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

const ItemFollow = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);
  const onPressFollow = () => {
    NavigationService.navigate(routes.LIST_FOLLOW);
  };

  return (
    <View style={styles.viewAvatarFollow}>
      <Image style={styles.avatar} source={{uri: user.image_url}} />
      <View style={styles.viewAll}>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>{user.post_count}</Text>
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressFollow} style={styles.viewFollow}>
          <Text style={styles.countNumber}>{user.followercount}</Text>
          <Text style={styles.text}>Follower</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressFollow} style={styles.viewFollow}>
          <Text style={styles.countNumber}>{user.followingcount}</Text>
          <Text style={styles.text}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFollow;
