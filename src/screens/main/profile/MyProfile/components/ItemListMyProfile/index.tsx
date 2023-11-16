import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {theme} from '../../../../../../theme';
import useStyles from './styles';
import {SquaresCustomProps} from './types';

const ItemListMyProfile: React.FunctionComponent<
  SquaresCustomProps
> = props => {
  const {avatarDummy, name, title, button, textButton, closeIcon} = props;
  const styles = useStyles();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isDetail, setIsDetail] = useState();
  const handleButtonPress = () => {
    setIsFollowing(!isFollowing);
  };
  const handlePressUser = () => {
    NavigationService.navigate(routes.PROFILEUSER);
  };
  return (
    <View style={styles.Squares}>
      {avatarDummy && (
        <TouchableOpacity style={styles.ViewTop} onPress={handlePressUser}>
          <Image
            style={styles.Avatar}
            source={{
              uri: 'https://images2.thanhnien.vn/528068263637045248/2023/9/30/cristiano-ronaldo--169604187049959114942.jpeg',
            }}
          />
        </TouchableOpacity>
      )}
      {closeIcon && (
        <TouchableOpacity style={styles.iconDelete}>
          <Icon name="close-outline" type="ionicon" size={24} />
        </TouchableOpacity>
      )}
      {name && <Text style={styles.name}>{name}</Text>}
      {title && <Text style={styles.title}>{title}</Text>}
      {button && (
        <TouchableOpacity
          style={[
            styles.Button,
            {
              backgroundColor: isFollowing
                ? theme?.lightColors?.grey5
                : theme?.lightColors?.blue,
            },
          ]}
          onPress={handleButtonPress}>
          <Text style={styles.TextButton}>
            {isFollowing ? 'Unfollow' : textButton}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemListMyProfile;
