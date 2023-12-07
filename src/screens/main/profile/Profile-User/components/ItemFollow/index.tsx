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
      {props.data?.image_url && (
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://static.thenounproject.com/png/5034901-200.png' ||
              props.data?.image_url,
          }}
        />
      )}
      <TouchableOpacity style={styles.viewFollow}>
        <Text style={styles.countNumber}>{props.data?.followercount || 1}</Text>
        <TextCustom textLight title="Follower" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <Text style={styles.countNumber}>
          {props.data?.followingcount || 1}
        </Text>
        <TextCustom textLight title="Follow" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewFollow}>
        <Text style={styles.countNumber}>{props.data?.followercount || 1}</Text>
        <TextCustom textLight title="Post" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemFollow;
