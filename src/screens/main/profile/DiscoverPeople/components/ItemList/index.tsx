import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {images} from '../../../../../../assets/images/png';
import {SquaresCustomProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {theme} from '../../../../../../theme';
import {Icon} from '@rneui/themed';
import {useAppDispatch} from '../../../../../../hooks';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';

const ItemList: React.FunctionComponent<SquaresCustomProps> = props => {
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
  const [isFollowing, setIsFollowing] = useState(false);
  const [isDetail, setIsDetail] = useState();
  const dispatch = useAppDispatch();
  const handleButtonPress = () => {
    dispatch(UserAction.postFollowRandom(props.data.uuid));
  };
  const handlePressUser = () => {
    NavigationService.navigate(routes.PROFILEUSER, {data: props.data});
  };
  const handlePressGoback = () => {
    NavigationService.navigate(routes.MYPROFILE);
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

      <Text numberOfLines={1} style={styles.name}>
        {fullname ? fullname : 'anonymous'}
      </Text>
      <Text style={styles.title}>Sugestions for you</Text>

      <TouchableOpacity
        style={[
          styles.Button,
          {
            backgroundColor: props.data.is_follower
              ? theme?.lightColors?.primary
              : theme?.lightColors?.grey5,
          },
        ]}
        onPress={handleButtonPress}>
        <Text style={styles.TextButton}>
          {props.data.is_follower ? 'Follow' : 'Unfollow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;
