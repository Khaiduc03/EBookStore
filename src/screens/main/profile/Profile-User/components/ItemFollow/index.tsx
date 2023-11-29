import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import TextCustom from '../../../../../../components/customs/Text';
import useStyles from './styles';
import {UserType} from '../../../../../../redux/types/user.type';
interface ProfileProps {
  data: UserType;
}
const ItemFollow: React.FunctionComponent<ProfileProps> = props => {
  const styles = useStyles();
  return (
    <View style={styles.viewAvatarFollow}>
      <Image
        style={styles.avatar}
        source={{
          uri: props.data.image_url,
        }}
      />
      <TouchableOpacity style={styles.viewFollow}>
        <Text style={styles.countNumber}>{props.data.followercount}</Text>
        <TextCustom textLight title="Follower" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <Text style={styles.countNumber}>{props.data.followingcount}</Text>
        <TextCustom textLight title="Follow" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <Text style={styles.countNumber}>{props.data.followercount}</Text>
        <TextCustom textLight title="Post" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemFollow;
