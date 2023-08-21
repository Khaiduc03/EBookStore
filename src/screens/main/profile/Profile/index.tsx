import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Button, Switch} from '@rneui/base';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthEnableSignIn } from '../../../../redux/selectors/auth.selector';
import { AuthActions } from '../../../../redux/reducer';

const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  return (
    <View style={styles.container}>
      <Button 
      title={enableSignIn ? 'Logout' : 'Login'}
      onPress={()=>{handleLogout()}}
      />
    </View>
  );
};

export default Profile;
