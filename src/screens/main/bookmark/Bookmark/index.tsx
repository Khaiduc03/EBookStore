import React, {FunctionComponent, useState} from 'react';

import {View, Switch} from 'react-native';

import {Text} from '@rneui/base';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {getMode} from '../../../../redux/selectors/thems.selector';
import {ThemeActions} from '../../../../redux';
import useStyles from './styles';

const Bookmark: FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const mode = useAppSelector(getMode);
  console.log('mode:', mode);

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
    </View>
  );
};

export default Bookmark;
