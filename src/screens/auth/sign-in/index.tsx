import React, {FunctionComponent, useEffect, useState} from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {Text} from 'react-native';
import {BigButton} from '../../../components';
import AuthHeaderV1 from '../../../components/customs/AuthHeaderV1';
import Header from '../../../components/customs/Headers';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux/reducer';
import {isValidEmail, isValidPassword} from '../../../utils';
import useStyles from './styles';
import {GoogleIcon} from '../../../assets/icons';

const LoginScreen: FunctionComponent = () => {
  const styles = useStyles();

  const [isCheckValidateEmail, setIsCheckValidateEmail] =
    useState<boolean>(true);
  const [isCheckValidatePassword, setIsCheckValidatePassword] =
    useState<boolean>(true);

  const toggleCheckbox = () => setChecked(!checked);

  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const [checked, setChecked] = React.useState<boolean>(false);

  useEffect(() => {
    if (credentials.email !== null && credentials.password !== null) {
      setIsCheckValidateEmail(true);
      setIsCheckValidatePassword(true);
    }
  }, [credentials.email, credentials.password]);

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    if (
      isValidEmail(credentials.email) &&
      isValidPassword(credentials.password)
    ) {
      await dispatch(
        AuthActions.handleLogin({
          email: credentials.email,
          password: credentials.password,
          device_token: '1234567890',
        }),
      );
    }
    !isValidEmail(credentials.email)
      ? setIsCheckValidateEmail(false)
      : setIsCheckValidateEmail(true);

    !isValidPassword(credentials.password)
      ? setIsCheckValidatePassword(false)
      : setIsCheckValidatePassword(true);
  };

  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: '1234567890',
      }),
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
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
              title="Login Account"
              avatar={true}
              subTitle="Welcome back to "
              titleComicverse="Comic Verse"
              onPress={() => {
                NavigationService.navigate(routes.LOBBY);
              }}
            />
          </View>

          <View style={styles.body}>
            <View style={styles.formContainer}>
              {isCheckValidateEmail ? (
                <View>
                  <Text style={styles.titleInput}>Email</Text>
                  <InputCustomV1
                    placeholder="Enter your email"
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
                    placeholder="Enter your email"
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

              <View style={styles.viewCBFP}>
                <View style={styles.checkbox}>
                  <CheckBox
                    checked={checked}
                    textStyle={styles.textCheckbox}
                    onPress={toggleCheckbox}
                    title={'Remember me'}
                  />
                </View>
                <View style={styles.optionView}>
                  <TouchableOpacity
                    onPress={() =>
                      NavigationService.navigate(routes.FORGOT_PASSWORD)
                    }
                    style={styles.btnFP}>
                    <Text style={styles.color}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flex: 9}}>
                <View style={styles.viewBtnLogin}>
                  <BigButton
                    textButton="Login"
                    onPressButton={() => {
                      handleLogin();
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
                <View style={styles.viewNR}>
                  <Text style={styles.textNot}>Not register yet ?</Text>
                  <TouchableOpacity
                    style={{height: 26}}
                    onPress={() => {
                      NavigationService.navigate(routes.CREATE_ACCOUNT);
                    }}>
                    <Text style={styles.textCA}>Create Account</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
