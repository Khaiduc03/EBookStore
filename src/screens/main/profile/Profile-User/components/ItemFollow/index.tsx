import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import TextCustom from '../../../../../../components/customs/Text';
import useStyles from './styles';
import {UserType} from '../../../../../../redux/types/user.type';
interface ProfileProps {
  data?: UserType;
}
const ItemFollow: React.FunctionComponent<ProfileProps> = props => {
  const styles = useStyles();
  return (
    <View style={styles.viewAvatarFollow}>
      <Image style={styles.avatar} source={{uri: props.data?.image_url}} />
      <View style={styles.viewAll}>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>{props.data?.post_count}</Text>
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>{props.data?.followercount}</Text>
          <Text style={styles.text}>Follower</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <Text style={styles.countNumber}>{props.data?.followingcount}</Text>
          <Text style={styles.text}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFollow;
