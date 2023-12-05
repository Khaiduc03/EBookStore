import {Avatar, Icon, Switch} from '@rneui/themed';
import React, {useState} from 'react';
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
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleTheme = () => {
    if (mode === 'light') {
      dispatch(ThemeActions.setTheme('dark'));
      setTimeout(() => {
        setIsEnabled(previousState => !previousState);
      }, 1000);
    } else {
      dispatch(ThemeActions.setTheme('light'));
      setTimeout(() => {
        setIsEnabled(previousState => !previousState);
      }, 1000);
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
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={[styles.outter, isEnabled ? styles.on : styles.off]}
            onPress={handleTheme}
            activeOpacity={3}>
            <View style={isEnabled ? styles.innerON : styles.innerOFF} />
          </TouchableOpacity>
        </View>
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
