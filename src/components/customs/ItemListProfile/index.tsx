import {Avatar, Icon, Switch} from '@rneui/themed';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {ThemeActions} from '../../../redux';
import {getMode} from '../../../redux/selectors/thems.selector';
import useStyles from './styles';
import {CustomCirclerProps} from './types';

const ItemListProfile: React.FC<CustomCirclerProps> = props => {
  const {
    colorBackground,
    title,
    name,
    type,
    rightIcon,
    color,
    switchRight,
    size,
    onPressScreen,
  } = props;
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getMode);

  const handleTheme = () => {
    if (mode === 'light') {
      dispatch(ThemeActions.setTheme('dark'));
    } else {
      dispatch(ThemeActions.setTheme('light'));
    }
  };
  return (
    <View style={styles.viewHeader}>
      <View style={styles.viewicon}>
        <Avatar
          size={size}
          rounded
          icon={{name: name, type: type, color: color}}
          containerStyle={{backgroundColor: colorBackground}}
        />
        {<Text style={styles.txtCircle}>{title}</Text>}
      </View>
      {switchRight && (
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleTheme}
          value={mode === 'dark' ? true : false}
        />
      )}
      {rightIcon && (
        <Icon
          style={styles.rightIcon}
          name="right"
          type="antdesign"
          size={18}
        />
      )}
    </View>
  );
};

export default ItemListProfile;
