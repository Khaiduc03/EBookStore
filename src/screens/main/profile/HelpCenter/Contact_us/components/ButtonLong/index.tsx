import { Icon } from '@rneui/themed';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useStyles from './styles';
import { ButtonLongpros } from './types';

const ButtonLong: React.FC<ButtonLongpros> = props => {
  const {icon_Service, title, icon_Facebook, icon_Website} = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {icon_Service && (
        <TouchableOpacity style={styles.ButtonService}>
          <Icon name="user-astronaut" type="font-awesome-5" color={'#f98300'} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      )}
      {icon_Facebook && (
        <TouchableOpacity style={styles.ButtonMeta}>
          <Icon name="facebook" type="font-awesome-5" color={'blue'} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      )}
      {icon_Website && (
        <TouchableOpacity style={styles.ButtonGoogle}>
          <Icon name="internet-explorer" type="font-awesome" color={'blue'} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ButtonLong;
