import React, {FunctionComponent} from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {AuthHeader, BigButton} from '../../../components';
import Header from '../../../components/customs/Headers';
import InputCustomV1 from '../../../components/customs/InputCustomV1';
import {routes} from '../../../constants';
import {useAppDispatch} from '../../../hooks';
import {NavigationService} from '../../../navigation';
import {AuthActions} from '../../../redux/reducer';
import useStyles from './styles';
import {Text} from 'react-native';

const LoginScreen: FunctionComponent = () => {
  const styles = useStyles();

  const toggleCheckbox = () => setChecked(!checked);

  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const [checked, setChecked] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleSignIn = async () => {
    dispatch(
      AuthActions.handleLogin({
        email: credentials.email,
        password: credentials.password,
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
            <AuthHeader
              title="Login 🔐"
              subTitle="Please enter your email and password to sign in."
            />
          </View>

          <View style={styles.body}>
            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>Email</Text>
              <InputCustomV1
                placeholder="Enter your email"
                value={credentials.email}
                onChangeText={text =>
                  setCredentials({...credentials, email: text})
                }
              />
              <Text style={styles.titleInput}>Password</Text>
              <InputCustomV1
                placeholder="Enter your password"
                secure={true}
                value={credentials.password}
                onChangeText={text =>
                  setCredentials({...credentials, password: text})
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

              <View style={styles.optionView}>
                <TouchableOpacity
                  onPress={() =>
                    NavigationService.navigate(routes.FORGOT_PASSWORD)
                  }
                  style={styles.btnFP}>
                  <Text style={styles.color}>Forgotten password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.bottom}>
                <BigButton
                  textButton="Login"
                  onPressButton={() => {
                    handleSignIn();
                  }}
                  style={styles.button}
                  textStyle={{fontSize: 16}}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
