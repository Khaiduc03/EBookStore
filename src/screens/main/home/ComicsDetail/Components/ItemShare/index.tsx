import {Avatar} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {UserType} from '../../../../../../redux/types/user.type';
import useStyles from './styles';
import {useAppDispatch} from '../../../../../../hooks';
import {ChatActions} from '../../../../../../redux/reducer/chat.reducer';

interface RouteParamsIdComic {
  data: UserType;
  link: Promise<string>;
}

const ItemShare: FunctionComponent<RouteParamsIdComic> = props => {
  const {email, image_url, fullname, status, phone, uuid, links} = props.data;
  const dispatch = useAppDispatch();
  const handleCreateRoom = () => {
    dispatch(
      ChatActions.handleShareLink({joined_uuid: uuid, message: props.link}),
    );
  };
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.wrapper}>
          <View style={styles.avatarStyle}>
            <Avatar
              source={{
                uri:
                  image_url ||
                  'https://static.thenounproject.com/png/5034901-200.png',
              }}
              rounded
              size={42}
              containerStyle={{backgroundColor: '#9A9A9A', borderRadius: 100}}
            />
            <View
              style={[
                styles.status,
                status ? styles.status_online : styles.status_offline,
              ]}
            />
          </View>
          <Text numberOfLines={1} style={styles.textStyle}>
            {fullname || 'Anonymo'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendStyle} onPress={handleCreateRoom}>
        <Text style={styles.textSend}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemShare;
