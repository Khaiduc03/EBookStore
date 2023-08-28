import React, {FunctionComponent, useState} from 'react';
import {View, Text} from 'react-native';

import {Button, Switch} from '@rneui/base';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {getAuthEnableSignIn} from '../../../../redux/selectors/auth.selector';
import {AuthActions} from '../../../../redux/reducer';
import useStyles from './styles';

const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Button
        title={enableSignIn ? 'Logout' : 'Login'}
        onPress={() => {
          handleLogout();
        }}
      />
      <Text style={styles.text}>PROFILE</Text>
    </View>
  );
};

export default Profile;
