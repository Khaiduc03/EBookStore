import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {ButtonLongProps} from './types';

const ButtonLong: React.FC<ButtonLongProps> = ({
  title,
  nameIcon,
  colorIcon,
  typeIcon,
  onPressScreen,
  backgroundColor,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.viewCenter}>
        <TouchableOpacity
          onPress={onPressScreen}
          style={[styles.Button, backgroundColor]}>
          <Icon name={nameIcon + ''} type={typeIcon} color={colorIcon + ''} />
          <Text style={styles.name}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonLong;
