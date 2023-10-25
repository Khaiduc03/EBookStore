import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {ButtonSmallpros} from './types';
import {theme} from '../../../../../../../theme';

const ButtonSmall: React.FC<ButtonSmallpros> = props => {
  const {title, onPress, isSelected} = props;
  const styles = useStyles();

  const buttonBackgroundColor = isSelected
    ? theme?.lightColors?.grey5
    : theme?.lightColors?.primary;

  return (
    <TouchableOpacity
      style={[
        styles.ButtonSmall,
        {
          backgroundColor: buttonBackgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={isSelected}>
      <Text style={[styles.txtButtonSmall]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonSmall;
