import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {theme} from '../../../../../../theme';
import useStyles from './styles';
import {SquaresCustomProps} from './types';
import {data} from './types';

const ItemListMyProfile: React.FC<SquaresCustomProps> = props => {
  const styles = useStyles();
  const [isFollowing, setIsFollowing] = useState(false);
  const handleButtonPress = () => {
    setIsFollowing(!isFollowing);
  };
  const handlePressUser = () => {
    NavigationService.navigate(routes.PROFILEUSER);
  };
  return (
    <View style={styles.Squares}>
      <TouchableOpacity style={styles.ViewTop} onPress={handlePressUser}>
        <Image
          style={styles.Avatar}
          source={{
            uri: props.avatarDummy,
          }}
        />
      </TouchableOpacity>

      {props.closeIcon && (
        <TouchableOpacity style={styles.iconDelete}>
          <Icon name="close-outline" type="ionicon" size={24} />
        </TouchableOpacity>
      )}
      {props.name && <Text style={styles.name}>{props.name}</Text>}
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.button && (
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
            {isFollowing ? 'Unfollow' : props.textButton}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemListMyProfile;
