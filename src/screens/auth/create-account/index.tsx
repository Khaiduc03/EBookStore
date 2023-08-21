import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {AuthHeader, BigButton, InputCustom} from '../../../components';
import Header from '../../../components/customs/Headers';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';
import {
  comparePassword,
  isValidEmail,
  isValidPassword,
  showToastError,
} from '../../../utils';
import useStyles from './styles';

import {useAppDispatch} from '../../../hooks';
import {AuthActions} from '../../../redux/reducer';

const CreateAccount: FunctionComponent = () => {
  const styles = useStyles();

  const toggleCheckbox = () => setChecked(!checked);
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
    comfirmPassword: string;
  }>({
    email: '',
    password: '123456',
    comfirmPassword: '123456',
  });

  const [inputErrors, setInputErrors] = React.useState<{
    email: boolean;
    password: boolean;
    comfirmPassword: boolean;
  }>({
    email: false,
    password: false,
    comfirmPassword: false,
  });

  const handleCreateAccount = async () => {
    const emailIsValid = isValidEmail(credentials.email);
    const passwordIsValid = isValidPassword(credentials.password);
    const comfirmPasswordIsValid = comparePassword(
      credentials.password,
      credentials.comfirmPassword,
    );
    setInputErrors({
      email: !emailIsValid,
      password: !passwordIsValid,
      comfirmPassword: !comfirmPasswordIsValid,
    });
    if (
      credentials.email.length === 0 ||
      credentials.password.length === 0 ||
      credentials.comfirmPassword.length === 0
    ) {
      showToastError('Please enter full information');

      return;
    }

    if (!emailIsValid) {
      showToastError('Please enter the correct email format');
      return;
    }
    if (!comfirmPasswordIsValid) {
      showToastError('Password must be more than 6 characters');
      return;
    }
    if (!passwordIsValid) {
      showToastError('Confirm password does not match');
      return;
    }

    dispatch(
      AuthActions.handleCreateAccount({
        email: credentials.email,
        password: credentials.password,
      }),
    );
  };

  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header
              leftIcon={true}
              onPressLeftIcon={() => {
                Keyboard.dismiss();
                if (NavigationService.canGoBack()) {
                  NavigationService.goBack();
                  return;
                }
                NavigationService.navigate(routes.LOBBY);
              }}
            />

            <AuthHeader
              title="Create an Account 🔐"
              subTitle="Enter your  username, email & password. If you forget it, then you have to do forgot password."
            />

            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>email</Text>
              <InputCustom
                placeholder="Enter your email"
                value={credentials.email}
                onChangeText={text =>
                  setCredentials({...credentials, email: text})
                }
                style={inputErrors.email ? styles.errorInput : null}
              />
              <Text style={styles.titleInput}>Password</Text>
              <InputCustom
                placeholder="Enter your password"
                secure={true}
                value={credentials.password}
                onChangeText={text =>
                  setCredentials({...credentials, password: text})
                }
                style={inputErrors.password ? styles.errorInput : null}
              />
              <Text style={styles.titleInput}>Confirm Password</Text>
              <InputCustom
                placeholder="Enter your password"
                secure={true}
                value={credentials.comfirmPassword}
                onChangeText={text =>
                  setCredentials({...credentials, comfirmPassword: text})
                }
              />
              <View style={styles.checkbox}>
                <CheckBox
                  checked={checked}
                  textStyle={styles.textCheckbox}
                  onPress={toggleCheckbox}
                  title={'Remember me'}
                />
              </View>
              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign up"
                  onPressButton={() => {
                    handleCreateAccount();
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccount;
