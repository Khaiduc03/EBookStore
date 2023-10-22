import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {ButtonLongpros} from './types';

const ButtonLong: React.FC<ButtonLongpros> = props => {
  const {icon_Service, title, icon_Facebook, icon_Discord, onPressScreen} =
    props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {icon_Service && (
        <TouchableOpacity onPress={onPressScreen} style={styles.ButtonService}>
          <Icon name="user-astronaut" type="font-awesome-5" color={'#f98300'} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      )}
      {icon_Facebook && (
        <TouchableOpacity onPress={onPressScreen} style={styles.ButtonMeta}>
          <Icon name="facebook" type="font-awesome-5" color={'blue'} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      )}
      {icon_Discord && (
        <TouchableOpacity onPress={onPressScreen} style={styles.ButtonGoogle}>
          <Icon name="discord" type="material" color={'#5964F2'} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ButtonLong;
