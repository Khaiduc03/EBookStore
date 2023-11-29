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
  const handleButtonPress = () => {
    setIsFollowing(!isFollowing);
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
            backgroundColor: isFollowing
              ? theme?.lightColors?.grey5
              : theme?.lightColors?.primary,
          },
        ]}
        onPress={handleButtonPress}>
        <Text style={styles.TextButton}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;
