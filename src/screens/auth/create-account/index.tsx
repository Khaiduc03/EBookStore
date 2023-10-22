import React, {FunctionComponent, useEffect, useState} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {GoogleIcon} from '../../../assets/icons';
import {UserImage} from '../../../assets/svg';
import {BigButton} from '../../../components';
import AuthHeaderV1 from '../../../components/customs/AuthHeaderV1';
import Header from '../../../components/customs/Headers';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux';
import {isValidEmail, isValidPassword, showToastError} from '../../../utils';
import useStyles from './styles';

const CreateAccountScreen: FunctionComponent = () => {
  const styles = useStyles();

  const [checked, setChecked] = React.useState<boolean>(false);

  const toggleCheckbox = () => setChecked(!checked);
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
    confirmpassword: string;
  }>({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [isCheckValidateEmail, setIsCheckValidateEmail] =
    useState<boolean>(true);
  const [isCheckValidatePassword, setIsCheckValidatePassword] =
    useState<boolean>(true);
  const [isCheckValidateConfirmPassword, setIsCheckValidateConfirmPassword] =
    useState<boolean>(true);

  useEffect(() => {
    if (
      credentials.email !== null &&
      credentials.password !== null &&
      credentials.confirmpassword !== null
    ) {
      setIsCheckValidateEmail(true);
      setIsCheckValidatePassword(true);
      setIsCheckValidateConfirmPassword(true);
    }
  }, [credentials.email, credentials.password, credentials.confirmpassword]);

  const handleCreateAccount = async () => {
    if (
      isValidEmail(credentials.email) &&
      isValidPassword(credentials.password) &&
      credentials.confirmpassword === credentials.password
    ) {
      await dispatch(
        AuthActions.handleCreateAccount({
          email: credentials.email,
          password: credentials.password,
        }),
      );
    } else {
      showToastError('An error occurred, please check again!');
    }
    !isValidEmail(credentials.email)
      ? setIsCheckValidateEmail(false)
      : setIsCheckValidateEmail(true);

    !isValidPassword(credentials.password)
      ? setIsCheckValidatePassword(false)
      : setIsCheckValidatePassword(true);

    if (
      credentials.confirmpassword !== credentials.password ||
      !isValidPassword(credentials.confirmpassword)
    ) {
      setIsCheckValidateConfirmPassword(false);
    }
  };

  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: '1234567890',
      }),
    );
  };

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

            <View style={styles.Headers}>
              <AuthHeaderV1
                title="Create Account "
                subTitle="You can create an account, and after that, you will be able to log in to our official application."
                avatar={<UserImage />}
              />
            </View>

            <View style={styles.formContainer}>
              {isCheckValidateEmail ? (
                <View style={styles.marginOriginal}>
                  <Text style={styles.titleInput}>Email</Text>
                  <InputCustomV1
                    placeholder="Enter your email address"
                    value={credentials.email}
                    onChangeText={text =>
                      setCredentials({...credentials, email: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Email</Text>
                  <InputCustomV1
                    placeholder="Enter your email address"
                    value={credentials.email}
                    onChangeText={text =>
                      setCredentials({...credentials, email: text})
                    }
                    errorMessage="Please enter a valid email address in the correct format."
                  />
                </View>
              )}

              {isCheckValidatePassword ? (
                <View>
                  <Text style={styles.titleInput}>Password</Text>
                  <InputCustomV1
                    placeholder="Enter your password"
                    secure={true}
                    value={credentials.password}
                    onChangeText={text =>
                      setCredentials({...credentials, password: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Password</Text>
                  <InputCustomV1
                    placeholder="Enter your password"
                    secure={true}
                    value={credentials.password}
                    onChangeText={text =>
                      setCredentials({...credentials, password: text})
                    }
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
                    value={credentials.confirmpassword}
                    onChangeText={text =>
                      setCredentials({...credentials, confirmpassword: text})
                    }
                  />
                </View>
              ) : (
                <View style={styles.marginError}>
                  <Text style={styles.titleInput}>Confirm Password</Text>
                  <InputCustomV1
                    placeholder="Enter your confirm password"
                    secure={true}
                    value={credentials.confirmpassword}
                    onChangeText={text =>
                      setCredentials({...credentials, confirmpassword: text})
                    }
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

              <View style={{flex: 9}}>
                <View style={styles.viewBtnLogin}>
                  <BigButton
                    textButton="Sign up"
                    onPressButton={() => {
                      handleCreateAccount();
                    }}
                    style={styles.button}
                    textStyle={{fontSize: 16}}
                  />
                </View>
                <View style={styles.viewUO}>
                  <View style={styles.viewUnderLine} />

                  <Text style={styles.textOSIW}>or sign in with</Text>

                  <View style={styles.viewUnderLine} />
                </View>
                <View style={styles.viewBtnGoogle}>
                  <TouchableOpacity
                    style={[styles.buttonGG, styles.backgroundColorsWhite]}
                    onPress={handleGoogle}>
                    <GoogleIcon style={{marginRight: 12}} />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewAR}>
                  <Text style={styles.textAhaa}>Already have an account?</Text>
                  <TouchableOpacity
                    style={{height: 26}}
                    onPress={() => {
                      NavigationService.navigate(routes.SIGN_IN);
                      setIsCheckValidateEmail(true);
                      setIsCheckValidatePassword(true);
                      setIsCheckValidateConfirmPassword(true);
                    }}>
                    <Text style={styles.textSih}>Sign in here</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccountScreen;
