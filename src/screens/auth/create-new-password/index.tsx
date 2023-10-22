import {Text} from '@rneui/base';
import {CheckBox} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthHeader, BigButton, Headers} from '../../../components';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions, getAuthUserProfile} from '../../../redux';
import {
  CustomToastBottom,
  isValidPassword,
  showToastError,
} from '../../../utils';
import useStyles from './styles';

const CreateNewPassword: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [isCheckValidatePassword, setIsCheckValidatePassword] =
    useState<boolean>(true);
  const [isCheckValidateConfirmPassword, setIsCheckValidateConfirmPassword] =
    useState<boolean>(true);

  const {email} = useAppSelector(getAuthUserProfile);

  useEffect(() => {
    if (password !== null && confirmpassword !== null) {
      setIsCheckValidatePassword(true);
      setIsCheckValidateConfirmPassword(true);
    }
  }, [password, confirmpassword]);

  const handleContinue = () => {
    // if (password === '' || rePassword === '') {
    //   CustomToastBottom('Error, Passwords cannot be empty!');
    //   return false;
    // } else if (password !== rePassword) {
    //   CustomToastBottom('Error, Passwords do not match!');
    //   return false;
    // } else {
    //   CustomToastBottom('Success, Account created successfully!');
    //   dispatch(
    //     AuthActions.handleNewPassword({
    //       email: email || '',
    //       password: password,
    //     }),
    //   );
    //   return true;
    // }
    if (confirmpassword === password) {
      dispatch(
        AuthActions.handleNewPassword({
          email: email || '',
          password: password,
        }),
      );
    } else {
      showToastError('An error occurred, please check again!');
    }

    !isValidPassword(password)
      ? setIsCheckValidatePassword(false)
      : setIsCheckValidatePassword(true);

    if (confirmpassword !== password || !isValidPassword(confirmpassword)) {
      setIsCheckValidateConfirmPassword(false);
    }
  };

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <Headers
            leftIcon={true}
            onPressLeftIcon={() => NavigationService.navigate(routes.SEND_OTP)}
          />
          <View style={styles.Headers}>
            <AuthHeader
              title="Create New Password"
              subTitle="Enter your new password. If you forget it, then you have to do forgot password."
            />
          </View>

          <View style={styles.formContainer}>
            {isCheckValidatePassword ? (
              <View>
                <Text style={styles.titleInput}>Password</Text>
                <InputCustomV1
                  placeholder="Enter your password"
                  secure={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Password</Text>
                <InputCustomV1
                  placeholder="Enter your password"
                  secure={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  errorMessage="Password must be longer than 6 characters."
                />
              </View>
            )}
            {isCheckValidateConfirmPassword ? (
              <View>
                <Text style={styles.titleInput}>Confirm Password</Text>
                <InputCustomV1
                  placeholder="Enter your confirm password"
                  secure={true}
                  value={confirmpassword}
                  onChangeText={text => setConfirmpassword(text)}
                />
              </View>
            ) : (
              <View style={styles.marginError}>
                <Text style={styles.titleInput}>Confirm Password</Text>
                <InputCustomV1
                  placeholder="Enter your confirm password"
                  secure={true}
                  value={confirmpassword}
                  onChangeText={text => setConfirmpassword(text)}
                  errorMessage="The confirm password must match the previous password."
                />
              </View>
            )}
            <View style={styles.viewCBFP}>
              <View style={styles.checkbox}>
                <CheckBox
                  checked={checked}
                  textStyle={styles.textCheckbox}
                  onPress={toggleCheckbox}
                  title={'Remember me'}
                />
              </View>
            </View>
          </View>

          <View style={styles.viewBtnLogin}>
            <BigButton
              textButton="Continue"
              onPressButton={() => {
                handleContinue();
              }}
              style={styles.button}
              textStyle={{fontSize: 16}}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateNewPassword;
