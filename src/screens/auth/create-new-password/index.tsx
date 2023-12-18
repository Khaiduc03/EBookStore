import {useRoute} from '@react-navigation/native';
import {Text} from '@rneui/base';
import {CheckBox} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {AuthHeader, BigButton, Headers} from '../../../components';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions, getAuthUserProfile} from '../../../redux';
import {isValidPassword} from '../../../utils';
import useStyles from './styles';

const CreateNewPasswordScreen: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const {params} = useRoute() as any;
  console.log(params.email);
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [isCheckValidatePassword, setIsCheckValidatePassword] =
    useState<boolean>(true);
  const [isCheckValidateConfirmPassword, setIsCheckValidateConfirmPassword] =
    useState<boolean>(true);

  useEffect(() => {
    if (password !== null && confirmpassword !== null) {
      setIsCheckValidatePassword(true);
      setIsCheckValidateConfirmPassword(true);
    }
  }, [password, confirmpassword]);

  const handleContinue = () => {
    console.log(confirmpassword);
    console.log(password);

    !isValidPassword(password)
      ? setIsCheckValidatePassword(false)
      : setIsCheckValidatePassword(true);

    if (confirmpassword !== password || !isValidPassword(confirmpassword)) {
      setIsCheckValidateConfirmPassword(false);
    } else {
      dispatch(
        AuthActions.handleUpdatePassword({
          email: params.email,
          password: password,
          isOTP: params.isOTP || false,
        }),
      );
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
            onPressLeftIcon={() => {
              Keyboard.dismiss();
              if (NavigationService.canGoBack()) {
                return NavigationService.goBack();
              }
              return NavigationService.navigate(routes.SEND_OTP);
            }}
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

export default CreateNewPasswordScreen;
