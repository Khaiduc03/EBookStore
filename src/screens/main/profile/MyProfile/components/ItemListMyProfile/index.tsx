import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {theme} from '../../../../../../theme';
import useStyles from './styles';
import {SquaresCustomProps} from './types';
import {useAppDispatch} from '../../../../../../hooks';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';

const ItemListMyProfile: React.FunctionComponent<
  SquaresCustomProps
> = props => {
  const {
    dob,
    email,
    followercount,
    followingcount,
    fullname,
    gender,
    image_url,
    phone,
    status,
    summary,
    uuid,
  } = props.data;
  const styles = useStyles();

  const dispatch = useAppDispatch();

  const handleButtonPress = () => {
    dispatch(UserAction.postFollowRandom(props.data.uuid));
  };
  const handlePressUser = () => {
    NavigationService.navigate(routes.PROFILEUSER, {data: props.data});
  };
  return (
    <View style={styles.Squares}>
      <TouchableOpacity style={styles.ViewTop} onPress={handlePressUser}>
        <Image
          style={styles.Avatar}
          source={{
            uri: image_url
              ? image_url
              : 'https://tuyenquangtv.vn/file/fb9e3a036ab59c2c016ac3618a0d3aec/fb9e3a036e39d22d016f0265c63e3fb1/062020/d1-1591546728964533729328_20200608102321.jpg',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconDelete}>
        <Icon name="close-outline" type="ionicon" size={24} />
      </TouchableOpacity>

      <Text style={styles.name} numberOfLines={1}>
        {fullname ? fullname : 'anonymous'}
      </Text>
      <Text style={styles.title}>Sugestions for you</Text>

      <TouchableOpacity
        style={[
          styles.Button,
          {
            backgroundColor: props.data.is_following
              ? theme?.lightColors?.grey5
              : theme?.lightColors?.blue,
          },
        ]}
        onPress={handleButtonPress}>
        <Text style={styles.TextButton}>
          {props.data.is_following ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListMyProfile;
