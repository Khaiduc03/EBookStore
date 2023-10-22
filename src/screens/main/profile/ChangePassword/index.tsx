import {Text} from '@rneui/base';
import {CheckBox} from '@rneui/themed';
import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../../redux';
import {CustomToastBottom} from '../../../../utils';
import {AuthHeader, Headers} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import InputCustomV1 from '../../../../components/customs/InputCustomV1';

const ChangePassword: React.FC = () => {
  const dispatch = useAppDispatch();
  // const [email] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');

  const {email} = useAppSelector(getAuthUserProfile);

  const isPasswordMatch = async () => {
    if (password === '' || rePassword === '') {
      CustomToastBottom('Error, Passwords cannot be empty!');
      return false;
    } else if (password !== rePassword) {
      CustomToastBottom('Error, Passwords do not match!');
      return false;
    } else {
      CustomToastBottom('Success, Account created successfully!');
      dispatch(
        AuthActions.handleNewPassword({
          email: email || '',
          password: password,
        }),
      );
      return true;
    }
  };

  console.log('email: ', email);
  console.log('password: ', password);

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);

  const styles = useStyles();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <Headers
            leftIcon={true}
            onPressLeftIcon={() => NavigationService.goBack()}
          />
          <AuthHeader
            title="Change Password 🔐"
            subTitle="Enter your new password. If you forget it, then you have to do forgot password."
          />
          <View>
            <Text style={styles.text2}>Password</Text>
            <InputCustomV1
              placeholder="Enter your Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secure
            />
          </View>
          <View>
            <Text style={styles.text2}>Confirm Password</Text>
            <InputCustomV1
              placeholder="Enter your Confirm Password"
              value={rePassword}
              onChangeText={text => setRePassword(text)}
              secure
            />
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              checked={checked}
              textStyle={styles.textCheckbox}
              onPress={toggleCheckbox}
              title={'Remember me'}
            />
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity
              style={styles.btnContinue}
              onPress={isPasswordMatch}>
              <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePassword;
