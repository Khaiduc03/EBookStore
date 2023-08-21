import { Icon } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Svg } from 'react-native-svg';
import useStyles from './styles';
import { smallButtonProps } from './types';

const SmallButton: React.FunctionComponent<smallButtonProps> = props => {
  const styles = useStyles();
  const {
    onPressButton,
    nameIcon,
    typeIcon,
    sizeIcon,
    colorIcon,
    isIonicons,
    svgIcon,
    style
  } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      {isIonicons ? (
        <Icon
          name={nameIcon}
          size={sizeIcon || 28}
          type={typeIcon}
          color={colorIcon || styles.backgroundcolor.color}
        />
      ) : (
        <Svg width={sizeIcon||28} height={sizeIcon||28} style={style}>
          {svgIcon}
        </Svg>
      )}
    </TouchableOpacity>
  );
};

export default SmallButton;
