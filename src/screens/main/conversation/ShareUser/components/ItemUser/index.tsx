import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import useStyles from './styles';
import {UserI} from '../../../../../../redux';
import {UserType} from '../../../../../../redux/types/user.type';
import {Avatar, Icon} from '@rneui/themed';

const ItemShare: FunctionComponent<UserType> = props => {
  const {email, image_url, fullname, status, phone} = props;
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.container}>
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
        <Text style={styles.textStyle}>{fullname || 'Anonymo'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemShare;
