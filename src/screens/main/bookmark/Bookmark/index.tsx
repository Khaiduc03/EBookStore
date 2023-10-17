import {Text} from '@rneui/base';
import React, {FunctionComponent} from 'react';
import {Switch, TouchableOpacity, View} from 'react-native';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {ThemeActions} from '../../../../redux';
import {getMode} from '../../../../redux/selectors/thems.selector';
import useStyles from './styles';

const Bookmark: FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getMode);

  const handleTheme = () => {
    if (mode === 'dark') {
      dispatch(ThemeActions.setTheme('light'));
    } else {
      dispatch(ThemeActions.setTheme('dark'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmark</Text>
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleTheme}
        value={mode === 'dark' ? true : false}
      />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.CHAT)}>
          <Text style={styles.textChat}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bookmark;
